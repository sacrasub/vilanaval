// SUPABASE INITIALIZATION
const supabaseUrl = 'https://jzvoxaqhteqdfyurjlbk.supabase.co';
const supabaseKey = 'sb_publishable_hKgmUqtu7Wrfo1A5z0fiUg_xy4pLT9H';
window._supabase = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;


// --- Supabase Storage Wrapper ---
async function getStorageData(key) {
    if (!window._supabase) return JSON.parse(localStorage.getItem(key)) || null;
    try {
        const { data } = await window._supabase.from('moradores').select('dados').eq('nip', 'sistema');
        if (data && data.length > 0 && data[0].dados && data[0].dados[key]) {
            return data[0].dados[key];
        }
    } catch (e) { }
    return JSON.parse(localStorage.getItem(key)) || null;
}

async function setStorageData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    if (!window._supabase) return;
    try {
        const { data } = await window._supabase.from('moradores').select('dados').eq('nip', 'sistema');
        let dados = {};
        if (data && data.length > 0 && data[0].dados) {
            dados = data[0].dados;
        }
        dados[key] = value;
        const res = await window._supabase.from('moradores').select('id').eq('nip', 'sistema');
        if (res.data && res.data.length > 0) {
            await window._supabase.from('moradores').update({ dados: dados }).eq('nip', 'sistema');
        } else {
            await window._supabase.from('moradores').insert([{ nip: 'sistema', dados: dados }]);
        }
    } catch (e) { }
}
// ---------------------------------

