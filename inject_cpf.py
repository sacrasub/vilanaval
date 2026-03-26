import codecs

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

cpf_logic = '''
// CPF Globals
document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'cpf') {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length > 11) val = val.slice(0, 11);
        if (val.length > 0) {
            val = val.replace(/(\d{3})(\d)/, '.');
            val = val.replace(/(\d{3})(\d)/, '.');
            val = val.replace(/(\d{3})(\d{1,2})$/, '-');
        }
        e.target.value = val;
    }
});

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if(cpf === '') return false;
    if(cpf.length !== 11) return false;
    if(/^(\d)\1{10}$/.test(cpf)) return false;
    
    let soma = 0;
    let resto;
    for(let i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if(resto === 10 || resto === 11) resto = 0;
    if(resto !== parseInt(cpf.substring(9, 10))) return false;
    
    soma = 0;
    for(let i=1; i<=10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if(resto === 10 || resto === 11) resto = 0;
    if(resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

// Sindico Add Novo Morador
window.salvarMoradorSindico = async function(e) {
    e.preventDefault();
    const btn = document.getElementById('btnSalvarSindico');
    const nip = document.getElementById('novoMoradorNip').value.toLowerCase();
    const nome = document.getElementById('novoMoradorNome').value;
    const endereco = document.getElementById('novoMoradorEndereco').value;
    
    if(!validarNIP(nip)) {
        alert("NIP Inválido!"); return;
    }
    
    if(!window._supabase) { alert("BD Offline"); return; }
    
    btn.innerHTML = 'Salvando...';
    try {
        let mockData = {
            nomeCompleto: nome,
            nip: nip,
            endereco: endereco,
            senha: 'marinha123',
            posto: 'N/A'
        };
        const {data, error} = await window._supabase.from('moradores').select('id').eq('nip', nip);
        if(data && data.length > 0) {
            alert("Este NIP já existe!");
        } else {
            // insert
            await window._supabase.from('moradores').insert([{ nip: nip, dados: mockData }]);
            alert("Morador cadastrado com sucesso! Acesso liberado.");
            document.getElementById('formNovoMoradorSindico').reset();
            document.getElementById('modalNovoMorador').style.display = 'none';
            if(typeof renderMoradores === 'function') renderMoradores();
        }
    } catch(err) {
        alert("Erro no servidor.");
    }
    btn.innerHTML = 'Salvar';
}

// Handle Formulario Meu Cadastro Complete
document.addEventListener('DOMContentLoaded', () => {
    const cadForm = document.getElementById('cadastroForm');
    if(cadForm) {
        cadForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const rawCpf = document.getElementById('cpf').value;
            if(rawCpf && rawCpf.trim() !== '') {
                if(!validarCPF(rawCpf)) {
                    alert("CPF Inválido. Corrija-o ou deixe em branco.");
                    return;
                }
            }
            
            const btn = document.getElementById('btnSalvarCadastro');
            btn.innerHTML = 'Gravando...';
            btn.disabled = true;
            
            const formData = new FormData(cadForm);
            let payload = {};
            for(let [key, val] of formData.entries()) {
                payload[key] = val;
            }
            
            // Get Current NIP
            const currentNip = localStorage.getItem('vnt_role');
            if(currentNip === 'sindico') {
                alert("Síndico não usa este cadastro pessoal.");
                btn.innerHTML = 'Salvar / Atualizar Dados';
                btn.disabled = false;
                return;
            }
            
            if(!window._supabase) { alert("Aguarde, sistema off-line"); return; }
            
            try {
                const {data, error} = await window._supabase.from('moradores').select('*').eq('nip', currentNip);
                if(data && data.length > 0) {
                    let oldData = data[0].dados || {};
                    // Merge
                    let merged = { ...oldData, ...payload };
                    await window._supabase.from('moradores').update({ dados: merged }).eq('nip', currentNip);
                    alert("Seus dados foram atualizados com sucesso!");
                } else {
                    // Force create if somehow missing
                    payload.senha = 'marinha123';
                    await window._supabase.from('moradores').insert([{ nip: currentNip, dados: payload }]);
                    alert("Seus dados foram salvos com sucesso!");
                }
            } catch(ex) {
                alert("Falha na rede.");
            }
            btn.innerHTML = 'Salvar / Atualizar Dados';
            btn.disabled = false;
        });
    }
});
'''

if "validarCPF" not in js_content:
    js_content += "\n" + cpf_logic
    with codecs.open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("New Cadastro CPF logic appended to script.js!")
else:
    print("Logic already exists!")
