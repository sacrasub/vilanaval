import os

with open(r'd:\Estrela\Documents\VilaNaval\dashboard.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Locate the <section id="cadastro" class="tab-pane"> ... </section> block
start_idx = content.find('<section id="cadastro" class="tab-pane">')
end_idx = content.find('</section>', start_idx) + 10

if start_idx != -1 and end_idx != -1:
    cadastro_code = content[start_idx:end_idx]
    
    # Strip it out of the original
    content = content[:start_idx] + content[end_idx:]
    
    # Add <div class="card glass-panel"><div class="card-body"> wrapped around it 
    card_wrapper = cadastro_code.replace('<section id="cadastro" class="tab-pane">', 
        '<section id="cadastro" class="tab-pane">\n<div class="card glass-panel"><div class="card-body" style="padding:40px;">')
    card_wrapper = card_wrapper.replace('</section>', '</div></div>\n</section>')
    
    # Find insertion point: inside content-area
    # Content area ends right before "<!-- Modals -->"
    insert_point = content.find('<!-- Modals -->')
    
    parts = content[:insert_point].rsplit('</div>', 1)
    new_content = parts[0] + card_wrapper + '\n</div>\n' + parts[1] + content[insert_point:]
    
    with open(r'd:\Estrela\Documents\VilaNaval\dashboard.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print('Cadastro block moved inside content-area.')
else:
    print('Could not find cadastro section.')