document.addEventListener('DOMContentLoaded', async () => {
    // ENFORCE LOGIN
    const currentLoc = window.location.pathname;
    const isLoginScreen = currentLoc.includes('index') || currentLoc.endsWith('/');
    const currentRole = localStorage.getItem('vnt_role');
    if (!currentRole && !isLoginScreen && !currentLoc.includes('limpar_banco')) {
        window.location.href = 'index.html';
        return;
    }
    
    // Login com Supabase + Validação de Senha + NIP Masks
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const nip = document.getElementById('nip').value.toLowerCase();
            const senha = document.getElementById('senha').value;
            const btn = loginForm.querySelector("button[type='submit']");

            btn.innerHTML = "Verificando...";
            btn.disabled = true;

            try {
                // Checagem Dinamica do Sindico
                if (nip === 'sindico' || nip.includes('admin')) {
                    let validPwd = 'sindico';
                    try {
                        if (window._supabase) {
                            const { data, error } = await window._supabase.from('moradores').select('dados').eq('nip', 'sindico');
                            if (data && data.length > 0 && data[0].dados && data[0].dados.senha) {
                                validPwd = data[0].dados.senha.trim();
                            }
                        }
                    } catch (e) {
                        console.error("Erro consultando supabase para sindico:", e);
                    }
                    if (senha.trim() !== validPwd) {
                        alert("Senha do Síndico Incorreta!");
                        btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                        btn.disabled = false;
                        return;
                    }
                    localStorage.setItem('vnt_role', 'sindico');
                    localStorage.setItem('vnt_user', 'Síndico');
                    window.location.href = 'dashboard.html';
                    return;
                }

                // Validação Matemática do DV da Marinha antes de bater banco
                if (!validarNIP(nip)) {
                    alert("NIP Inválido (Regra Módulo 11)! Verifique o Dígito Verificador inserido.");
                    btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                    btn.disabled = false;
                    return;
                }

                // Supabase Check
                if (window._supabase) {
                    const { data, error } = await window._supabase.from('moradores').select('*').eq('nip', nip);

                    if (data && data.length > 0) {
                        const moradorData = data[0];
                        const dados = moradorData.dados || {};
                        const senhaBanco = dados.senha || 'marinha123';

                        if (senha !== senhaBanco) {
                            alert("Senha Incorreta!");
                            btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                            btn.disabled = false;
                            return;
                        }

                        if (senhaBanco === 'marinha123') {
                            // FORÇA MUDANÇA DE SENHA
                            const modal = document.getElementById('modalMudarSenha');
                            if (modal) {
                                modal.style.display = 'flex';
                                document.getElementById('btnSalvarSenha').onclick = async () => {
                                    const novaSenha = document.getElementById('novaSenha').value;
                                    if (novaSenha.length < 6) {
                                        alert("A senha deve ter no mínimo 6 caracteres para ser segura.");
                                        return;
                                    }
                                    const btnSalvar = document.getElementById('btnSalvarSenha');
                                    btnSalvar.innerHTML = "Salvando...";
                                    btnSalvar.disabled = true;

                                    dados.senha = novaSenha;
                                    await window._supabase.from('moradores').update({ dados: dados }).eq('nip', nip);

                                    localStorage.setItem('vnt_role', nip);
                                    localStorage.setItem('vnt_user', nip);
                                    window.location.href = 'dashboard.html';
                                };
                            }
                        } else {
                            // Login normal se a senha não for a de fábrica
                            localStorage.setItem('vnt_role', nip);
                            localStorage.setItem('vnt_user', nip);
                            window.location.href = 'dashboard.html';
                        }
                    } else {
                        alert("Acesso Negado! NIP não matriculado na Vila Naval. Solicite liberação na administração.");
                        btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                        btn.disabled = false;
                    }
                } else {
                    alert("Erro grave: Banco de Dados Inacessível.");
                    btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                    btn.disabled = false;
                }
            } catch (err) {
                console.error("Login Error:", err);
                alert("Ocorreu um erro ao processar seu login. Tente novamente.");
                btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                btn.disabled = false;
            }
        });
    }

    // Dashboard Initialization
    if (document.querySelector('.dashboard-bg')) {
        const role = localStorage.getItem('vnt_role') || 'permissionario';
        const user = localStorage.getItem('vnt_user') || 'Usuário';

        document.getElementById('userNameDisplay').textContent = capitalize(user);

        if (role === 'sindico') {
            document.getElementById('userRoleDisplay').textContent = 'Síndico(a)';
            // Show admin menu items
            document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'flex');
            const navChamados = document.querySelector('[data-target="chamados"]');
            if (navChamados) navChamados.style.display = 'none';

            const lblMenuCadastro = document.getElementById('lblMenuCadastro');
            if (lblMenuCadastro) lblMenuCadastro.textContent = 'Cadastro dos Moradores';

            const btnMuralHomeAcao = document.getElementById('btnMuralHomeAcao');
            if (btnMuralHomeAcao) btnMuralHomeAcao.textContent = 'Editar Avisos';

            const btnReservaHomeAcao = document.getElementById('btnReservaHomeAcao');
            if (btnReservaHomeAcao) btnReservaHomeAcao.textContent = 'Consultar Reservas';

        } else {
            document.getElementById('userRoleDisplay').textContent = 'Permissionário';
        }

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('vnt_role');
                localStorage.removeItem('vnt_user');
                window.location.href = 'index.html';
            });
        }

        // Tab Switching Logic
        const navItems = document.querySelectorAll('.nav-item');
        const tabPanes = document.querySelectorAll('.tab-pane');
        const pageTitle = document.getElementById('pageTitle');

        const titleMap = {
            'dashboard': 'Bem-vindo à Vila Naval',
            'mural': 'Mural de Avisos',
            'reservas': 'Gestão de Reservas',
            'normas': 'Normas da Vila',
            'cadastro': 'Atualização de Moradores',
            'chamados': 'Meus Chamados (Anexo J)',
            'admin-chamados': 'Gestão de Chamados',
            'admin-pnrs': 'Cadastro de PNRs',
            'admin-lista': 'Cadastros e Autenticações',
            'admin': 'Administração (Síndico)'
        };

        // Chamados Logic
        const chamadosKey = 'vnt_chamados';
        let chamados = await getStorageData(chamadosKey) || [];

        function renderChamados(adminView = false) {
            const listEl = document.getElementById(adminView ? 'adminChamadosList' : 'chamadosList');
            if (!listEl) return;

            let filteredChamados = chamados;
            if (!adminView) {
                filteredChamados = chamados.filter(c => c.solicitante.toLowerCase() === user.toLowerCase());
            }

            if (filteredChamados.length === 0) {
                listEl.innerHTML = `<div class="empty-state"><i class="ri-inbox-line"></i><p>Nenhum chamado aberto.</p></div>`;
                return;
            }

            if (adminView) {
                // Populate Kanban
                const novasCol = document.getElementById('kb-abertos');
                const andamentoCol = document.getElementById('kb-analise');
                const concluidasCol = document.getElementById('kb-concluidos');

                if (novasCol && andamentoCol && concluidasCol) {
                    novasCol.innerHTML = ''; andamentoCol.innerHTML = ''; concluidasCol.innerHTML = '';

                    filteredChamados.forEach(c => {
                        const card = `
                        <div class="kanban-card">
                            <div style="display:flex; justify-content:space-between;">
                                <span class="badge ${c.urgencia === 'A' ? 'badge-danger' : 'badge-warning'}">Tipo ${c.urgencia}</span>
                                <span class="text-muted" style="font-size: 0.8rem;">${c.data}</span>
                            </div>
                            <h4 style="margin: 10px 0 5px 0; font-size:1rem;">${c.pnr}</h4>
                            <p class="text-muted" style="font-size: 0.85rem; margin-bottom:10px;">${c.descricao}</p>
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <small><strong>Req:</strong> ${c.solicitante}</small>
                            </div>
                        </div>`;
                        if (c.status === 'novo') novasCol.innerHTML += card;
                        else if (c.status === 'andamento') andamentoCol.innerHTML += card;
                        else concluidasCol.innerHTML += card;
                    });
                }

            } else {
                listEl.innerHTML = filteredChamados.map(c => `
                    <div class="chamado-card status-${c.status}">
                        <div class="chamado-header" onclick="toggleChamado('${c.id}')">
                            <div>
                                <span class="badge ${c.urgencia === 'A' ? 'badge-danger' : 'badge-warning'}">Tipo ${c.urgencia}</span>
                                <strong>Pedido #${c.id}</strong> - ${c.pnr}
                            </div>
                            <div style="display:flex; align-items:center; gap: 10px;">
                                <span class="text-muted">${c.data}</span>
                                <i class="ri-arrow-down-s-line"></i>
                            </div>
                        </div>
                        <div class="chamado-body" id="body-${c.id}">
                            <p><strong>Descrição:</strong> ${c.descricao}</p>
                            <p><strong>Responsabilidade:</strong> <span class="badge ${c.responsabilidade === 'aguardando' ? 'badge-info' : 'badge-success'}">${c.responsabilidade.toUpperCase()}</span></p>
                            <p><strong>Status:</strong> ${c.status.toUpperCase()}</p>
                        </div>
                    </div>
                `).join('');
            }
        }

        window.toggleChamado = function (id) {
            const body = document.getElementById(`body-${id}`);
            if (body.style.display === 'block') {
                body.style.display = 'none';
            } else {
                body.style.display = 'block';
            }
        }

        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                // If element should be hidden for this role, block clicking
                if (role !== 'sindico' && item.classList.contains('admin-only')) {
                    return;
                }

                const targetId = item.getAttribute('data-target');

                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');

                tabPanes.forEach(pane => pane.classList.remove('active'));
                const tgt = document.getElementById(targetId);
                if (tgt) tgt.classList.add('active');

                pageTitle.textContent = titleMap[targetId] || 'Vila Naval';

                if (targetId === 'admin') {
                    // loadAdminStats();
                } else if (targetId === 'admin-chamados' || targetId === 'chamados') {
                    renderChamados(targetId === 'admin-chamados');
                } else if (targetId === 'admin-pnrs' || targetId === 'admin-lista') {
                    if (typeof renderMoradores === 'function') setTimeout(() => renderMoradores(), 100);
                } else if (targetId === 'reservas') {
                    if (typeof initCalendar === 'function') {
                        setTimeout(initCalendar, 50);
                    }
                }
            });
        });

        // Handling Chamado Form submission
        const formNovoChamado = document.getElementById('formNovoChamado');
        const modalNovoChamado = document.getElementById('modalNovoChamado');

        if (formNovoChamado) {
            formNovoChamado.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = formNovoChamado.querySelector('button[type="submit"]');
                const origTxt = btn.textContent;
                btn.disabled = true;
                btn.textContent = 'Enviando...';

                setTimeout(async () => {
                    const newChamado = {
                        id: Math.floor(Math.random() * 10000).toString(),
                        solicitante: user,
                        data: new Date().toLocaleDateString('pt-BR'),
                        pnr: document.getElementById('chamadoPnr').value,
                        urgencia: document.getElementById('chamadoUrgencia').value,
                        descricao: document.getElementById('chamadoDescricao').value,
                        status: 'novo',
                        responsabilidade: 'aguardando'
                    };

                    chamados.push(newChamado);
                    await setStorageData(chamadosKey, chamados);

                    btn.disabled = false;
                    btn.textContent = origTxt;
                    modalNovoChamado.style.display = 'none';
                    formNovoChamado.reset();
                    renderChamados(false);
                }, 500);
            });
        }

        // Close Modal
        document.querySelectorAll('.modal-close, .btn-outline').forEach(btn => {
            btn.addEventListener('click', () => {
                if (modalNovoChamado) modalNovoChamado.style.display = 'none';
            })
        });

        const btnAbrirChamado = document.getElementById('btnAbrirChamado');
        if (btnAbrirChamado) {
            btnAbrirChamado.addEventListener('click', () => {
                if (modalNovoChamado) modalNovoChamado.style.display = 'flex';
            });
        }
    }
});

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== Native Registry Form Logic ===== //

