document.addEventListener('DOMContentLoaded', () => {
    // Basic Login Simulation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.toLowerCase();

            // Simple mock authentication
            // username 'sindico' logins as admin
            if (username.includes('sindico') || username.includes('admin')) {
                localStorage.setItem('vnt_role', 'sindico');
            } else {
                localStorage.setItem('vnt_role', 'permissionario');
            }

            localStorage.setItem('vnt_user', username || 'Usuário');
            window.location.href = 'dashboard.html';
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
            if(navChamados) navChamados.style.display = 'none';

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
                    if (typeof renderMoradores === 'function') setTimeout(()=>renderMoradores(), 100);
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
        setTimeout(()=>renderMoradores(), 100);
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
    if(_supabase) {
        let { data } = await _supabase.from('moradores').select('dados');
        if(data) moradores = data.map(d => d.dados);
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


window.uploadFotoPNR = function(nip, input) {
    if(input.files && input.files[0]) {
        if(input.files[0].size > 3000000) {
            alert('A imagem é muito grande. Escolha uma foto menor que 3MB.');
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('foto_' + nip, e.target.result);
            setTimeout(()=>renderMoradores(), 100);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
