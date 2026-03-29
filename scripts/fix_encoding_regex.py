import re
import os

def fix_file(path):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
    
    with open(path, 'rb') as f:
        bytes_content = f.read()
    
    # Define byte sequences for mojibake
    # âš ï¸  is usually E2 9A A0 EF B8 8F in UTF-8
    # If read as Latin-1 and then re-encoded, it becomes something else.
    # Let's try to replace the literal strings first by reading as utf-8 but with "ignore"
    text = bytes_content.decode('utf-8', errors='ignore')

    replacements = {
        'âš ï¸ ': '⚠️',
        'ðŸ“¤': '📤',
        'âœ“': '✓',
        'Cà´njuge': 'Cônjuge',
    }
    
    new_text = text
    for old, new in replacements.items():
        new_text = new_text.replace(old, new)
    
    if new_text != text:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_text)
        print(f"Fixed encoding in: {path}")
    else:
        # Try binary replacement if text replacement failed
        # Example for âš ï¸ (E2 9A A0 EF B8 8F)
        # In some mojibake it might be literally the characters â š ...
        print(f"No changes made to: {path}")

if __name__ == "__main__":
    files = [
        r'd:\Estrela\Documents\VilaNaval\dashboard.html',
        r'd:\Estrela\Documents\VilaNaval\index.html'
    ]
    for f in files:
        fix_file(f)
