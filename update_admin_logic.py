import codecs

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Fix the Admin Bypass
if "if (senha !== 'sindico')" not in js_content:
    old_admin = '''            // Admin bypass
            if (nip === 'sindico' || nip.includes('admin')) {
                localStorage.setItem('vnt_role', 'sindico');
                localStorage.setItem('vnt_user', 'Síndico');
                window.location.href = 'dashboard.html';
                return;
            }'''
    
    new_admin = '''            // Admin bypass
            if (nip === 'sindico' || nip.includes('admin')) {
                if (senha !== 'sindico') {
                    alert("Senha do Síndico Incorreta!");
                    btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                    btn.disabled = false;
                    return;
                }
                localStorage.setItem('vnt_role', 'sindico');
                localStorage.setItem('vnt_user', 'Síndico');
                window.location.href = 'dashboard.html';
                return;
            }'''
            
    # Try generic replace
    if old_admin in js_content:
        js_content = js_content.replace(old_admin, new_admin)
        print("Admin bypass replaced via literal matching.")
    else:
        # regex approach if spaces differ
        import re
        pattern = re.compile(r"// Admin bypass\s+if \(nip === 'sindico' \|\| nip\.includes\('admin'\)\) \{\s+localStorage\.setItem\('vnt_role', 'sindico'\);\s+localStorage\.setItem\('vnt_user', 'Síndico'\);\s+window\.location\.href = 'dashboard\.html';\s+return;\s+\}")
        if pattern.search(js_content):
            js_content = pattern.sub(new_admin, js_content)
            print("Admin bypass replaced via regex!")
        else:
            print("Could not find Admin bypass string to replace")

with codecs.open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
