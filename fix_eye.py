import codecs
import re

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Replace confirmarMudarSenhaDashboard regardless of spacing
pattern = re.compile(r"window\.confirmarMudarSenhaDashboard = async function\s*\(\)\s*\{[\s\S]*?document\.getElementById\('btnConfirmaNovaSenha'\)\.innerHTML = 'Salvar Modificação';\s*\}")

new_func = '''window.confirmarMudarSenhaDashboard = async function () {
    const input = document.getElementById('novaSenhaInputDash');
    const inputConf = document.getElementById('novaSenhaInputDashConf');
    const novaSenha = input.value;
    const novaSenhaConf = inputConf ? inputConf.value : novaSenha;
    
    if(novaSenha.length < 6) {
        alert("A senha precisa ter pelo menos 6 caracteres.");
        return;
    }
    if (novaSenha !== novaSenhaConf) {
        alert("As senhas não coincidem.");
        return;
    }
    
    const nip = localStorage.getItem('vnt_role');
    if(!window._supabase) {
        alert("Falha de conexão com a Base de Dados. Tente novamente.");
        return;
    }
    
    document.getElementById('btnConfirmaNovaSenha').innerHTML = 'Salvando...';
    try {
        const { data, error } = await window._supabase.from('moradores').select('*').eq('nip', nip);
        if(data && data.length > 0) {
            let dados = data[0].dados || {};
            dados.senha = novaSenha;
            await window._supabase.from('moradores').update({ dados: dados }).eq('nip', nip);
            alert("Senha alterada com sucesso!");
        } else if (nip === 'sindico') {
            let mockData = { nome: 'Síndico', senha: novaSenha };
            await window._supabase.from('moradores').insert([{ nip: 'sindico', dados: mockData }]);
            alert("Senha do Síndico cadastrada com sucesso na base!");
        } else {
            alert("Erro ao localizar seu registro no banco de dados.");
        }
        input.value = '';
        if(inputConf) inputConf.value = '';
        fecharModalSenhaDashboard();
    } catch(e) {
        alert("Erro fatal ao salvar senha.");
    }
    document.getElementById('btnConfirmaNovaSenha').innerHTML = 'Salvar Modificação';
}'''

js_content = pattern.sub(new_func, js_content)
with codecs.open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
print("JS updated!")

# Fix the CSS z-index and pointer-events for the eye icon in both HTMLs
html_path = r'd:\Estrela\Documents\VilaNaval\index.html'
with codecs.open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

html_content = html_content.replace('cursor: pointer;', 'cursor: pointer; z-index: 100; pointer-events: all; pointer-events: auto;')
with codecs.open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

dash_path = r'd:\Estrela\Documents\VilaNaval\dashboard.html'
with codecs.open(dash_path, 'r', encoding='utf-8') as f:
    dash_content = f.read()

dash_content = dash_content.replace('cursor: pointer;', 'cursor: pointer; z-index: 100; pointer-events: all; pointer-events: auto;')
with codecs.open(dash_path, 'w', encoding='utf-8') as f:
    f.write(dash_content)

print("HTMLs updated!")
