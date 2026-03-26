import os
import codecs

html_path = r'd:\Estrela\Documents\VilaNaval\dashboard.html'
with codecs.open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# 1. Add Share built-in API in script
js_script = '''
window.printSection = function(sectionId) {
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('print-active'));
    document.getElementById(sectionId).classList.add('print-active');
    window.print();
    setTimeout(() => {
        document.getElementById(sectionId).classList.remove('print-active');
    }, 1000);
}

window.shareNotice = function(title, text) {
    if (navigator.share) {
        navigator.share({
            title: title || 'Aviso da Vila Naval',
            text: text || 'Veja este comunicado da administração.',
            url: window.location.href
        }).catch(err => console.log('Erro ao compartilhar', err));
    } else {
        alert('Botão de compartilhamento não suportado neste navegador. Copie a URL para compartilhar.');
    }
}
'''
if 'window.printSection' not in content:
    # We will inject the script in script.js instead! Wait, I'll do it in script.js
    pass

# Update admin-only sidebar div to have scrollbar
content = content.replace('<div class="admin-only"\n                    style="margin-top: 20px; border-top: 1px solid var(--glass-border); padding-top: 10px;">', 
                          '<div class="admin-only" style="margin-top: 15px; border-top: 1px solid var(--glass-border); padding-top: 10px; max-height: 180px; overflow-y: auto; overflow-x: hidden; display: flex; flex-direction: column;">')

# Update "Ver todos" on Mural for Share button (for permissionario) and Print button. 
# Wait, Mural is #mural.
content = content.replace('<h3><i class="ri-whatsapp-line"></i> Grupo Oficial: Nossa Vila Naval\n                            </h3>',
                          '<h3><i class="ri-whatsapp-line"></i> Grupo Oficial: Nossa Vila Naval</h3>\n<div style="display:flex;gap:10px;"><button class="btn btn-sm btn-outline" style="color:white; border-color:white;" onclick="window.shareNotice(\'Grupo Oficial WhatsApp\', \'Acesso o canal oficial da vila!\')"><i class="ri-share-line"></i> Share</button><button class="btn btn-sm btn-outline admin-only" style="color:white; border-color:white;" onclick="window.printSection(\'mural\')"><i class="ri-printer-line"></i> Imprimir</button></div>')

# Calendar Print button
content = content.replace('<h3><i class="ri-calendar-event-line"></i> Calendário de Ocupação</h3>',
                          '<div style="display:flex; align-items:center; justify-content:space-between; width:100%;">\n<h3><i class="ri-calendar-event-line"></i> Calendário de Ocupação</h3>\n<button class="btn btn-sm btn-outline" onclick="window.printSection(\'reservas\')"><i class="ri-printer-line"></i> Imprimir Calendário</button>\n</div>')

# Kanban Print button
content = content.replace('<h3><i class="ri-kanban-view"></i> Gestão de Chamados da Vila</h3>',
                          '<div style="display:flex; align-items:center; justify-content:space-between; width:100%;">\n<h3><i class="ri-kanban-view"></i> Gestão de Chamados da Vila</h3>\n<button class="btn btn-sm btn-outline" onclick="window.printSection(\'admin-chamados\')"><i class="ri-printer-line"></i> Imprimir Relatório OMR</button>\n</div>')

# Normas Print button
content = content.replace('<h3><i class="ri-file-text-line"></i> Normas e Regimentos da Vila Naval</h3>',
                          '<div style="display:flex; align-items:center; justify-content:space-between; width:100%;">\n<h3><i class="ri-file-text-line"></i> Normas e Regimentos da Vila Naval</h3>\n<button class="btn btn-sm btn-outline" onclick="window.printSection(\'normas\')"><i class="ri-printer-line"></i> Imprimir Normas</button>\n</div>')

with codecs.open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8', errors='ignore') as f:
    js_content = f.read()

if 'window.printSection' not in js_content:
    with codecs.open(js_path, 'a', encoding='utf-8') as f:
        f.write("\n" + js_script)

print('DOM elements embedded and JS scripts merged.')
