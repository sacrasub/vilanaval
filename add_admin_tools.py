import os
import codecs

html_path = r'd:\Estrela\Documents\VilaNaval\dashboard.html'
with codecs.open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# 1. Add "Adicionar Norma" button next to Imprimir Normas
content = content.replace(
    '<button class="btn btn-sm btn-outline" onclick="window.printSection(\'normas\')"><i class="ri-printer-line"></i> Imprimir Normas</button>',
    '<button class="btn btn-sm btn-outline admin-only" onclick="adicionarNorma()" style="display:none; color:#38a169; border-color:#38a169;"><i class="ri-add-line"></i> Nova Norma</button>\n<button class="btn btn-sm btn-outline" onclick="window.printSection(\'normas\')"><i class="ri-printer-line"></i> Imprimir Normas</button>'
)

# 2. Add buttons in Ajustes Gerais (search for "Acompanhar Cadastros</a>")
target_admin = 'Acompanhar\n                                Cadastros</a>'
if target_admin not in content:
    target_admin = 'Acompanhar Cadastros</a>' # Fallback

if target_admin in content:
    content = content.replace(target_admin, target_admin + '\n<button class="btn btn-primary" style="background-color: #38a169; border: none;" onclick="alert(\'Funcionalidade Relatório H: Exportação do Síndico...\')"><i class="ri-file-chart-line"></i> Relatório do Síndico</button>\n<button class="btn btn-primary" style="background-color: #dd6b20; border: none;" onclick="document.getElementById(\'modalNovoChamado\').style.display=\'flex\'"><i class="ri-tools-line"></i> Abrir Chamado da Vila</button>')

with codecs.open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8', errors='ignore') as f:
    js_content = f.read()

# 3. Hide 'Meus Chamados (Anexo J)' from Admin
# In script.js line 32: document.querySelectorAll('.admin-only').forEach(...)
hide_chamados_js = '''            // Show admin menu items
            document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'flex');
            const navChamados = document.querySelector('[data-target="chamados"]');
            if(navChamados) navChamados.style.display = 'none';'''

js_content = js_content.replace('// Show admin menu items\n            document.querySelectorAll(\'.admin-only\').forEach(el => el.style.display = \'flex\');', hide_chamados_js)

# 4. Implement adicionarNorma modal mocked
add_norma_js = '''
window.adicionarNorma = function() {
    let titulo = prompt("Digite o título da nova norma:");
    if (titulo) {
        let ul = document.querySelector("#normas .doc-list");
        let li = document.createElement("li");
        li.innerHTML = <div class="doc-info"><i class="ri-file-text-fill text-primary"></i> <span></span></div>
                        <button class="btn btn-sm btn-outline text-danger" onclick="this.parentElement.remove()"><i class="ri-delete-bin-line"></i> Excluir</button>;
        ul.appendChild(li);
        alert("Norma inserida localmente.");
    }
}
'''
if 'window.adicionarNorma' not in js_content:
    with codecs.open(js_path, 'a', encoding='utf-8') as f:
        f.write(add_norma_js)

with codecs.open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print('Admin buttons and scripts applied.')