function startRegistrationFlow(formId) {
    let form = null;
    if (formId) {
        form = document.getElementById(formId);
        if (!form) return;
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        let idFromUrl = urlParams.get('formId') || 'cadastroForm';
        form = document.getElementById(idFromUrl);
        if (!form) return;
    }

    const nextButtons = form.querySelectorAll('.next-btn');
    const prevButtons = form.querySelectorAll('.prev-btn');
    const steps = form.querySelectorAll('section.form-group');

    let currentStep = 0;

    function updateSteps() {
        steps.forEach((step, index) => {
            if (index === currentStep) {
                step.style.display = 'block';
            } else {
                step.style.display = 'none';
            }
        });
    }

    function validateStep() {
        const currentSection = steps[currentStep];
        const inputs = currentSection.querySelectorAll('input[required], select[required]');
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = 'var(--border-color)';
            }
            if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    isValid = false;
                    input.style.borderColor = 'red';
                }
            }
        });
        return isValid;
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (validateStep()) {
                currentStep++;
                updateSteps();
                window.scrollTo(0, 0);
            } else {
                alert('Por favor, preencha todos os campos obrigatórios corretamente antes de avançar.');
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep--;
            updateSteps();
            window.scrollTo(0, 0);
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Termos Validation
        const checkboxTermos = document.querySelectorAll('input[name="termos"]:checked');
        if (checkboxTermos.length < 6) {
            e.preventDefault();
            alert('Você deve aceitar todos os termos do Regulamento da Vila Naval para concluir o cadastro.');
            return false;
        }

        if (validateStep()) {
            submitFormData(form);
        } else {
            alert('Por favor, verifique se todos os campos estão preenchidos.');
        }
    });

    const cepInput = form.querySelector('#cepEmergencia');
    if (cepInput) {
        cepInput.addEventListener('blur', function () {
            let cep = this.value.replace(/\D/g, '');
            if (cep.length === 8) {
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(res => res.json())
                    .then(data => {
                        if (!data.erro) {
                            form.querySelector('#enderecoEmergencia').value = data.logradouro;
                            form.querySelector('#bairroEmergencia').value = data.bairro;
                            form.querySelector('#cidadeEmergencia').value = data.localidade;
                            form.querySelector('#estadoEmergencia').value = data.uf;
                        }
                    });
            }
        });
    }

    const animalRadios = form.querySelectorAll('input[name="possuiAnimal"]');
    const detalhesAnimalContainer = form.querySelector('#detalhesAnimal');
    if (animalRadios.length > 0 && detalhesAnimalContainer) {
        animalRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.value === 'Sim') {
                    detalhesAnimalContainer.style.display = 'block';
                    detalhesAnimalContainer.querySelectorAll('input').forEach(i => i.required = true);
                } else {
                    detalhesAnimalContainer.style.display = 'none';
                    detalhesAnimalContainer.querySelectorAll('input').forEach(i => i.required = false);
                }
            });
        });
    }

    updateSteps();
}

function collectFormData(form) {
    const formData = new FormData(form);
    const dataObj = {
        timestamp: new Date().toISOString(),
        responsavel: localStorage.getItem('vnt_user') || 'User',
        dadosPessoais: {
            posto: formData.get('posto'),
            nomeCompleto: formData.get('nomeCompleto'),
            nip: formData.get('nip'),
            identidade: formData.get('identidade'),
            cpf: formData.get('cpf'),
            dataNascimento: formData.get('dataNascimento'),
            celular: formData.get('celular'),
            email: formData.get('email'),
            endereco: formData.get('enderecoPnr')
        },
        dependentes: {
            nomeDependente1: formData.get('nomeDependente1') || 'Não informado',
            grauDependente1: formData.get('grauDependente1') || '',
            idadeDependente1: formData.get('idadeDependente1') || ''
        },
        veiculos: {
            possuiVeiculo: formData.get('possuiVeiculo') || 'Não',
            placaVeiculo1: formData.get('placaVeiculo1') || '',
            modeloVeiculo1: formData.get('modeloVeiculo1') || ''
        },
        animais: {
            possuiAnimal: formData.get('possuiAnimal'),
            especie: formData.get('especieAnimal') || '',
            raca: formData.get('racaAnimal') || '',
            vacinado: formData.get('animalVacinado') || 'Não'
        },
        contatoEmergencia: {
            nome: formData.get('contatoEmergenciaNome'),
            parentesco: formData.get('contatoEmergenciaParentesco'),
            telefone: formData.get('contatoEmergenciaTelefone')
        }
    };
    return dataObj;
}

async function submitFormData(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Salvando...';

    const formData = collectFormData(form);

    // Save to vnt_moradores
    let moradores = await getStorageData('vnt_moradores') || [];
    moradores.push(formData);
    await setStorageData('vnt_moradores', moradores);

    // Also sync to Sindico table if we implement the render function
    if (typeof renderMoradores === 'function') {
        setTimeout(() => renderMoradores(), 100);
    }

    setTimeout(() => {
        displaySummary(formData);
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }, 800);
}

function displaySummary(data) {
    const formSection = document.getElementById('cadastro');
    if (formSection) {
        formSection.innerHTML = `
            <div class="summary-section">
                <h2><i class="ri-check-double-line" style="color:var(--success-color)"></i> Cadastro Registrado com Sucesso!</h2>
                <p>Obrigado por atualizar os dados da sua PNR em nossa Vila Naval, ${data.dadosPessoais.posto} ${data.dadosPessoais.nomeCompleto}.</p>
                <div class="summary-card">
                    <h4>Resumo do Cadastro:</h4>
                    <ul>
                        <li><strong>NIP:</strong> ${data.dadosPessoais.nip}</li>
                        <li><strong>Casa:</strong> ${data.dadosPessoais.endereco}</li>
                        <li><strong>Dependentes declarados:</strong> ${data.dependentes.nomeDependente1 !== 'Não informado' ? 'Sim' : 'Não'}</li>
                        <li><strong>Animais na Residência:</strong> ${data.animais.possuiAnimal} - ${data.animais.especie}</li>
                    </ul>
                </div>
                <div style="margin-top: 30px; text-align: center;">
                    <p class="text-muted">A administração foi notificada de sua resposta.</p>
                </div>
            </div>
        `;
    }
}

// Start forms if present
setTimeout(() => {
    startRegistrationFlow('cadastroForm');
}, 500);

