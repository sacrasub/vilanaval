import os

files = [r'd:\Estrela\Documents\VilaNaval\dashboard.html', r'd:\Estrela\Documents\VilaNaval\index.html']
corrections = {
    'Inà­cio': 'Início',
    'Inàcio': 'Início',
    'àšltimos': 'Últimos',
    'ðŸŽ¯': '🎯',
    'âš“': '⚓',
    'informaçàµes': 'informações',
    'sugestàµes': 'sugestões',
    'dàºvidas': 'dúvidas',
    'formulà¡rio': 'formulário',
    'à¡': 'á',
    'à©': 'é',
    'àº': 'ú',
    'àª': 'ê',
    'à³': 'ó',
    'à§': 'ç',
    'à£': 'ã',
    'à ': 'à',
    'à ': 'à',
    'permissionà¡rios': 'permissionários',
    'obrigatório': 'obrigatório'
}

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        for k, v in corrections.items():
            content = content.replace(k, v)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
print('Encoding fixes applied.')
