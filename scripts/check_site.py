from html.parser import HTMLParser
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = [ROOT / 'index.html', ROOT / 'projects/index.html', ROOT / 'projects/custom-wood-counters/index.html']

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in {'a', 'link', 'script', 'img'}:
            key = {'a': 'href', 'link': 'href', 'script': 'src', 'img': 'src'}[tag]
            if key in attrs:
                self.refs.append((tag, attrs[key]))

errors = []
for html in HTML_FILES:
    if not html.exists():
        errors.append(f'Missing HTML file: {html}')
        continue
    text = html.read_text(encoding='utf-8')
    parser = LinkParser()
    parser.feed(text)
    for tag, ref in parser.refs:
        if ref.startswith(('http://', 'https://', 'mailto:', 'tel:', '#')):
            continue
        path_ref = ref.split('#', 1)[0]
        if not path_ref:
            continue
        resolved = (html.parent / path_ref).resolve()
        if ref.endswith('/') or path_ref.endswith('/'):
            resolved = resolved / 'index.html'
        if not resolved.exists():
            errors.append(f'{html.relative_to(ROOT)} references missing {ref} -> {resolved}')

if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f'OK: checked {len(HTML_FILES)} HTML files and local asset references')
