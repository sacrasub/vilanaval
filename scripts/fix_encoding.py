import codecs
import os

def fix_file(path):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
    
    with codecs.open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    replacements = {
        'âš ï¸ ': '⚠️',
        'ðŸ“¤': '📤',
        'âœ“': '✓',
        'Cà´njuge': 'Cônjuge',
        'Ì': 'Í', # Sometimes used in strings
    }
    
    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)
    
    if new_content != content:
        with codecs.open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed encoding in: {path}")
    else:
        print(f"No mojibake found in: {path}")

if __name__ == "__main__":
    files = [
        r'd:\Estrela\Documents\VilaNaval\dashboard.html',
        r'd:\Estrela\Documents\VilaNaval\index.html'
    ]
    for f in files:
        fix_file(f)