async function renderMoradores() {
    const isSindico = localStorage.getItem('vnt_role') === 'sindico';
    if (!isSindico) return;

    const pnrGrid = document.getElementById('pnrGridContainer');
    if (!pnrGrid) return;

    let moradores = [];
    if (_supabase) {
        let { data } = await _supabase.from('moradores').select('dados');
        if (data) moradores = data.map(d => d.dados);
    } else {
        moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
    }

    // Create a dict index mapped by "endereco"
    let mapMoradores = {};
    // Last overrides previous (simulates update)
    moradores.forEach(m => {
        mapMoradores[m.dadosPessoais.endereco] = m;
    });

    let ocupadoCount = 0;
    let vagoCount = 0;

    let html = '';

    const todasPnr = [
        "Ed. SG Lisboa - Apto 101", "Ed. SG Lisboa - Apto 102", "Ed. SG Lisboa - Apto 103",
        "Ed. SG Lisboa - Apto 104", "Ed. SG Lisboa - Apto 105", "Ed. SG Lisboa - Apto 106",
        "Ed. SG Lisboa - Apto 201", "Ed. SG Lisboa - Apto 202", "Ed. SG Lisboa - Apto 203",
        "Ed. SG Lisboa - Apto 204", "Ed. SG Lisboa - Apto 205", "Ed. SG Lisboa - Apto 206",
        "Ed. SG Lisboa - Apto 301", "Ed. SG Lisboa - Apto 302", "Ed. SG Lisboa - Apto 303",
        "Ed. SG Lisboa - Apto 304", "Ed. SG Lisboa - Apto 305", "Ed. SG Lisboa - Apto 306",
        "Casa 01", "Casa 02", "Casa 03", "Casa 04", "Casa 05", "Casa 06", "Casa 07", "Casa 08", "Casa 09", "Casa 10",
        "Casa 11", "Casa 12", "Casa 13", "Casa 14", "Casa 15", "Casa 16", "Casa 17", "Casa 18", "Casa 19"
    ];

    todasPnr.forEach(pnr => {
        if (mapMoradores[pnr]) {
            ocupadoCount++;
            let data = mapMoradores[pnr];
            let dependentes = data.dependentes.nomeDependente1 !== 'Não informado' ? 'Cadastrado' : 'S/ Dep';
            let pets = data.animais.possuiAnimal === 'Sim' ? data.animais.especie : 'S/ Pet';

            html += `
            <div class="pnr-card ocupado" style="position:relative;">
                <div class="pnr-title"><i class="ri-home-4-fill"></i> ${pnr}</div>
                <p class="pnr-details">Perm: ${data.dadosPessoais.posto} ${data.dadosPessoais.nomeCompleto.split(' ')[0]}</p>
                <p class="pnr-details"><i class="ri-group-line"></i> ${dependentes} | <i class="ri-github-fill"></i> ${pets}</p>
                <div style="display:flex; gap: 5px; margin-top: 5px;">
                    <button class="btn btn-sm btn-outline mt-2" onclick="abrirModalHistorico('${pnr}')" style="width:100%; border: 1px solid #805ad5; color: #805ad5; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px;"><i class="ri-history-line"></i> Histórico</button>
                    <button class="btn btn-sm btn-outline mt-2" onclick="abrirModalEditarMorador('${data.dadosPessoais.nip}')" style="width:100%; border: 1px solid #1a73e8; color: #1a73e8; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px;"><i class="ri-pencil-line"></i> Editar</button>
                </div>
            </div>
            `;
        } else {
            vagoCount++;
            html += `
            <div class="pnr-card vago">
                <div class="pnr-title"><i class="ri-home-x-line"></i> ${pnr}</div>
                <p class="pnr-details text-danger"><strong>VAGO</strong></p>
                <p class="pnr-details">Aguardando novo morador</p>
                <button class="btn btn-sm btn-outline mt-2" onclick="abrirModalHistorico('${pnr}')" style="width:100%; border: 1px solid #805ad5; color: #805ad5; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px;"><i class="ri-history-line"></i> Histórico</button>
            </div>
            `;
        }
    });

    pnrGrid.innerHTML = html;

    let btnOcupado = document.getElementById('badgeOcupado');
    let btnVago = document.getElementById('badgeOcupado');
    if (btnOcupado) btnOcupado.innerText = 'Ocupado: ' + ocupadoCount;
    if (btnVago) btnVago.innerText = 'Vago (Taxa União): ' + vagoCount;
    
    // Tabela Administrativa em Lista Detalhada
    const tbLista = document.getElementById('listaMoradoresAdmin');
    if (tbLista) {
        let sortedMoradores = [...moradores].sort((a,b) => {
             let statusA = a.statusVerificacao || 'Pendente';
             let statusB = b.statusVerificacao || 'Pendente';
             if (statusA === statusB) return 0;
             return statusA === 'Pendente' ? -1 : 1;
        });
        
        let tbHtml = sortedMoradores.map(m => {
            if (!m || !m.dadosPessoais || !m.dadosPessoais.nip) return '';
            const nipStr = m.dadosPessoais.nip;
            if (nipStr === 'sindico' || nipStr === 'sistema') return '';
            
            const status = m.statusVerificacao || 'Pendente';
            const statusBadge = status === 'Verificado' 
                ? '<span class="badge" style="background:#c6f6d5; color:#22543d; border: 1px solid #9ae6b4;"><i class="ri-verified-badge-fill"></i> Verificado</span>'
                : '<span class="badge" style="background:#fefcbf; color:#975a16; border: 1px solid #faf089;"><i class="ri-error-warning-fill"></i> Pendente</span>';
                
            let strAction = '';
            if (status !== 'Verificado') {
                 strAction += `<button class="btn btn-sm btn-outline" title="Autenticar Cadastro" onclick="autenticarMorador('${nipStr}')"><i class="ri-check-double-line" style="color:#38a169;"></i></button> `;
            }
            strAction += `<button class="btn btn-sm btn-outline" title="Editar" onclick="abrirModalEditarMorador('${nipStr}')"><i class="ri-pencil-line" style="color:#3182ce;"></i></button> `;
            strAction += `<button class="btn btn-sm btn-outline" title="Apagar" onclick="apagarMorador('${nipStr}')"><i class="ri-delete-bin-line" style="color:#e53e3e;"></i></button>`;

            return `
            <tr style="border-bottom: 1px solid rgba(0,0,0,0.05); transition: background 0.2s;">
                <td style="padding: 12px; font-family: monospace; font-size: 1.1em; color: var(--primary);">${nipStr}</td>
                <td style="padding: 12px;"><strong>${m.dadosPessoais.posto}</strong> ${m.dadosPessoais.nomeCompleto}</td>
                <td style="padding: 12px;">${m.dadosPessoais.endereco || m.dadosPessoais.enderecoPnr}</td>
                <td style="padding: 12px;">${statusBadge}</td>
                <td style="padding: 12px; text-align: right; white-space: nowrap;">${strAction}</td>
            </tr>
            `;
        }).join('');
        
        if (!tbHtml) tbHtml = '<tr><td colspan="5" style="text-align:center; padding: 20px; color:#a0aec0;">Nenhum morador cadastrado.</td></tr>';
        
        tbLista.innerHTML = tbHtml;
    }
}

setTimeout(renderMoradores, 500);

// ===== RESERVAS CALENDAR FULLCALENDAR LOGIC ===== //
let calendar;

async function initCalendar() {
    const calendarEl = document.getElementById('reservasCalendar');
    if (!calendarEl) return;

    if (calendar) {
        calendar.destroy();
    }

    let reservasData = await getStorageData('vnt_reservas');
    if (typeof reservasData === 'object') reservasData = JSON.stringify(reservasData);
    if (!reservasData) {
        reservasData = "[]";
    }

    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'pt-br',
        height: 480,
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'today'
        },
        selectable: true,
        buttonText: {
            today: 'Hoje'
        },
        validRange: function (nowDate) {
            var clone = new Date(nowDate.valueOf());
            var endOfMonth = new Date(clone.getFullYear(), clone.getMonth() + 1, 1);
            return {
                start: nowDate, // today
                end: endOfMonth // start of next month
            };
        },
        events: async function (info, successCallback, failureCallback) {
            let reservas = await getStorageData('vnt_reservas') || [];
            let events = reservas.map(r => ({
                id: r.id,
                title: r.espacoNome + ' (' + r.horaInicio + '-' + r.horaFim + ')',
                start: r.data + 'T' + r.horaInicio,
                end: r.data + 'T' + r.horaFim,
                color: r.status === 'aprovado' ? '#38a169' : '#dd6b20',
                allDay: false
            }));
            successCallback(events);
        },
        dateClick: function (info) {
            document.getElementById('reservaData').value = info.dateStr;
        }
    });

    calendar.render();
}

const formReserva = document.getElementById('formReserva');
if (formReserva) {
    formReserva.addEventListener('submit', async function (e) {
        e.preventDefault();

        const data = document.getElementById('reservaData').value;
        if (!data) {
            alert('Por favor, clique no calendário à esquerda para selecionar o dia da reserva.');
            return;
        }

        const espacoSelect = document.getElementById('reservaEspaco');
        const espaco = espacoSelect.options[espacoSelect.selectedIndex].text;
        const horaInicio = document.getElementById('reservaHoraInicio').value;
        const horaFim = document.getElementById('reservaHoraFim').value;
        const motivo = document.getElementById('reservaMotivo').value;

        if (horaFim > "23:00") {
            alert('ERRO: De acordo com as Normas da Vila Naval (Item 1), o limite de encerramento para atividades festivas é impreterivelmente 23:00h.');
            return;
        }

        if (horaInicio >= horaFim) {
            alert('A hora de início deve ser anterior à hora de término.');
            return;
        }

        let reservas = await getStorageData('vnt_reservas') || [];

        // Block conflict Logic: same place + overlapping hours
        // Since we are doing daily events for simple demo, you could block same day and place entirely,
        // or check hours.
        const hasConflict = reservas.some(r => r.data === data && r.espaco === espacoSelect.value && (
            (horaInicio >= r.horaInicio && horaInicio < r.horaFim) ||
            (horaFim > r.horaInicio && horaFim <= r.horaFim) ||
            (horaInicio <= r.horaInicio && horaFim >= r.horaFim)
        ));

        if (hasConflict) {
            alert(`Já existe uma reserva pendente/aprovada para o ${espaco} neste horário! Escolha outro dia ou horário.`);
            return;
        }

        const novaReserva = {
            id: Date.now().toString(),
            data: data,
            espaco: espacoSelect.value,
            espacoNome: espaco,
            horaInicio: horaInicio,
            horaFim: horaFim,
            motivo: motivo,
            solicitante: localStorage.getItem('vnt_user') || 'Usuário',
            status: 'pendente'
        };

        reservas.push(novaReserva);
        await setStorageData('vnt_reservas', reservas);

        alert('Solicitação de reserva registrada com sucesso! Ficará Pendente de Aprovação do Síndico na cor Amarela.');
        formReserva.reset();
        document.getElementById('reservaData').value = '';
        if (calendar) {
            calendar.refetchEvents();
        }
    });
}


