import codecs
import re

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Fix Sindico login with try-catch and whitespace protection
old_sindico_block = '''            if (nip === 'sindico' || nip.includes('admin')) {
                let validPwd = 'sindico';
                if (window._supabase) {
                    const { data } = await window._supabase.from('moradores').select('dados').eq('nip', 'sindico');
                    if (data && data.length > 0 && data[0].dados && data[0].dados.senha) {
                        validPwd = data[0].dados.senha;
                    }
                }
                if (senha !== validPwd) '''

new_sindico_block = '''            if (nip === 'sindico' || nip.includes('admin')) {
                let validPwd = 'sindico';
                try {
                    if (window._supabase) {
                        const { data, error } = await window._supabase.from('moradores').select('dados').eq('nip', 'sindico');
                        if (data && data.length > 0 && data[0].dados && data[0].dados.senha) {
                            validPwd = data[0].dados.senha.trim();
                        }
                    }
                } catch(e) {
                    console.error("Erro consultando supabase para sindico:", e);
                }
                if (senha.trim() !== validPwd) '''

js_content = js_content.replace(old_sindico_block, new_sindico_block)

with codecs.open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

# Fix HTML styling for eye icons
def fix_icons(html_path):
    with codecs.open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # ensure left is auto and right is strictly applied
    content = content.replace('style="position:absolute; right: 15px;', 'style="position:absolute; left: auto !important; right: 15px !important;')
    content = content.replace('style="position: absolute; right: 15px;', 'style="position:absolute; left: auto !important; right: 15px !important;')
    
    with codecs.open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)

fix_icons(r'd:\Estrela\Documents\VilaNaval\index.html')
fix_icons(r'd:\Estrela\Documents\VilaNaval\dashboard.html')

print("Login try-catch and CSS left:auto logic applied successfully!")
