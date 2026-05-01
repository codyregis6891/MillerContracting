const homepageDeck = document.querySelector('.deck-page .deck-main');

if (homepageDeck) {
  const slides = [...homepageDeck.querySelectorAll('.deck-slide')];
  const dotsWrap = homepageDeck.querySelector('.deck-dots');
  const prevButton = homepageDeck.querySelector('[data-deck-prev]');
  const nextButton = homepageDeck.querySelector('[data-deck-next]');
  let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));
  let locked = false;

  const labels = slides.map((slide, index) => slide.dataset.slideLabel || slide.id || `Section ${index + 1}`);

  if (dotsWrap) {
    labels.forEach((label, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'deck-dot';
      dot.textContent = index === 0 ? '01' : String(index + 1).padStart(2, '0');
      dot.setAttribute('aria-label', label);
      dot.addEventListener('click', () => showSlide(index));
      dotsWrap.appendChild(dot);
    });
  }

  const dots = dotsWrap ? [...dotsWrap.querySelectorAll('.deck-dot')] : [];

  const updateActiveNav = (slide) => {
    document.querySelectorAll('.nav-links a').forEach((link) => link.removeAttribute('aria-current'));
    if (!slide.id) return;
    const activeLink = document.querySelector(`.nav-links a[href="#${slide.id}"]`);
    if (activeLink) activeLink.setAttribute('aria-current', 'page');
  };

  function showSlide(nextIndex) {
    if (!slides.length) return;
    const boundedIndex = Math.max(0, Math.min(slides.length - 1, nextIndex));
    if (boundedIndex === activeIndex) return;

    const current = slides[activeIndex];
    const next = slides[boundedIndex];
    const movingForward = boundedIndex > activeIndex;

    current.classList.remove('is-active', 'is-exiting-forward', 'is-exiting-back');
    current.classList.add(movingForward ? 'is-exiting-forward' : 'is-exiting-back');
    next.classList.remove('is-exiting-forward', 'is-exiting-back');
    next.classList.add('is-active');

    activeIndex = boundedIndex;
    dots.forEach((dot, index) => dot.classList.toggle('is-active', index === activeIndex));
    prevButton?.toggleAttribute('disabled', activeIndex === 0);
    nextButton?.toggleAttribute('disabled', activeIndex === slides.length - 1);
    updateActiveNav(next);

    window.setTimeout(() => current.classList.remove('is-exiting-forward', 'is-exiting-back'), 760);
  }

  const move = (direction) => {
    if (locked) return;
    locked = true;
    showSlide(activeIndex + direction);
    window.setTimeout(() => { locked = false; }, 760);
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      const index = slides.indexOf(target);
      if (index === -1) return;
      event.preventDefault();
      showSlide(index);
    });
  });

  prevButton?.addEventListener('click', () => move(-1));
  nextButton?.addEventListener('click', () => move(1));

  window.addEventListener('wheel', (event) => {
    if (!window.matchMedia('(min-width: 901px)').matches) return;
    if (Math.abs(event.deltaY) < 18 && Math.abs(event.deltaX) < 18) return;
    event.preventDefault();
    const direction = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? Math.sign(event.deltaX) : Math.sign(event.deltaY);
    move(direction > 0 ? 1 : -1);
  }, { passive: false });

  window.addEventListener('keydown', (event) => {
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) {
      event.preventDefault();
      move(1);
    }
    if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      move(-1);
    }
  });

  const workStage = homepageDeck.querySelector('.work-stage');
  if (workStage) {
    const workTiles = [...workStage.querySelectorAll('.work-evidence article')];
    const setExpandedTile = (tile) => {
      workStage.classList.add('has-expanded');
      workTiles.forEach((item) => {
        const isActive = item === tile;
        item.classList.toggle('is-expanded', isActive);
        const toggle = item.querySelector('.work-evidence-toggle');
        if (toggle) {
          toggle.setAttribute('aria-expanded', String(isActive));
          const label = toggle.querySelector('em');
          if (label) label.textContent = isActive ? 'Collapse' : 'Expand';
        }
      });
    };

    workTiles.forEach((tile) => {
      tile.querySelector('.work-evidence-toggle')?.addEventListener('click', () => {
        if (tile.classList.contains('is-expanded')) {
          workStage.classList.remove('has-expanded');
          tile.classList.remove('is-expanded');
          const toggle = tile.querySelector('.work-evidence-toggle');
          toggle?.setAttribute('aria-expanded', 'false');
          const label = toggle?.querySelector('em');
          if (label) label.textContent = 'Expand';
          return;
        }
        setExpandedTile(tile);
      });
    });

    const initiallyExpanded = workTiles.find((tile) => tile.classList.contains('is-expanded'));
    if (initiallyExpanded) setExpandedTile(initiallyExpanded);
  }

  showSlide(activeIndex);
} else {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