window.printSection = function (sectionId) {
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('print-active'));
    document.getElementById(sectionId).classList.add('print-active');
    window.print();
    setTimeout(() => {
        document.getElementById(sectionId).classList.remove('print-active');
    }, 1000);
}

// ====== HISTÓRICO DE PNR E OCORRÊNCIAS ====== //
window.showHistTab = function(tab) {
    document.getElementById('tabOcupacao').style.display = tab === 'ocupacao' ? 'block' : 'none';
    document.getElementById('tabOcorrencias').style.display = tab === 'ocorrencias' ? 'block' : 'none';
    
    document.getElementById('btnTabOcupacao').className = tab === 'ocupacao' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline';
    document.getElementById('btnTabOcorrencias').className = tab === 'ocorrencias' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline';
};

window.carregarHistoricoPnr = async function(pnr) {
    const listOcupacao = document.getElementById('listHistOcupacao');
    const listOcorrencias = document.getElementById('listHistOcorrencias');
    
    listOcupacao.innerHTML = '<p>Carregando histórico de ocupação...</p>';
    listOcorrencias.innerHTML = '<p>Carregando ocorrências...</p>';
    
    let histOcupacao = [];
    let histOcorrencias = [];
    
    if (window._supabase) {
        // Tenta buscar do Supabase
        const { data: dataOcup } = await window._supabase.from('pnr_history').select('*').eq('pnr', pnr).order('data_entrada', { ascending: false });
        if (dataOcup) histOcupacao = dataOcup;
        
        const { data: dataOcorr } = await window._supabase.from('interaction_history').select('*').eq('pnr', pnr).order('data_ocorrencia', { ascending: false });
        if (dataOcorr) histOcorrencias = dataOcorr;
    } else {
        // Fallback localStorage
        histOcupacao = (JSON.parse(localStorage.getItem('vnt_pnr_history')) || []).filter(h => h.pnr === pnr).sort((a,b) => new Date(b.data_entrada) - new Date(a.data_entrada));
        histOcorrencias = (JSON.parse(localStorage.getItem('vnt_interaction_history')) || []).filter(h => h.pnr === pnr).sort((a,b) => new Date(b.data_ocorrencia) - new Date(a.data_ocorrencia));
    }
    
    // Render Ocupação
    if (histOcupacao.length === 0) {
        listOcupacao.innerHTML = '<p class="text-muted">Nenhum registro de ocupação anterior encontrado.</p>';
    } else {
        listOcupacao.innerHTML = histOcupacao.map(h => `
            <div style="border-left: 3px solid var(--primary-color); padding-left: 10px; margin-bottom: 15px;">
                <p style="margin:0; font-weight:600;">${h.nome} (NIP: ${h.nip})</p>
                <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">
                    Entrada: ${h.data_entrada ? new Date(h.data_entrada).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) : '-'}
                    | Saída: ${h.data_saida ? new Date(h.data_saida).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) : 'Atual'}
                </p>
            </div>
        `).join('');
    }
    
    // Render Ocorrencias
    if (histOcorrencias.length === 0) {
        listOcorrencias.innerHTML = '<p class="text-muted">Nenhuma ocorrência registrada.</p>';
    } else {
        listOcorrencias.innerHTML = histOcorrencias.map(h => `
            <div style="background: #fff; padding: 10px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 10px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                    <strong style="color:var(--primary-dark);">${h.motivo}</strong>
                    <span style="font-size:0.8rem; color:var(--text-muted);">${h.data_ocorrencia ? new Date(h.data_ocorrencia).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) : '-'}</span>
                </div>
                <p style="margin:0 0 5px 0; font-size:0.9rem;"><strong>Providência:</strong> ${h.providencia}</p>
                ${h.observacao ? `<p style="margin:0; font-size:0.85rem; font-style:italic; color:#666;">"${h.observacao}"</p>` : ''}
            </div>
        `).join('');
    }
};

window.abrirModalHistorico = async function(pnr) {
    document.getElementById('histPnrTitle').textContent = pnr;
    document.getElementById('histOcorrenciaPnr').value = pnr;
    
    // Pre-determine current NIP for the PNR based on local data
    let currentNip = '';
    let moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
    if (window._supabase) {
        let { data } = await window._supabase.from('moradores').select('dados');
        if (data && data.length > 0) moradores = data.map(d => d.dados);
    }
    const moradorAtual = moradores.find(m => m.dadosPessoais && (m.dadosPessoais.endereco === pnr || m.dadosPessoais.enderecoPnr === pnr));
    if (moradorAtual) {
        currentNip = moradorAtual.dadosPessoais.nip;
    }
    document.getElementById('histOcorrenciaNip').value = currentNip;
    
    // Reset form
    document.getElementById('formNovaOcorrencia').reset();
    document.getElementById('novaOcData').valueAsDate = new Date();
    
    showHistTab('ocupacao');
    document.getElementById('modalHistorico').style.display = 'flex';
    
    // Carregar os dados
    await carregarHistoricoPnr(pnr);
};

window.salvarOcorrencia = async function(e) {
    e.preventDefault();
    const btn = document.getElementById('btnSalvarOcorrencia');
    btn.innerHTML = 'Salvando...';
    btn.disabled = true;
    
    try {
        const pnr = document.getElementById('histOcorrenciaPnr').value;
        const nip = document.getElementById('histOcorrenciaNip').value;
        
        const novaOcorrencia = {
            id: window._supabase ? undefined : Date.now().toString(),
            pnr: pnr,
            nip: nip,
            data_ocorrencia: document.getElementById('novaOcData').value,
            motivo: document.getElementById('novaOcMotivo').value,
            providencia: document.getElementById('novaOcProvidencia').value,
            observacao: document.getElementById('novaOcObs').value
        };
        
        if (window._supabase) {
            await window._supabase.from('interaction_history').insert([novaOcorrencia]);
        }
        
        // Simultanemente salva no localStorage
        let histLocal = JSON.parse(localStorage.getItem('vnt_interaction_history')) || [];
        if (!novaOcorrencia.id) novaOcorrencia.id = Date.now().toString();
        histLocal.push(novaOcorrencia);
        localStorage.setItem('vnt_interaction_history', JSON.stringify(histLocal));
        
        document.getElementById('formNovaOcorrencia').reset();
        await carregarHistoricoPnr(pnr);
        
        alert('Ocorrência salva com sucesso!');
    } catch (err) {
        console.error(err);
        alert('Erro ao salvar ocorrência.');
    } finally {
        btn.innerHTML = 'Salvar Registro';
        btn.disabled = false;
    }
};

