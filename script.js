// SUPABASE INITIALIZATION
const supabaseUrl = 'https://jzvoxaqhteqdfyurjlbk.supabase.co';
const supabaseKey = 'sb_publishable_hKgmUqtu7Wrfo1A5z0fiUg_xy4pLT9H';
window._supabase = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

document.addEventListener('DOMContentLoaded', () => {
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
                } catch(e) {
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
            'admin': 'Administração (Síndico)'
        };

        // Chamados Logic
        const chamadosKey = 'vnt_chamados';
        let chamados = JSON.parse(localStorage.getItem(chamadosKey)) || [];

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
                const novasCol = document.getElementById('kanbanNovas');
                const andamentoCol = document.getElementById('kanbanAndamento');
                const concluidasCol = document.getElementById('kanbanConcluidas');

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
                } else if (targetId === 'admin-pnrs') {
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

                setTimeout(() => {
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
                    localStorage.setItem(chamadosKey, JSON.stringify(chamados));

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

function submitFormData(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Salvando...';

    const formData = collectFormData(form);

    // Save to vnt_moradores
    let moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
    moradores.push(formData);
    localStorage.setItem('vnt_moradores', JSON.stringify(moradores));

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
                <button class="btn btn-sm btn-outline mt-2" onclick="alert('Funcionalidade Editar Morador: NIP ' + '${data.dadosPessoais.nip}')" style="width:100%; border: 1px solid #1a73e8; color: #1a73e8; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px;"><i class="ri-pencil-line"></i> Editar</button>
            </div>
            `;
        } else {
            vagoCount++;
            html += `
            <div class="pnr-card vago">
                <div class="pnr-title"><i class="ri-home-x-line"></i> ${pnr}</div>
                <p class="pnr-details text-danger"><strong>VAGO</strong></p>
                <p class="pnr-details">Aguardando novo morador</p>
            </div>
            `;
        }
    });

    pnrGrid.innerHTML = html;

    let btnOcupado = document.getElementById('badgeOcupado');
    let btnVago = document.getElementById('badgeVago');
    if (btnOcupado) btnOcupado.innerText = 'Ocupado: ' + ocupadoCount;
    if (btnVago) btnVago.innerText = 'Vago (Taxa União): ' + vagoCount;
}

setTimeout(renderMoradores, 500);

// ===== RESERVAS CALENDAR FULLCALENDAR LOGIC ===== //
let calendar;

function initCalendar() {
    const calendarEl = document.getElementById('reservasCalendar');
    if (!calendarEl) return;

    if (calendar) {
        calendar.destroy();
    }

    let reservasData = localStorage.getItem('vnt_reservas');
    if (!reservasData) {
        // Mock default if none exist
        reservasData = JSON.stringify([
            { id: "1", espaco: "clube", espacoNome: "Clube da Vila", data: new Date().toISOString().split('T')[0], horaInicio: "10:00", horaFim: "18:00", status: "aprovado" }
        ]);
        localStorage.setItem('vnt_reservas', reservasData);
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
        events: function (info, successCallback, failureCallback) {
            let reservas = JSON.parse(localStorage.getItem('vnt_reservas')) || [];
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
    formReserva.addEventListener('submit', function (e) {
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

        let reservas = JSON.parse(localStorage.getItem('vnt_reservas')) || [];

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
        localStorage.setItem('vnt_reservas', JSON.stringify(reservas));

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
            val = val.replace(/^(\d{2})(\d)/, '.');
            if (val.length > 7) {
                val = val.replace(/^(\d{2})\.(\d{4})(\d)/, '..');
            }
        }
        e.target.value = val;
        }
});

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if(cpf === '') return false;
    if(cpf.length !== 11) return false;
    if(/^(\d){10}$/.test(cpf)) return false;
    
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


window.imprimirFichaCadastro = async function(nipTarget = null) {
    let dados = {};
    if(nipTarget && window._supabase) {
        const { data } = await window._supabase.from('moradores').select('dados').eq('nip', nipTarget);
        if(data && data.length > 0) {
            dados = data[0].dados || {};
        }
    }
    
    // Safely get properties
    const safeGet = (key) => dados[key] ? String(dados[key]).toUpperCase() : '';
    const defBool = (key, expected) => dados[key] === expected ? '( X )' : '(   )';
    
    const printWindow = window.open('', '_blank');
    if(!printWindow) return alert('Autorize popups neste site para gerar o PDF.');
    
    const html = 
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Ficha de Cadastro - Vila Naval</title>
        <style>
            @page { size: A4; margin: 20mm; }
            body { font-family: 'Arial', sans-serif; color: #000; line-height: 1.4; margin:0; padding:0; }
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
                <div class="field" style="flex: 2;"><div class="field-label">NOME COMPLETO:</div><div class="field-value"></div></div>
                <div class="field" style="flex: 1;"><div class="field-label">POSTO/GRADUAÇÃO:</div><div class="field-value"></div></div>
            </div>
            <div class="row">
                <div class="field"><div class="field-label">NIP:</div><div class="field-value"></div></div>
                <div class="field"><div class="field-label">CPF:</div><div class="field-value"></div></div>
                <div class="field"><div class="field-label">DATA NESCIMENTO:</div><div class="field-value"></div></div>
            </div>
            <div class="row">
                <div class="field" style="flex: 1;"><div class="field-label">ENDEREÇO NA APVNT (PNR):</div><div class="field-value"></div></div>
            </div>
        </div>
        
        <h2>DADOS DOS DEPENDENTES / AGREGADOS</h2>
        <div class="box">
            <div class="row">
                <div class="field" style="flex: 2;"><div class="field-label">1. NOME DO DEPENDENTE:</div><div class="field-value"></div></div>
                <div class="field"><div class="field-label">GRAU DE PARENTESCO:</div><div class="field-value"></div></div>
            </div>
            <div class="row">
                <div class="field"><div class="field-label">TELEFONE:</div><div class="field-value"></div></div>
                <div class="field"><div class="field-label">DATA DE NASCIMENTO:</div><div class="field-value"></div></div>
            </div>
            <div class="row mt-2">
                <div class="field"><div class="field-label">OUTROS DEPENDENTES:</div><div class="field-value" style="min-height: 40px;"></div></div>
            </div>
        </div>
        
        <h2>ANIMAIS DE ESTIMAÇÃO NO PNR</h2>
        <div class="box">
            <div class="row">
                <div class="field"><div class="field-label">POSSUI ANIMAL?</div><div style="font-size:11pt; padding:5px 0;">  SIM &nbsp;&nbsp;  NÃO</div></div>
                <div class="field"><div class="field-label">ESPÉCIE:</div><div class="field-value"></div></div>
            </div>
            <div class="row">
                <div class="field" style="flex: 2;"><div class="field-label">NOME DO ANIMAL:</div><div class="field-value"></div></div>
                <div class="field"><div class="field-label">RAÇA/PORTE:</div><div class="field-value"></div></div>
            </div>
            <div class="row">
                <div class="field"><div class="field-label">VACINAS EM DIA?</div><div style="font-size:11pt; padding:5px 0;">  SIM &nbsp;&nbsp;  NÃO </div></div>
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
    ;
    printWindow.document.write(html);
    printWindow.document.close();
}