window.registrarHistoricoOcupacao = async function(pnr, nip, nome, tipo) {
    // tipo: 'entrada' ou 'saida'
    try {
        const dataAtual = new Date().toISOString().split('T')[0];
        
        if (tipo === 'entrada') {
            const novoRegistro = {
                id: window._supabase ? undefined : Date.now().toString(),
                pnr: pnr,
                nip: nip,
                nome: nome,
                data_entrada: dataAtual,
                data_saida: null
            };
            
            if (window._supabase) {
                await window._supabase.from('pnr_history').insert([novoRegistro]);
            }
            
            let histLocal = JSON.parse(localStorage.getItem('vnt_pnr_history')) || [];
            if (!novoRegistro.id) novoRegistro.id = Date.now().toString();
            histLocal.push(novoRegistro);
            localStorage.setItem('vnt_pnr_history', JSON.stringify(histLocal));
            
        } else if (tipo === 'saida') {
            if (window._supabase) {
                // Atualiza o registro ativo (data_saida is null) para este pnr e nip
                const { data } = await window._supabase.from('pnr_history')
                    .select('*')
                    .eq('pnr', pnr)
                    .eq('nip', nip)
                    .is('data_saida', null)
                    .order('data_entrada', { ascending: false })
                    .limit(1);
                    
                if (data && data.length > 0) {
                    await window._supabase.from('pnr_history')
                        .update({ data_saida: dataAtual })
                        .eq('id', data[0].id);
                }
            }
            
            let histLocal = JSON.parse(localStorage.getItem('vnt_pnr_history')) || [];
            // Acha o último ativo
            for (let i = histLocal.length - 1; i >= 0; i--) {
                if (histLocal[i].pnr === pnr && histLocal[i].nip === nip && !histLocal[i].data_saida) {
                    histLocal[i].data_saida = dataAtual;
                    break;
                }
            }
            localStorage.setItem('vnt_pnr_history', JSON.stringify(histLocal));
        }
    } catch (err) {
        console.error('Erro ao registrar histórico de ocupação:', err);
    }
};

// ====== EDIÇÃO DE MORADORES PELO SÍNDICO ====== //
window.abrirModalEditarMorador = async function(nip) {
    if (!nip) {
        alert("Erro: NIP não informado para edição.");
        return;
    }
    
    // Buscar dados do localStorage (fallback) ou do Supabase
    let moradores = [];
    if (window._supabase) {
        let { data } = await window._supabase.from('moradores').select('dados').eq('nip', nip);
        if (data && data.length > 0) {
            moradores = data.map(d => d.dados);
        } else {
            // Tentativa de fallback no localStorage se estiver offline
            moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
            moradores = moradores.filter(m => m.dadosPessoais && m.dadosPessoais.nip === nip);
        }
    } else {
        moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
        moradores = moradores.filter(m => m.dadosPessoais && m.dadosPessoais.nip === nip);
    }

    if (moradores.length === 0) {
        alert("Morador não encontrado!");
        return;
    }

    // Considerando o primeiro resultado se houver múltiplos
    const dados = moradores[0];
    
    // Armazenar o objeto original em um data-attribute para uso no submit
    document.getElementById('formEditarMoradorSindico').dataset.dadosOriginais = JSON.stringify(dados);

    // Preencher o formulário do Modal
    document.getElementById('editMoradorNip').value = dados.dadosPessoais.nip;
    document.getElementById('editMoradorPosto').value = dados.dadosPessoais.posto;
    document.getElementById('editMoradorNome').value = dados.dadosPessoais.nomeCompleto;
    document.getElementById('editMoradorEndereco').value = dados.dadosPessoais.endereco || dados.dadosPessoais.enderecoPnr;
    
    const possuiDep = dados.dependentes && dados.dependentes.nomeDependente1 !== 'Não informado' ? 'Sim' : 'Não';
    document.getElementById('editMoradorDependentes').value = possuiDep;

    let possuiAnimal = "Nenhum";
    if (dados.animais && dados.animais.possuiAnimal === 'Sim') {
        possuiAnimal = dados.animais.especie;
        if (!['Cão', 'Gato'].includes(possuiAnimal)) possuiAnimal = 'Outro';
    }
    document.getElementById('editMoradorAnimais').value = possuiAnimal;

    // Mostrar modal
    document.getElementById('modalEditarMorador').style.display = 'flex';
};

window.salvarEdicaoMorador = async function(e) {
    e.preventDefault();
    
    const btn = document.getElementById('btnSalvarEdicaoMorador');
    const txtOriginal = btn.innerHTML;
    btn.innerHTML = '⏳ Salvando...';
    btn.disabled = true;

    try {
        const nip = document.getElementById('editMoradorNip').value;
        const formStr = document.getElementById('formEditarMoradorSindico').dataset.dadosOriginais;
        if (!nip || !formStr) throw new Error("Dados de formulário incompletos");
        
        let dadosEdit = JSON.parse(formStr);

        // Atualiza campos modificados
        dadosEdit.dadosPessoais.posto = document.getElementById('editMoradorPosto').value;
        dadosEdit.dadosPessoais.nomeCompleto = document.getElementById('editMoradorNome').value;
        const endereco = document.getElementById('editMoradorEndereco').value;
        dadosEdit.dadosPessoais.endereco = endereco;
        dadosEdit.dadosPessoais.enderecoPnr = endereco; // garantir ambas chaves
        
        // Simplesmente reflete os selects básicos
        const selDep = document.getElementById('editMoradorDependentes').value;
        if (!dadosEdit.dependentes) dadosEdit.dependentes = {};
        if (selDep === 'Não') {
            dadosEdit.dependentes.nomeDependente1 = 'Não informado';
        } else if (selDep === 'Sim' && dadosEdit.dependentes.nomeDependente1 === 'Não informado') {
            dadosEdit.dependentes.nomeDependente1 = 'Dependente Cadastrado';
        }

        const selAni = document.getElementById('editMoradorAnimais').value;
        if (!dadosEdit.animais) dadosEdit.animais = {};
        if (selAni === 'Nenhum') {
            dadosEdit.animais.possuiAnimal = 'Não';
            dadosEdit.animais.especie = '';
        } else {
            dadosEdit.animais.possuiAnimal = 'Sim';
            dadosEdit.animais.especie = selAni;
        }

        // Registrar no histórico de ocupação se houver mudança de endereço
        const enderecoAntigo = JSON.parse(formStr).dadosPessoais.endereco || JSON.parse(formStr).dadosPessoais.enderecoPnr;
        if (endereco && endereco !== enderecoAntigo) {
            if (enderecoAntigo) {
                await registrarHistoricoOcupacao(enderecoAntigo, nip, dadosEdit.dadosPessoais.nomeCompleto, 'saida');
            }
            await registrarHistoricoOcupacao(endereco, nip, dadosEdit.dadosPessoais.nomeCompleto, 'entrada');
        }

        // Salvar via Supabase
        if (window._supabase) {
            const { error } = await window._supabase.from('moradores').update({ dados: dadosEdit }).eq('nip', nip);
            if (error) {
                console.error("Erro ao atualizar supabase:", error);
                throw error;
            }
        } 
        
        // Salvar fallback em localStorage
        let lblMoradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
        const index = lblMoradores.findIndex(m => m.dadosPessoais && m.dadosPessoais.nip === nip);
        if (index > -1) {
            lblMoradores[index] = dadosEdit;
        } else {
            lblMoradores.push(dadosEdit);
        }
        localStorage.setItem('vnt_moradores', JSON.stringify(lblMoradores));

        document.getElementById('modalEditarMorador').style.display = 'none';
        
        // Mensagem Toast ou Alert natural
        setTimeout(() => alert('Dados atualizados com sucesso!'), 100);
        
        if (typeof renderMoradores === 'function') {
            await renderMoradores();
        }
    } catch (err) {
        alert("Ocorreu um erro ao salvar as alterações. Verifique o console.");
        console.error(err);
    } finally {
        btn.innerHTML = txtOriginal;
        btn.disabled = false;
    }
};

window.autenticarMorador = async function(nip) {
    if (!confirm(`Tem certeza que deseja marcar o cadastro do NIP ${nip} como Verificado/Autêntico? \nIsso atesta que os dados foram conferidos pelo síndico.`)) return;
    
    try {
        if (!window._supabase) {
            alert("Erro: Conexão com Supabase não disponível.");
            return;
        }
        let { data } = await window._supabase.from('moradores').select('dados').eq('nip', nip);
        if (data && data.length > 0) {
            let dados = data[0].dados;
            dados.statusVerificacao = 'Verificado';
            await window._supabase.from('moradores').update({ dados: dados }).eq('nip', nip);
            setTimeout(() => alert("Cadastro verificado e autenticado com sucesso!"), 100);
            if (typeof renderMoradores === 'function') renderMoradores();
        }
    } catch (e) {
        alert("Erro ao validar cadastro: " + e.message);
    }
};

window.apagarMorador = async function(nip) {
    let confirmNum = Math.floor(1000 + Math.random() * 9000);
    let pass = prompt(`CUIDADO: EXCLUSÃO DE DADOS PESSOAIS E PERMISSÕES.\n\nVocê está prestes a apagar o NIP: ${nip}\n\nPara confirmar a exclusão, digite o número: ${confirmNum}`);
    
    if (pass !== confirmNum.toString()) {
        alert("Ação cancelada: Número de confirmação incorreto.");
        return;
    }

    try {
        if (!window._supabase) {
            alert("Erro: Conexão com Supabase não disponível.");
            return;
        }
        
        let { data } = await window._supabase.from('moradores').select('dados').eq('nip', nip);
        if (data && data.length > 0) {
            let pnr = data[0].dados.dadosPessoais.endereco || data[0].dados.dadosPessoais.enderecoPnr;
            if (pnr) await registrarHistoricoOcupacao(pnr, nip, data[0].dados.dadosPessoais.nomeCompleto, 'saida');
        }

        await window._supabase.from('moradores').delete().eq('nip', nip);
        setTimeout(() => alert("Morador e todas as suas permissões foram excluídos com sucesso do banco de dados."), 100);
        if (typeof renderMoradores === 'function') renderMoradores();
    } catch (e) {
        alert("Erro ao excluir: " + e.message);
    }
};

window.shareNotice = function (title, text) {
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


window.uploadFotoPNR = function (nip, input) {
    if (input.files && input.files[0]) {
        if (input.files[0].size > 3000000) {
            alert('A imagem é muito grande. Escolha uma foto menor que 3MB.');
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem('foto_' + nip, e.target.result);
            setTimeout(() => renderMoradores(), 100);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Global Input Mask for NIP (00.0000.00)
document.addEventListener('input', function (e) {
    if (e.target && (e.target.id === 'nip' || e.target.id === 'novoMoradorNip')) {
        let rawVal = e.target.value;
        if (rawVal.toLowerCase().startsWith('s') || rawVal.toLowerCase().startsWith('a')) { return; }
        let val = rawVal.replace(/\D/g, '');
        if (val.length > 8) val = val.slice(0, 8);
        if (val.length > 2) {
            val = val.replace(/^(\d{2})(\d)/, '$1.$2');
            if (val.length > 7) {
                val = val.replace(/^(\d{2})\.(\d{4})(\d)/, '$1.$2.$3');
            }
        }
        e.target.value = val;
    }
});

function validarNIP(nip) {
    if (!nip) return false;
    const n = nip.replace(/\D/g, '');
    if (n.length !== 8) return false;
    let soma = 0;
    for (let i = 0; i < 7; i++) {
        soma += parseInt(n.charAt(i)) * (8 - i);
    }
    const r = soma % 11;
    let dv = 11 - r;
    if (dv === 10 || dv === 11) dv = 0;
    return dv === parseInt(n.charAt(7));
}

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf === '') return false;
    if (cpf.length !== 11) return false;
    if (/^(\d){10}$/.test(cpf)) return false;

    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

// Sindico Add Novo Morador
window.salvarMoradorSindico = async function (e) {
    e.preventDefault();
    const btn = document.getElementById('btnSalvarSindico');
    const nip = document.getElementById('novoMoradorNip').value.toLowerCase();
    const nome = document.getElementById('novoMoradorNome').value;
    const endereco = document.getElementById('novoMoradorEndereco').value;

    if (!validarNIP(nip)) {
        alert("NIP Inválido!"); return;
    }

    if (!window._supabase) { alert("BD Offline"); return; }

    btn.innerHTML = 'Salvando...';
    try {
        let mockData = {
            nomeCompleto: nome,
            nip: nip,
            endereco: endereco,
            senha: 'marinha123',
            posto: 'N/A'
        };
        const { data, error } = await window._supabase.from('moradores').select('id').eq('nip', nip);
        if (data && data.length > 0) {
            alert("Este NIP já existe!");
        } else {
            // insert
            await window._supabase.from('moradores').insert([{ nip: nip, dados: mockData }]);
            await registrarHistoricoOcupacao(endereco, nip, nome, 'entrada');
            alert("Morador cadastrado com sucesso! Acesso liberado.");
            document.getElementById('formNovoMoradorSindico').reset();
            document.getElementById('modalNovoMorador').style.display = 'none';
            if (typeof renderMoradores === 'function') renderMoradores();
        }
    } catch (err) {
        alert("Erro no servidor.");
    }
    btn.innerHTML = 'Salvar';
}

// Handle Formulario Meu Cadastro Complete
document.addEventListener('DOMContentLoaded', () => {
    const cadForm = document.getElementById('cadastroForm');
    if (cadForm) {
        cadForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const rawCpf = document.getElementById('cpf').value;
            if (rawCpf && rawCpf.trim() !== '') {
                if (!validarCPF(rawCpf)) {
                    alert("CPF Inválido. Corrija-o ou deixe em branco.");
                    return;
                }
            }

            const btn = document.getElementById('btnSalvarCadastro');
            btn.innerHTML = 'Gravando...';
            btn.disabled = true;

            const formData = new FormData(cadForm);
            let payload = {};
            for (let [key, val] of formData.entries()) {
                payload[key] = val;
            }

            // Get Current NIP
            const currentNip = localStorage.getItem('vnt_role');
            if (currentNip === 'sindico') {
                alert("Síndico não usa este cadastro pessoal.");
                btn.innerHTML = 'Salvar / Atualizar Dados';
                btn.disabled = false;
                return;
            }

            if (!window._supabase) { alert("Aguarde, sistema off-line"); return; }

            try {
                const { data, error } = await window._supabase.from('moradores').select('*').eq('nip', currentNip);
                if (data && data.length > 0) {
                    let oldData = data[0].dados || {};
                    // Merge
                    let merged = { ...oldData, ...payload };
                    await window._supabase.from('moradores').update({ dados: merged }).eq('nip', currentNip);
                    
                    if (payload.enderecoPnr && oldData.enderecoPnr !== payload.enderecoPnr) {
                        if (oldData.enderecoPnr) await registrarHistoricoOcupacao(oldData.enderecoPnr, currentNip, oldData.nomeCompleto, 'saida');
                        await registrarHistoricoOcupacao(payload.enderecoPnr, currentNip, payload.nomeCompleto || oldData.nomeCompleto, 'entrada');
                    }
                    
                    alert("Seus dados foram atualizados com sucesso!");
                } else {
                    // Force create if somehow missing
                    payload.senha = 'marinha123';
                    await window._supabase.from('moradores').insert([{ nip: currentNip, dados: payload }]);
                    await registrarHistoricoOcupacao(payload.enderecoPnr, currentNip, payload.nomeCompleto, 'entrada');
                    alert("Seus dados foram salvos com sucesso!");
                }
            } catch (ex) {
                alert("Falha na rede.");
            }
            btn.innerHTML = 'Salvar / Atualizar Dados';
            btn.disabled = false;
        });
    }
});


window.imprimirFichaCadastro = async function (nipTarget = null) {
    let dados = {};
    if (nipTarget && window._supabase) {
        const { data } = await window._supabase.from('moradores').select('dados').eq('nip', nipTarget);
        if (data && data.length > 0) {
            dados = data[0].dados || {};
        }
    }

    // Safely get properties
    const safeGet = (key) => dados[key] ? String(dados[key]).toUpperCase() : '';
    const defBool = (key, expected) => dados[key] === expected ? '( X )' : '(   )';
    const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Ficha de Cadastro - Vila Naval</title>
        <style>
            body { font-family: 'Arial', sans-serif; color: #000; line-height: 1.4; margin:0; padding:20px; }
            .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
            .header img { max-height: 80px; }
            .header h1 { font-size: 16pt; margin: 5px 0 0 0; text-transform: uppercase; }
            h2 { font-size: 12pt; background-color: #f0f0f0; border: 1px solid #000; padding: 5px; margin-top: 20px; }
            .row { display: flex; flex-wrap: wrap; margin-bottom: 10px; }
            .field { flex: 1; padding: 0 5px; }
            .field-label { font-weight: bold; font-size: 9pt; }
            .field-value { border-bottom: 1px solid #000; padding: 3px 0; min-height: 20px; font-size: 11pt; text-transform: uppercase; }
            .box { border: 1px solid #000; padding: 10px; margin-bottom: 10px; }
            .obs { font-size: 8pt; font-style: italic; margin-top: 30px; text-align: justify;}
            
            .signature { margin-top: 50px; text-align: center; width: 100%; display: flex; justify-content: space-around;}
            .sig-line { border-top: 1px solid #000; width: 40%; padding-top: 5px; font-size: 10pt; }
        </style>
    </head>
    <body onload="window.print(); window.onafterprint = function(){ window.close(); }">
        <div class="header">
            <!-- You can inject the literal encoded logo here or let it be text -->
            <h1>MARINHA DO BRASIL</h1>
            <h2>Vila Naval de Tabatinga (APVNT) - Ficha de Cadastro/Atualização</h2>
        </div>
        
        <h2>DADOS DO PERMISSIONÁRIO (TITULAR)</h2>
        <div class="box">
            <div class="row">
                <div class="field" style="flex: 2;"><div class="field-label">NOME COMPLETO:</div><div class="field-value">${safeGet('nomeCompleto')}</div></div>
                <div class="field" style="flex: 1;"><div class="field-label">POSTO/GRADUAÇÃO:</div><div class="field-value">${safeGet('posto')}</div></div>
            </div>
            <div class="row">
                <div class="field"><div class="field-label">NIP:</div><div class="field-value">${safeGet('nip')}</div></div>
                <div class="field"><div class="field-label">CPF:</div><div class="field-value">${safeGet('cpf')}</div></div>
                <div class="field"><div class="field-label">DATA NASCIMENTO:</div><div class="field-value">${safeGet('dataNascimentoTitular')}</div></div>
            </div>
            <div class="row">
                <div class="field" style="flex: 1;"><div class="field-label">ENDEREÇO NA APVNT (PNR):</div><div class="field-value">${safeGet('endereco')}</div></div>
            </div>
        </div>
        
        <h2>DADOS DOS DEPENDENTES / AGREGADOS</h2>
        <div class="box">
            <div class="row">
                <div class="field" style="flex: 2;"><div class="field-label">1. NOME DO DEPENDENTE:</div><div class="field-value">${safeGet('nomeDependente1')}</div></div>
                <div class="field"><div class="field-label">GRAU DE PARENTESCO:</div><div class="field-value">${safeGet('grauParentesco')}</div></div>
            </div>
            <div class="row">
                <div class="field"><div class="field-label">TELEFONE:</div><div class="field-value">${safeGet('telefone')}</div></div>
                <div class="field"><div class="field-label">DATA DE NASCIMENTO:</div><div class="field-value">${safeGet('dataNascimento')}</div></div>
            </div>
            <div class="row mt-2">
                <div class="field"><div class="field-label">OUTROS DEPENDENTES:</div><div class="field-value" style="min-height: 40px;">${safeGet('outrosDependentes')}</div></div>
            </div>
        </div>
        
        <h2>ANIMAIS DE ESTIMAÇÃO NO PNR</h2>
        <div class="box">
            <div class="row">
                <div class="field"><div class="field-label">POSSUI ANIMAL?</div><div style="font-size:11pt; padding:5px 0;"> ${defBool('possuiAnimal', 'Sim')} SIM &nbsp;&nbsp; ${defBool('possuiAnimal', 'Não')} NÃO</div></div>
                <div class="field"><div class="field-label">ESPÉCIE:</div><div class="field-value">${safeGet('especie')}</div></div>
            </div>
            <div class="row">
                <div class="field" style="flex: 2;"><div class="field-label">NOME DO ANIMAL:</div><div class="field-value">${safeGet('nomeAnimal')}</div></div>
            </div>
            <div class="row">
                <div class="field"><div class="field-label">VACINAS EM DIA?</div><div style="font-size:11pt; padding:5px 0;"> ${defBool('vacinacao', 'Em dia')} SIM &nbsp;&nbsp; ${defBool('vacinacao', 'Pendente')} NÃO </div></div>
            </div>
        </div>
        
        <p class="obs">
            Atesto sob as penas da lei e dos regulamentos militares a veracidade das informações ora prestadas, e comprometo-me a informar à Prefeitura da Vila Naval (Sistema APVNT) quaisquer atualizações ocorridas.
        </p>
        
        <div class="signature">
            <div class="sig-line">Local e Data</div>
            <div class="sig-line">Assinatura do Permissionário</div>
        </div>
    </body>
    </html>
    `;

    if (typeof html2pdf !== 'undefined') {
        var opt = {
            margin: 10,
            filename: 'ficha_cadastro_' + (nipTarget || 'novo') + '.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        // Create invisible container to render
        var container = document.createElement('div');
        container.innerHTML = html;
        container.style.position = 'absolute';
        container.style.left = '-9999px';
        container.style.width = '210mm'; // A4 width slightly less
        container.style.backgroundColor = 'white';
        document.body.appendChild(container);

        html2pdf().set(opt).from(container).save().then(function () {
            document.body.removeChild(container);
        });
    } else {
        const printWindow = window.open('', '_blank');
        if (!printWindow) return alert('Autorize popups neste site para gerar o documento.');
        printWindow.document.write(html);
        printWindow.document.close();
    }
}
