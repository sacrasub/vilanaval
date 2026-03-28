"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// SUPABASE INITIALIZATION
var supabaseUrl = 'https://jzvoxaqhteqdfyurjlbk.supabase.co';
var supabaseKey = 'sb_publishable_hKgmUqtu7Wrfo1A5z0fiUg_xy4pLT9H';
window._supabase = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

// --- Supabase Storage Wrapper ---
function getStorageData(_x) {
  return _getStorageData.apply(this, arguments);
}
function _getStorageData() {
  _getStorageData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(key) {
    var _yield$window$_supaba6, data, _t6;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          if (window._supabase) {
            _context0.n = 1;
            break;
          }
          return _context0.a(2, JSON.parse(localStorage.getItem(key)) || null);
        case 1:
          _context0.p = 1;
          _context0.n = 2;
          return window._supabase.from('moradores').select('dados').eq('nip', 'sistema');
        case 2:
          _yield$window$_supaba6 = _context0.v;
          data = _yield$window$_supaba6.data;
          if (!(data && data.length > 0 && data[0].dados && data[0].dados[key])) {
            _context0.n = 3;
            break;
          }
          return _context0.a(2, data[0].dados[key]);
        case 3:
          _context0.n = 5;
          break;
        case 4:
          _context0.p = 4;
          _t6 = _context0.v;
        case 5:
          return _context0.a(2, JSON.parse(localStorage.getItem(key)) || null);
      }
    }, _callee0, null, [[1, 4]]);
  }));
  return _getStorageData.apply(this, arguments);
}
function setStorageData(_x2, _x3) {
  return _setStorageData.apply(this, arguments);
} // ---------------------------------
function _setStorageData() {
  _setStorageData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(key, value) {
    var _yield$window$_supaba7, data, _dados, res, _t7;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          localStorage.setItem(key, JSON.stringify(value));
          if (window._supabase) {
            _context1.n = 1;
            break;
          }
          return _context1.a(2);
        case 1:
          _context1.p = 1;
          _context1.n = 2;
          // Set a timeout for Supabase sync to prevent hanging
          return Promise.race([
            window._supabase.from('moradores').select('dados').eq('nip', 'sistema'),
            new Promise(function(_, reject) { setTimeout(function() { reject(new Error("Supabase Timeout")); }, 5000); })
          ]);
        case 2:
          _yield$window$_supaba7 = _context1.v;
          data = _yield$window$_supaba7.data;
          _dados = {};
          if (data && data.length > 0 && data[0].dados) {
            _dados = data[0].dados;
          }
          _dados[key] = value;
          _context1.n = 3;
          return window._supabase.from('moradores').select('id').eq('nip', 'sistema');
        case 3:
          res = _context1.v;
          if (!(res.data && res.data.length > 0)) {
            _context1.n = 5;
            break;
          }
          _context1.n = 4;
          return window._supabase.from('moradores').update({
            dados: _dados
          }).eq('nip', 'sistema');
        case 4:
          _context1.n = 6;
          break;
        case 5:
          _context1.n = 6;
          return window._supabase.from('moradores').insert([{
            nip: 'sistema',
            dados: _dados
          }]);
        case 6:
          _context1.n = 8;
          break;
        case 7:
          _context1.p = 7;
          _t7 = _context1.v;
          console.error("Supabase Sync Failed (using local storage fallback):", _t7);
        case 8:
          return _context1.a(2);
      }
    }, _callee1, null, [[1, 7]]);
  }));
  return _setStorageData.apply(this, arguments);
}
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
  var loginForm, renderChamados, role, user, navChamados, lblMenuCadastro, btnMuralHomeAcao, btnReservaHomeAcao, logoutBtn, navItems, tabPanes, pageTitle, titleMap, chamadosKey, chamados, formNovoChamado, modalNovoChamado, btnAbrirChamado, _t2;
  return _regenerator().w(function (_context4) {
    while (1) switch (_context4.n) {
      case 0:
        // ENFORCE LOGIN
        if (!localStorage.getItem('vnt_role') && !window.location.pathname.includes('index') && !window.location.pathname.endsWith('/')) {
            window.location.href = 'index.html';
        }
        
        // Login com Supabase + Validação de Senha + NIP Masks
        loginForm = document.getElementById('loginForm');
        if (loginForm) {
          loginForm.addEventListener('submit', /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
              var nip, senha, btn, validPwd, _yield$window$_supaba, data, error, _yield$window$_supaba2, _data, _error, moradorData, dados, senhaBanco, modal, _t;
              try {
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.p = _context2.n) {
                    case 0:
                      e.preventDefault();
                      var rawNip = document.getElementById('nip').value;
                      var nipCleaned = rawNip.toLowerCase().replace(/[\s\u00A0\u200B]+/g, '').trim();
                      nip = (nipCleaned === 'sindico' || nipCleaned.includes('admin')) ? nipCleaned : rawNip.replace(/\D/g, '');
                      senha = document.getElementById('senha').value;
                      btn = loginForm.querySelector("button[type='submit']");
                      btn.innerHTML = "Verificando...";
                      btn.disabled = true;

                      // Checagem Dinamica do Sindico
                      var nipSanitized = nip.toLowerCase().trim();
                      if (!(nipSanitized === 'sindico' || nipSanitized.includes('admin'))) {
                        _context2.n = 7;
                        break;
                      }
                      validPwd = 'sindico';
                      _context2.p = 1;
                      if (!window._supabase) {
                        _context2.n = 3;
                        break;
                      }
                      _context2.n = 2;
                      return window._supabase.from('moradores').select('dados').eq('nip', 'sindico');
                    case 2:
                      _yield$window$_supaba = _context2.v;
                      data = _yield$window$_supaba.data;
                      error = _yield$window$_supaba.error;
                      if (data && data.length > 0 && data[0].dados && data[0].dados.senha) {
                        validPwd = data[0].dados.senha.trim();
                      }
                    case 3:
                      _context2.n = 5;
                      break;
                    case 4:
                      _context2.p = 4;
                      _t = _context2.v;
                      console.error("Erro consultando supabase para sindico:", _t);
                    case 5:
                      if (!(senha.trim() !== validPwd)) {
                        _context2.n = 6;
                        break;
                      }
                      alert("Senha do Síndico Incorreta!");
                      btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                      btn.disabled = false;
                      return _context2.a(2);
                    case 6:
                      localStorage.setItem('vnt_role', 'sindico');
                      localStorage.setItem('vnt_user', 'Síndico');
                      window.location.href = 'dashboard.html';
                      return _context2.a(2);
                    case 7:
                      if (validarNIP(nip)) {
                        _context2.n = 8;
                        break;
                      }
                      alert("NIP Inválido (Regra Módulo 11)! Verifique o Dígito Verificador inserido.");
                      btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                      btn.disabled = false;
                      return _context2.a(2);
                    case 8:
                      if (!window._supabase) {
                        _context2.n = 13;
                        break;
                      }
                      _context2.n = 9;
                      return window._supabase.from('moradores').select('*').eq('nip', nip);
                    case 9:
                      _yield$window$_supaba2 = _context2.v;
                      _data = _yield$window$_supaba2.data;
                      _error = _yield$window$_supaba2.error;
                      if (!(_data && _data.length > 0)) {
                        _context2.n = 11;
                        break;
                      }
                      moradorData = _data[0];
                      dados = moradorData.dados || {};

                      // BLOQUEIO DE ACESSO PARA NÃO VERIFICADOS (SÓ LIBERA SE STATUS FOR 'Verificado')
                      if (dados.statusVerificacao !== 'Verificado') {
                        alert("Acesso Negado! Seu cadastro ainda está 'Pendente' de liberação pela Administração da Vila Naval.");
                        btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                        btn.disabled = false;
                        return _context2.a(2);
                      }

                      senhaBanco = dados.senha || 'marinha123';
                      if (!(senha !== senhaBanco)) {
                        _context2.n = 10;
                        break;
                      }
                      alert("Senha Incorreta!");
                      btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                      btn.disabled = false;
                      return _context2.a(2);
                    case 10:
                      if (senhaBanco === 'marinha123') {
                        // FORÇA MUDANÇA DE SENHA
                        modal = document.getElementById('modalMudarSenha');
                        if (modal) {
                          modal.style.display = 'flex';
                          document.getElementById('btnSalvarSenha').onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                            var novaSenha, btnSalvar;
                            return _regenerator().w(function (_context) {
                              while (1) switch (_context.n) {
                                case 0:
                                  novaSenha = document.getElementById('novaSenha').value;
                                  if (!(novaSenha.length < 6)) {
                                    _context.n = 1;
                                    break;
                                  }
                                  alert("A senha deve ter no mínimo 6 caracteres para ser segura.");
                                  return _context.a(2);
                                case 1:
                                  btnSalvar = document.getElementById('btnSalvarSenha');
                                  btnSalvar.innerHTML = "Salvando...";
                                  btnSalvar.disabled = true;
                                  dados.senha = novaSenha;
                                  _context.n = 2;
                                  return window._supabase.from('moradores').update({
                                    dados: dados
                                  }).eq('nip', nip);
                                case 2:
                                  localStorage.setItem('vnt_role', nip);
                                  localStorage.setItem('vnt_user', nip);
                                  window.location.href = 'dashboard.html';
                                case 3:
                                  return _context.a(2);
                              }
                            }, _callee);
                          }));
                        }
                      } else {
                        // Login normal se a senha não for a de fábrica
                        localStorage.setItem('vnt_role', nip);
                        localStorage.setItem('vnt_user', nip);
                        localStorage.setItem('vnt_user_data', JSON.stringify(dados));
                        window.location.href = 'dashboard.html';
                      }
                      _context2.n = 12;
                      break;
                    case 11:
                      alert("Acesso Negado! NIP não matriculado na Vila Naval. Solicite liberação na administração.");
                      btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                      btn.disabled = false;
                    case 12:
                      _context2.n = 14;
                      break;
                    case 13:
                      alert("Erro grave: Banco de Dados Inacessível.");
                      btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                      btn.disabled = false;
                    case 14:
                      return _context2.a(2);
                  }
                }, _callee2, null, [[1, 4]]);
              } catch (err) {
                console.error("Login Error:", err);
                alert("Ocorreu um erro ao processar seu login. Tente novamente.");
                if (btn) {
                  btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                  btn.disabled = false;
                }
              }
            }));
            return function (_x4) {
              return _ref2.apply(this, arguments);
            };
          }());
        }

        // Dashboard Initialization
        var userNameDisplay = document.getElementById('userNameDisplay');
        if (!userNameDisplay) {
          _context4.n = 3;
          break;
        }
        userNameDisplay.textContent = capitalize(user);
        renderChamados = function renderChamados() {
          var adminView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var listEl = document.getElementById(adminView ? 'adminChamadosList' : 'chamadosList');
          if (!listEl) return;
          var filteredChamados = chamados;
          if (!adminView) {
            filteredChamados = chamados.filter(function (c) {
              return c.solicitante.toLowerCase() === user.toLowerCase();
            });
          }
          if (filteredChamados.length === 0) {
            listEl.innerHTML = "<div class=\"empty-state\"><i class=\"ri-inbox-line\"></i><p>Nenhum chamado aberto.</p></div>";
            return;
          }
          if (adminView) {
            // Populate Kanban
            var novasCol = document.getElementById('kb-abertos');
            var andamentoCol = document.getElementById('kb-analise');
            var concluidasCol = document.getElementById('kb-concluidos');
            if (novasCol && andamentoCol && concluidasCol) {
              novasCol.innerHTML = '';
              andamentoCol.innerHTML = '';
              concluidasCol.innerHTML = '';
              filteredChamados.forEach(function (c) {
                var card = "\n                        <div class=\"kanban-card\">\n                            <div style=\"display:flex; justify-content:space-between;\">\n                                <span class=\"badge ".concat(c.urgencia === 'A' ? 'badge-danger' : 'badge-warning', "\">Tipo ").concat(c.urgencia, "</span>\n                                <span class=\"text-muted\" style=\"font-size: 0.8rem;\">").concat(c.data, "</span>\n                            </div>\n                            <h4 style=\"margin: 10px 0 5px 0; font-size:1rem;\">").concat(c.pnr, "</h4>\n                            <p class=\"text-muted\" style=\"font-size: 0.85rem; margin-bottom:10px;\">").concat(c.descricao, "</p>\n                            <div style=\"display:flex; justify-content:space-between; align-items:center;\">\n                                <small><strong>Req:</strong> ").concat(c.solicitante, "</small>\n                            </div>\n                        </div>");
                if (c.status === 'novo') novasCol.innerHTML += card;else if (c.status === 'andamento') andamentoCol.innerHTML += card;else concluidasCol.innerHTML += card;
              });
            }
          } else {
            listEl.innerHTML = filteredChamados.map(function (c) {
              return "\n                    <div class=\"chamado-card status-".concat(c.status, "\">\n                        <div class=\"chamado-header\" onclick=\"toggleChamado('").concat(c.id, "')\">\n                            <div>\n                                <span class=\"badge ").concat(c.urgencia === 'A' ? 'badge-danger' : 'badge-warning', "\">Tipo ").concat(c.urgencia, "</span>\n                                <strong>Pedido #").concat(c.id, "</strong> - ").concat(c.pnr, "\n                            </div>\n                            <div style=\"display:flex; align-items:center; gap: 10px;\">\n                                <span class=\"text-muted\">").concat(c.data, "</span>\n                                <i class=\"ri-arrow-down-s-line\"></i>\n                            </div>\n                        </div>\n                        <div class=\"chamado-body\" id=\"body-").concat(c.id, "\">\n                            <p><strong>Descri\xE7\xE3o:</strong> ").concat(c.descricao, "</p>\n                            <p><strong>Responsabilidade:</strong> <span class=\"badge ").concat(c.responsabilidade === 'aguardando' ? 'badge-info' : 'badge-success', "\">").concat(c.responsabilidade.toUpperCase(), "</span></p>\n                            <p><strong>Status:</strong> ").concat(c.status.toUpperCase(), "</p>\n                        </div>\n                    </div>\n                ");
            }).join('');
          }
        };
        role = localStorage.getItem('vnt_role') || 'permissionario';
        user = localStorage.getItem('vnt_user') || 'Usuário';
        document.getElementById('userNameDisplay').textContent = capitalize(user);
        if (role === 'sindico') {
          document.getElementById('userRoleDisplay').textContent = 'Síndico(a)';
          // Show admin menu items
          document.querySelectorAll('.admin-only').forEach(function (el) {
            return el.style.display = 'flex';
          });
          document.body.classList.add('is-admin');
          navChamados = document.querySelector('[data-target="chamados"]');
          if (navChamados) navChamados.style.display = 'none';
          lblMenuCadastro = document.getElementById('lblMenuCadastro');
          if (lblMenuCadastro) lblMenuCadastro.textContent = 'Cadastro dos Moradores';
          btnMuralHomeAcao = document.getElementById('btnMuralHomeAcao');
          if (btnMuralHomeAcao) btnMuralHomeAcao.textContent = 'Editar Avisos';
          btnReservaHomeAcao = document.getElementById('btnReservaHomeAcao');
          if (btnReservaHomeAcao) btnReservaHomeAcao.textContent = 'Consultar Reservas';
        } else {
          var userRoleDisplay = document.getElementById('userRoleDisplay');
          if (userRoleDisplay) userRoleDisplay.textContent = 'Permissionário';
        }
        
        // Hide registration card for everyone (requested by user)
        var cardTitular = document.getElementById('cardCadastroTitular');
        if (cardTitular) cardTitular.style.display = 'none';
        logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
          logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('vnt_role');
            localStorage.removeItem('vnt_user');
            window.location.href = 'index.html';
          });
        }

        // Tab Switching Logic
        navItems = document.querySelectorAll('.nav-item');
        tabPanes = document.querySelectorAll('.tab-pane');
        pageTitle = document.getElementById('pageTitle');
        titleMap = {
          'dashboard': 'Bem-vindo à Vila Naval',
          'mural': 'Mural de Avisos',
          'reservas': 'Gestão de Reservas',
          'normas': 'Normas da Vila',
          'cadastro': 'Atualização de Moradores',
          'chamados': 'Meus Chamados (Anexo J)',
          'admin-chamados': 'Gestão de Chamados',
          'admin-pnrs': 'Cadastro de PNRs',
          'admin-lista': 'Lista de Moradores',
          'admin': 'Administração (Síndico)'
        }; // Chamados Logic
        chamadosKey = 'vnt_chamados';
        _context4.n = 1;
        return getStorageData(chamadosKey);
      case 1:
        _t2 = _context4.v;
        if (_t2) {
          _context4.n = 2;
          break;
        }
        _t2 = [];
      case 2:
        chamados = _t2;
        window.toggleChamado = function (id) {
          var body = document.getElementById("body-".concat(id));
          if (body.style.display === 'block') {
            body.style.display = 'none';
          } else {
            body.style.display = 'block';
          }
        };
        navItems.forEach(function (item) {
          item.addEventListener('click', function (e) {
            e.preventDefault();

            // If element should be hidden for this role, block clicking
            if (role !== 'sindico' && item.classList.contains('admin-only')) {
              return;
            }
            var targetId = item.getAttribute('data-target');
            navItems.forEach(function (nav) {
              return nav.classList.remove('active');
            });
            item.classList.add('active');
            tabPanes.forEach(function (pane) {
              return pane.classList.remove('active');
            });
            var tgt = document.getElementById(targetId);
            if (tgt) tgt.classList.add('active');
            pageTitle.textContent = titleMap[targetId] || 'Vila Naval';
            if (targetId === 'admin') {
              // loadAdminStats();
            } else if (targetId === 'admin-chamados' || targetId === 'chamados') {
              renderChamados(targetId === 'admin-chamados');
            } else if (targetId === 'admin-pnrs') {
              if (typeof renderMoradores === 'function') setTimeout(function () {
                return renderMoradores();
              }, 100);
            } else if (targetId === 'admin-lista') {
              if (typeof carregarListaMoradores === 'function') {
                carregarListaMoradores();
              }
            } else if (targetId === 'reservas') {
              if (typeof initCalendar === 'function') {
                setTimeout(initCalendar, 50);
              }
            } else if (targetId === 'cadastro') {
              if (typeof window.preencherMeuCadastro === 'function') {
                window.preencherMeuCadastro();
              }
            } else if (targetId === 'dashboard') {
              if (typeof renderHomeReservas === 'function') renderHomeReservas();
            }
          });
        });

        // Function to render user's reservations on Home Tab
        window.renderHomeReservas = function () {
          var container = document.getElementById('reservasHomeList');
          if (!container) return;
          getStorageData('vnt_reservas').then(function (reservas) {
            if (!reservas) reservas = [];
            var myReservas = (role === 'sindico') ? reservas : reservas.filter(function (r) {
              return r.solicitante.toLowerCase() === user.toLowerCase();
            });

            // Filter only upcoming (today or future)
            var today = new Date().toISOString().split('T')[0];
            var upcoming = myReservas.filter(function (r) {
              return r.data >= today;
            }).sort(function (a, b) {
              return a.data.localeCompare(b.data);
            });
            if (upcoming.length === 0) {
              container.innerHTML = '<div class="empty-state"><i class="ri-calendar-line"></i><p>Nenhuma reserva para os próximos dias.</p></div>';
              return;
            }
            container.innerHTML = upcoming.map(function (r) {
              var statusClass = r.status === 'aprovado' ? 'text-success' : 'text-warning';
              var statusTxt = r.status === 'aprovado' ? 'Confirmado' : 'Pendente';
              return "\n                <div style=\"padding: 12px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;\">\n                    <div>\n                        <h4 style=\"margin:0; font-size:0.95rem; color:var(--primary);\">".concat(r.espacoNome, "</h4>\n                        <p style=\"margin:2px 0 0 0; font-size:0.85rem; color:var(--text-muted);\">").concat(r.data, " | ").concat(r.horaInicio, " - ").concat(r.horaFim, "</p>\n                    </div>\n                    <span class=\"").concat(statusClass, "\" style=\"font-size:0.8rem; font-weight:600;\">").concat(statusTxt, "</span>\n                </div>\n              ");
            }).join('');
          });
        };
        setTimeout(renderHomeReservas, 800);

        // Handling Chamado Form submission
        formNovoChamado = document.getElementById('formNovoChamado');
        modalNovoChamado = document.getElementById('modalNovoChamado');
        if (formNovoChamado) {
          formNovoChamado.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = formNovoChamado.querySelector('button[type="submit"]');
            var origTxt = btn.textContent;
            btn.disabled = true;
            btn.textContent = 'Enviando...';
            
            // Timeout safety for mobile/slow networks
            var solved = false;
            var timeoutId = setTimeout(function() {
                if (!solved) {
                    btn.disabled = false;
                    btn.textContent = origTxt;
                    alert("A conexão está lenta. Seu pedido será enviado em segundo plano.");
                    modalNovoChamado.style.display = 'none';
                }
            }, 8000);

            setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
              var newChamado;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    try {
                        newChamado = {
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
                        _context3.n = 1;
                        return setStorageData(chamadosKey, chamados);
                    } catch (err) {
                        console.error("Submission Error:", err);
                    }
                  case 1:
                    solved = true;
                    clearTimeout(timeoutId);
                    btn.disabled = false;
                    btn.textContent = origTxt;
                    modalNovoChamado.style.display = 'none';
                    formNovoChamado.reset();
                    renderChamados(false);
                  case 2:
                    return _context3.a(2);
                }
              }, _callee3);
            })), 500);
          });
        }

        // Close Modal
        document.querySelectorAll('.modal-close, .btn-outline').forEach(function (btn) {
          btn.addEventListener('click', function () {
            if (modalNovoChamado) modalNovoChamado.style.display = 'none';
          });
        });
        btnAbrirChamado = document.getElementById('btnAbrirChamado');
        if (btnAbrirChamado) {
          btnAbrirChamado.addEventListener('click', function () {
            if (modalNovoChamado) {
                var elPnr = document.getElementById('chamadoPnr');
                if (elPnr) elPnr.value = localStorage.getItem('vnt_pnr') || user; 
                modalNovoChamado.style.display = 'flex';
            }
          });
        }
    } catch (glErr) {
        console.error("Global Initialization Error:", glErr);
    }
      case 3:
        return _context4.a(2);
    }
  }, _callee4);
})));
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== Native Registry Form Logic ===== //

function startRegistrationFlow(formId) {
  var form = null;
  if (formId) {
    form = document.getElementById(formId);
    if (!form) return;
  } else {
    var urlParams = new URLSearchParams(window.location.search);
    var idFromUrl = urlParams.get('formId') || 'cadastroForm';
    form = document.getElementById(idFromUrl);
    if (!form) return;
  }
  var nextButtons = form.querySelectorAll('.next-btn');
  var prevButtons = form.querySelectorAll('.prev-btn');
  var steps = form.querySelectorAll('section.form-group');
  var currentStep = 0;
  function updateSteps() {
    steps.forEach(function (step, index) {
      if (index === currentStep) {
        step.style.display = 'block';
      } else {
        step.style.display = 'none';
      }
    });
  }
  function validateStep() {
    var currentSection = steps[currentStep];
    var inputs = currentSection.querySelectorAll('input[required], select[required]');
    var isValid = true;
    inputs.forEach(function (input) {
      if (!input.value) {
        isValid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = 'var(--border-color)';
      }
      if (input.type === 'email' && input.value) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          isValid = false;
          input.style.borderColor = 'red';
        }
      }
    });
    return isValid;
  }
  nextButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (validateStep()) {
        currentStep++;
        updateSteps();
        window.scrollTo(0, 0);
      } else {
        alert('Por favor, preencha todos os campos obrigatórios corretamente antes de avançar.');
      }
    });
  });
  prevButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      currentStep--;
      updateSteps();
      window.scrollTo(0, 0);
    });
  });
  form.addEventListener('submit', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(e) {
      var checkboxTermos;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            e.preventDefault();

            // Termos Validation
            checkboxTermos = document.querySelectorAll('input[name="termos"]:checked');
            if (!(checkboxTermos.length < 6)) {
              _context5.n = 1;
              break;
            }
            e.preventDefault();
            alert('Você deve aceitar todos os termos do Regulamento da Vila Naval para concluir o cadastro.');
            return _context5.a(2, false);
          case 1:
            if (validateStep()) {
              submitFormData(form);
            } else {
              alert('Por favor, verifique se todos os campos estão preenchidos.');
            }
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
  var cepInput = form.querySelector('#cepEmergencia');
  if (cepInput) {
    cepInput.addEventListener('blur', function () {
      var cep = this.value.replace(/\D/g, '');
      if (cep.length === 8) {
        fetch("https://viacep.com.br/ws/".concat(cep, "/json/")).then(function (res) {
          return res.json();
        }).then(function (data) {
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
  var animalRadios = form.querySelectorAll('input[name="possuiAnimal"]');
  var detalhesAnimalContainer = form.querySelector('#detalhesAnimal');
  if (animalRadios.length > 0 && detalhesAnimalContainer) {
    animalRadios.forEach(function (radio) {
      radio.addEventListener('change', function (e) {
        if (e.target.value === 'Sim') {
          detalhesAnimalContainer.style.display = 'block';
          detalhesAnimalContainer.querySelectorAll('input').forEach(function (i) {
            return i.required = true;
          });
        } else {
          detalhesAnimalContainer.style.display = 'none';
          detalhesAnimalContainer.querySelectorAll('input').forEach(function (i) {
            return i.required = false;
          });
        }
      });
    });
  }
  updateSteps();
}
function collectFormData(form) {
  var formData = new FormData(form);
  var dataObj = {
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
function submitFormData(_x6) {
  return _submitFormData.apply(this, arguments);
}
function _submitFormData() {
  _submitFormData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(form) {
    var submitBtn, originalText, formData, moradores, _t8;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          submitBtn = form.querySelector('button[type="submit"]');
          originalText = submitBtn.textContent;
          submitBtn.disabled = true;
          submitBtn.innerHTML = '⏳ Salvando...';
          formData = collectFormData(form); // Save to vnt_moradores
          _context10.n = 1;
          return getStorageData('vnt_moradores');
        case 1:
          _t8 = _context10.v;
          if (_t8) {
            _context10.n = 2;
            break;
          }
          _t8 = [];
        case 2:
          moradores = _t8;
          moradores.push(formData);
          _context10.n = 3;
          return setStorageData('vnt_moradores', moradores);
        case 3:
          // Also sync to Sindico table if we implement the render function
          if (typeof renderMoradores === 'function') {
            setTimeout(function () {
              return renderMoradores();
            }, 100);
          }
          setTimeout(function () {
            displaySummary(formData);
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }, 800);
        case 4:
          return _context10.a(2);
      }
    }, _callee10);
  }));
  return _submitFormData.apply(this, arguments);
}
function displaySummary(data) {
  var formSection = document.getElementById('cadastro');
  if (formSection) {
    formSection.innerHTML = "\n            <div class=\"summary-section\">\n                <h2><i class=\"ri-check-double-line\" style=\"color:var(--success-color)\"></i> Cadastro Registrado com Sucesso!</h2>\n                <p>Obrigado por atualizar os dados da sua PNR em nossa Vila Naval, ".concat(data.dadosPessoais.posto, " ").concat(data.dadosPessoais.nomeCompleto, ".</p>\n                <div class=\"summary-card\">\n                    <h4>Resumo do Cadastro:</h4>\n                    <ul>\n                        <li><strong>NIP:</strong> ").concat(data.dadosPessoais.nip, "</li>\n                        <li><strong>Casa:</strong> ").concat(data.dadosPessoais.endereco, "</li>\n                        <li><strong>Dependentes declarados:</strong> ").concat(data.dependentes.nomeDependente1 !== 'Não informado' ? 'Sim' : 'Não', "</li>\n                        <li><strong>Animais na Resid\xEAncia:</strong> ").concat(data.animais.possuiAnimal, " - ").concat(data.animais.especie, "</li>\n                    </ul>\n                </div>\n                <div style=\"margin-top: 30px; text-align: center;\">\n                    <p class=\"text-muted\">A administra\xE7\xE3o foi notificada de sua resposta.</p>\n                </div>\n            </div>\n        ");
  }
}

// Start forms if present
setTimeout(function () {
  startRegistrationFlow('cadastroForm');
}, 500);
function renderMoradores() {
  return _renderMoradores.apply(this, arguments);
}
function _renderMoradores() {
  _renderMoradores = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
    var isSindico, pnrGrid, moradores, _yield$_supabase$from, data, mapMoradores, ocupadoCount, vagoCount, html, todasPnr, btnOcupado, btnVago;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          isSindico = localStorage.getItem('vnt_role') === 'sindico';
          if (isSindico) {
            _context11.n = 1;
            break;
          }
          return _context11.a(2);
        case 1:
          pnrGrid = document.getElementById('pnrGridContainer');
          if (pnrGrid) {
            _context11.n = 2;
            break;
          }
          return _context11.a(2);
        case 2:
          moradores = [];
          if (!_supabase) {
            _context11.n = 4;
            break;
          }
          _context11.n = 3;
          return _supabase.from('moradores').select('dados');
        case 3:
          _yield$_supabase$from = _context11.v;
          data = _yield$_supabase$from.data;
          if (data) moradores = data.map(function (d) {
            return d.dados;
          });
          _context11.n = 5;
          break;
        case 4:
          moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
        case 5:
          // Create a dict index mapped by "endereco"
          mapMoradores = {}; // Last overrides previous (simulates update)
          moradores.forEach(function (m) {
            mapMoradores[m.dadosPessoais.endereco] = m;
          });
          ocupadoCount = 0;
          vagoCount = 0;
          html = '';
          todasPnr = ["Ed. SG Lisboa - Apto 101", "Ed. SG Lisboa - Apto 102", "Ed. SG Lisboa - Apto 103", "Ed. SG Lisboa - Apto 104", "Ed. SG Lisboa - Apto 105", "Ed. SG Lisboa - Apto 106", "Ed. SG Lisboa - Apto 201", "Ed. SG Lisboa - Apto 202", "Ed. SG Lisboa - Apto 203", "Ed. SG Lisboa - Apto 204", "Ed. SG Lisboa - Apto 205", "Ed. SG Lisboa - Apto 206", "Ed. SG Lisboa - Apto 301", "Ed. SG Lisboa - Apto 302", "Ed. SG Lisboa - Apto 303", "Ed. SG Lisboa - Apto 304", "Ed. SG Lisboa - Apto 305", "Ed. SG Lisboa - Apto 306", "Casa 01", "Casa 02", "Casa 03", "Casa 04", "Casa 05", "Casa 06", "Casa 07", "Casa 08", "Casa 09", "Casa 10", "Casa 11", "Casa 12", "Casa 13", "Casa 14", "Casa 15", "Casa 16", "Casa 17", "Casa 18", "Casa 19"];
          todasPnr.forEach(function (pnr) {
            if (mapMoradores[pnr]) {
              ocupadoCount++;
              var _data2 = mapMoradores[pnr];
              var dependentes = _data2.dependentes.nomeDependente1 !== 'Não informado' ? 'Cadastrado' : 'S/ Dep';
              var pets = _data2.animais.possuiAnimal === 'Sim' ? _data2.animais.especie : 'S/ Pet';
              html += "\n            <div class=\"pnr-card ocupado\" style=\"position:relative;\">\n                <div class=\"pnr-title\"><i class=\"ri-home-4-fill\"></i> ".concat(pnr, "</div>\n                <p class=\"pnr-details\">Perm: ").concat(_data2.dadosPessoais.posto, " ").concat(_data2.dadosPessoais.nomeCompleto.split(' ')[0], "</p>\n                <p class=\"pnr-details\"><i class=\"ri-group-line\"></i> ").concat(dependentes, " | <i class=\"ri-github-fill\"></i> ").concat(pets, "</p>\n                <div style=\"display:flex; gap: 5px; margin-top: 5px;\">\n                    <button class=\"btn btn-sm btn-outline mt-2\" onclick=\"abrirModalHistorico('").concat(pnr, "')\" style=\"width:100%; border: 1px solid #805ad5; color: #805ad5; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px;\"><i class=\"ri-history-line\"></i> Hist\xF3rico</button>\n                    <button class=\"btn btn-sm btn-outline mt-2\" onclick=\"abrirModalEditarMorador('").concat(_data2.dadosPessoais.nip, "')\" style=\"width:100%; border: 1px solid #1a73e8; color: #1a73e8; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px;\"><i class=\"ri-pencil-line\"></i> Editar</button>\n                </div>\n            </div>\n            ");
            } else {
              vagoCount++;
              html += "\n            <div class=\"pnr-card vago\">\n                <div class=\"pnr-title\"><i class=\"ri-home-x-line\"></i> ".concat(pnr, "</div>\n                <p class=\"pnr-details text-danger\"><strong>VAGO</strong></p>\n                <p class=\"pnr-details\">Aguardando novo morador</p>\n                <button class=\"btn btn-sm btn-outline mt-2\" onclick=\"abrirModalHistorico('").concat(pnr, "')\" style=\"width:100%; border: 1px solid #805ad5; color: #805ad5; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px;\"><i class=\"ri-history-line\"></i> Hist\xF3rico</button>\n            </div>\n            ");
            }
          });
          pnrGrid.innerHTML = html;
          btnOcupado = document.getElementById('badgeOcupado');
          btnVago = document.getElementById('badgeVago');
          if (btnOcupado) btnOcupado.innerText = 'Ocupado: ' + ocupadoCount;
          if (btnVago) btnVago.innerText = 'Vago (Taxa União): ' + vagoCount;
        case 6:
          return _context11.a(2);
      }
    }, _callee11);
  }));
  return _renderMoradores.apply(this, arguments);
}
setTimeout(renderMoradores, 500);

// ===== RESERVAS CALENDAR FULLCALENDAR LOGIC ===== //
var calendar;
function initCalendar() {
  return _initCalendar.apply(this, arguments);
}
function _initCalendar() {
  _initCalendar = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
    var calendarEl, reservasData;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          calendarEl = document.getElementById('reservasCalendar');
          if (calendarEl) {
            _context13.n = 1;
            break;
          }
          return _context13.a(2);
        case 1:
          if (calendar) {
            calendar.destroy();
          }
          _context13.n = 2;
          return getStorageData('vnt_reservas');
        case 2:
          reservasData = _context13.v;
          if (_typeof(reservasData) === 'object') reservasData = JSON.stringify(reservasData);
          if (reservasData) {
            _context13.n = 3;
            break;
          }
          // Mock default if none exist
          reservasData = JSON.stringify([{
            id: "1",
            espaco: "clube",
            espacoNome: "Clube da Vila",
            data: new Date().toISOString().split('T')[0],
            horaInicio: "10:00",
            horaFim: "18:00",
            status: "aprovado"
          }]);
          _context13.n = 3;
          return setStorageData('vnt_reservas', JSON.parse(reservasData));
        case 3:
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
            validRange: function validRange(nowDate) {
              var clone = new Date(nowDate.valueOf());
              var endOfMonth = new Date(clone.getFullYear(), clone.getMonth() + 1, 1);
              return {
                start: nowDate,
                // today
                end: endOfMonth // start of next month
              };
            },
            events: function () {
              var _events = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(info, successCallback, failureCallback) {
                var reservas, events, _t9;
                return _regenerator().w(function (_context12) {
                  while (1) switch (_context12.n) {
                    case 0:
                      _context12.n = 1;
                      return getStorageData('vnt_reservas');
                    case 1:
                      _t9 = _context12.v;
                      if (_t9) {
                        _context12.n = 2;
                        break;
                      }
                      _t9 = [];
                    case 2:
                      reservas = _t9;
                      events = reservas.map(function (r) {
                        return {
                          id: r.id,
                          title: r.espacoNome + ' (' + r.horaInicio + '-' + r.horaFim + ')',
                          start: r.data + 'T' + r.horaInicio,
                          end: r.data + 'T' + r.horaFim,
                          color: r.status === 'aprovado' ? '#38a169' : '#dd6b20',
                          allDay: false
                        };
                      });
                      successCallback(events);
                    case 3:
                      return _context12.a(2);
                  }
                }, _callee12);
              }));
              function events(_x0, _x1, _x10) {
                return _events.apply(this, arguments);
              }
              return events;
            }(),
            dateClick: function dateClick(info) {
              document.getElementById('reservaData').value = info.dateStr;
              // Provide visual feedback
              document.querySelectorAll('.fc-day').forEach(function(el) {
                el.style.backgroundColor = '';
              });
              info.dayEl.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
              
              // Scroll to form on mobile
              if (window.innerWidth < 768) {
                document.getElementById('formReserva').scrollIntoView({ behavior: 'smooth' });
              }
            },
            longPressDelay: 0,
            selectLongPressDelay: 0
          });
          calendar.render();
        case 4:
          return _context13.a(2);
      }
    }, _callee13);
  }));
  return _initCalendar.apply(this, arguments);
}
var formReserva = document.getElementById('formReserva');
if (formReserva) {
  formReserva.addEventListener('submit', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(e) {
      var data, espacoSelect, espaco, horaInicio, horaFim, motivo, reservas, hasConflict, novaReserva, _t3;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            e.preventDefault();
            data = document.getElementById('reservaData').value;
            if (data) {
              _context6.n = 1;
              break;
            }
            alert('Por favor, clique no calendário à esquerda para selecionar o dia da reserva.');
            return _context6.a(2);
          case 1:
            espacoSelect = document.getElementById('reservaEspaco');
            espaco = espacoSelect.options[espacoSelect.selectedIndex].text;
            horaInicio = document.getElementById('reservaHoraInicio').value;
            horaFim = document.getElementById('reservaHoraFim').value;
            motivo = document.getElementById('reservaMotivo').value;
            if (!(horaFim > "23:00")) {
              _context6.n = 2;
              break;
            }
            alert('ERRO: De acordo com as Normas da Vila Naval (Item 1), o limite de encerramento para atividades festivas é impreterivelmente 23:00h.');
            return _context6.a(2);
          case 2:
            if (!(horaInicio >= horaFim)) {
              _context6.n = 3;
              break;
            }
            alert('A hora de início deve ser anterior à hora de término.');
            return _context6.a(2);
          case 3:
            _context6.n = 4;
            return getStorageData('vnt_reservas');
          case 4:
            _t3 = _context6.v;
            if (_t3) {
              _context6.n = 5;
              break;
            }
            _t3 = [];
          case 5:
            reservas = _t3;
            // Block conflict Logic: same place + overlapping hours
            // Since we are doing daily events for simple demo, you could block same day and place entirely,
            // or check hours.
            hasConflict = reservas.some(function (r) {
              return r.data === data && r.espaco === espacoSelect.value && (horaInicio >= r.horaInicio && horaInicio < r.horaFim || horaFim > r.horaInicio && horaFim <= r.horaFim || horaInicio <= r.horaInicio && horaFim >= r.horaFim);
            });
            if (!hasConflict) {
              _context6.n = 6;
              break;
            }
            alert("J\xE1 existe uma reserva pendente/aprovada para o ".concat(espaco, " neste hor\xE1rio! Escolha outro dia ou hor\xE1rio."));
            return _context6.a(2);
          case 6:
            novaReserva = {
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
            _context6.n = 7;
            return setStorageData('vnt_reservas', reservas);
          case 7:
            alert('Solicitação de reserva registrada com sucesso! Ficará Pendente de Aprovação do Síndico na cor Amarela.');
            formReserva.reset();
            document.getElementById('reservaData').value = '';
            if (calendar) {
              calendar.refetchEvents();
            }
          case 8:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function (_x7) {
      return _ref6.apply(this, arguments);
    };
  }());
}
window.printSection = function (sectionId) {
  document.querySelectorAll('.tab-pane').forEach(function (el) {
    return el.classList.remove('print-active');
  });
  document.getElementById(sectionId).classList.add('print-active');
  window.print();
  setTimeout(function () {
    document.getElementById(sectionId).classList.remove('print-active');
  }, 1000);
};
window.shareNotice = function (title, text) {
  if (navigator.share) {
    navigator.share({
      title: title || 'Aviso da Vila Naval',
      text: text || 'Veja este comunicado da administração.',
      url: window.location.href
    })["catch"](function (err) {
      return console.log('Erro ao compartilhar', err);
    });
  } else {
    alert('Botão de compartilhamento não suportado neste navegador. Copie a URL para compartilhar.');
  }
};
window.uploadFotoPNR = function (nip, input) {
  if (input.files && input.files[0]) {
    if (input.files[0].size > 3000000) {
      alert('A imagem é muito grande. Escolha uma foto menor que 3MB.');
      return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem('foto_' + nip, e.target.result);
      setTimeout(function () {
        return renderMoradores();
      }, 100);
    };
    reader.readAsDataURL(input.files[0]);
  }
};

// Global Input Mask for NIP (00.0000.00)
document.addEventListener('input', function (e) {
  if (e.target && (e.target.id === 'nip' || e.target.id === 'novoMoradorNip')) {
    var rawVal = e.target.value;
    var trimmedVal = rawVal.toLowerCase().trim();
    if (trimmedVal.startsWith('s') || trimmedVal.startsWith('a')) {
      return;
    }
    var val = rawVal.replace(/\D/g, '');
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
  var raw = nip.toLowerCase().trim();
  if (raw === 'sindico' || raw.includes('admin')) return true;
  var n = raw.replace(/\D/g, '');
  if (n.length !== 8) return false;
  var soma = 0;
  for (var i = 0; i < 7; i++) {
    soma += parseInt(n.charAt(i)) * (8 - i);
  }
  var r = soma % 11;
  var dv = 11 - r;
  if (dv === 10 || dv === 11) dv = 0;
  return dv === parseInt(n.charAt(7));
}
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf === '') return false;
  if (cpf.length !== 11) return false;
  if (/^(\d){10}$/.test(cpf)) return false;
  var soma = 0;
  var resto;
  for (var i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = soma * 10 % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (var _i = 1; _i <= 10; _i++) soma = soma + parseInt(cpf.substring(_i - 1, _i)) * (12 - _i);
  resto = soma * 10 % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;
  return true;
}

// Sindico Add Novo Morador
window.salvarMoradorSindico = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(e) {
    var btn, nip, nome, endereco, mockData, _yield$window$_supaba3, data, error, _t4;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          e.preventDefault();
          btn = document.getElementById('btnSalvarSindico');
          nip = document.getElementById('novoMoradorNip').value.replace(/\D/g, '');
          nome = document.getElementById('novoMoradorNome').value;
          endereco = document.getElementById('novoMoradorEndereco').value;
          if (validarNIP(nip)) {
            _context7.n = 1;
            break;
          }
          alert("NIP Inválido!");
          return _context7.a(2);
        case 1:
          if (window._supabase) {
            _context7.n = 2;
            break;
          }
          alert("BD Offline");
          return _context7.a(2);
        case 2:
          btn.innerHTML = 'Salvando...';
          _context7.p = 3;
          mockData = {
            nomeCompleto: nome,
            nomeGuerra: 'N/A', // O sindico não preenche isso no form rápido
            nip: nip,
            endereco: endereco,
            senha: 'marinha123',
            posto: 'N/A'
          };
          _context7.n = 4;
          return window._supabase.from('moradores').select('id').eq('nip', nip);
        case 4:
          _yield$window$_supaba3 = _context7.v;
          data = _yield$window$_supaba3.data;
          error = _yield$window$_supaba3.error;
          if (!(data && data.length > 0)) {
            _context7.n = 5;
            break;
          }
          alert("Este NIP já existe!");
          _context7.n = 7;
          break;
        case 5:
          _context7.n = 6;
          return window._supabase.from('moradores').insert([{
            nip: nip,
            dados: mockData
          }]);
        case 6:
          alert("Morador cadastrado com sucesso! Acesso liberado.");
          document.getElementById('formNovoMoradorSindico').reset();
          document.getElementById('modalNovoMorador').style.display = 'none';
          if (typeof renderMoradores === 'function') renderMoradores();
        case 7:
          _context7.n = 9;
          break;
        case 8:
          _context7.p = 8;
          _t4 = _context7.v;
          alert("Erro no servidor.");
        case 9:
          btn.innerHTML = 'Salvar';
        case 10:
          return _context7.a(2);
      }
    }, _callee7, null, [[3, 8]]);
  }));
  return function (_x8) {
    return _ref7.apply(this, arguments);
  };
}();

// Handle Formulario Meu Cadastro Complete
document.addEventListener('DOMContentLoaded', function () {
  var cadForm = document.getElementById('cadastroForm');
  if (cadForm) {
    cadForm.addEventListener('submit', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(e) {
        var rawCpf, btn, formData, payload, _iterator, _step, _step$value, key, val, currentNip, _yield$window$_supaba4, data, error, oldData, merged, _t5;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              e.preventDefault();
              rawCpf = document.getElementById('cpf').value;
              if (!(rawCpf && rawCpf.trim() !== '')) {
                _context8.n = 1;
                break;
              }
              if (validarCPF(rawCpf)) {
                _context8.n = 1;
                break;
              }
              alert("CPF Inválido. Corrija-o ou deixe em branco.");
              return _context8.a(2);
            case 1:
              btn = document.getElementById('btnSalvarCadastro');
              btn.innerHTML = 'Gravando...';
              btn.disabled = true;
              formData = new FormData(cadForm);
              payload = {};
              _iterator = _createForOfIteratorHelper(formData.entries());
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _step$value = _slicedToArray(_step.value, 2), key = _step$value[0], val = _step$value[1];
                  payload[key] = val;
                }

                // Get Current NIP
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              currentNip = localStorage.getItem('vnt_role');
              if (!(currentNip === 'sindico')) {
                _context8.n = 2;
                break;
              }
              alert("Síndico não usa este cadastro pessoal.");
              btn.innerHTML = 'Salvar / Atualizar Dados';
              btn.disabled = false;
              return _context8.a(2);
            case 2:
              if (window._supabase) {
                _context8.n = 3;
                break;
              }
              alert("Aguarde, sistema off-line");
              return _context8.a(2);
            case 3:
              _context8.p = 3;
              _context8.n = 4;
              return window._supabase.from('moradores').select('*').eq('nip', currentNip);
            case 4:
              _yield$window$_supaba4 = _context8.v;
              data = _yield$window$_supaba4.data;
              error = _yield$window$_supaba4.error;
              if (!(data && data.length > 0)) {
                _context8.n = 6;
                break;
              }
              oldData = data[0].dados || {}; // Merge
              merged = _objectSpread(_objectSpread({}, oldData), payload);
              _context8.n = 5;
              return window._supabase.from('moradores').update({
                dados: merged
              }).eq('nip', currentNip);
            case 5:
              alert("Seus dados foram atualizados com sucesso!");
              _context8.n = 8;
              break;
            case 6:
              // Force create if somehow missing
              payload.senha = 'marinha123';
              _context8.n = 7;
              return window._supabase.from('moradores').insert([{
                nip: currentNip,
                dados: payload
              }]);
            case 7:
              alert("Seus dados foram salvos com sucesso!");
            case 8:
              _context8.n = 10;
              break;
            case 9:
              _context8.p = 9;
              _t5 = _context8.v;
              alert("Falha na rede.");
            case 10:
              btn.innerHTML = 'Salvar / Atualizar Dados';
              btn.disabled = false;
            case 11:
              return _context8.a(2);
          }
        }, _callee8, null, [[3, 9]]);
      }));
      return function (_x9) {
        return _ref8.apply(this, arguments);
      };
    }());
  }
});
window.imprimirFichaCadastro = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
  var nipTarget,
    dados,
    _yield$window$_supaba5,
    data,
    safeGet,
    defBool,
    html,
    opt,
    container,
    printWindow,
    _args9 = arguments;
  return _regenerator().w(function (_context9) {
    while (1) switch (_context9.n) {
      case 0:
        nipTarget = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : null;
        dados = {};
        if (!(nipTarget && window._supabase)) {
          _context9.n = 2;
          break;
        }
        _context9.n = 1;
        return window._supabase.from('moradores').select('dados').eq('nip', nipTarget);
      case 1:
        _yield$window$_supaba5 = _context9.v;
        data = _yield$window$_supaba5.data;
        if (data && data.length > 0) {
          dados = data[0].dados || {};
        }
      case 2:
        // Safely get properties
        safeGet = function safeGet(key) {
          return dados[key] ? String(dados[key]).toUpperCase() : '';
        };
        defBool = function defBool(key, expected) {
          return dados[key] === expected ? '( X )' : '(   )';
        };
        html = "\n    <!DOCTYPE html>\n    <html lang=\"pt-BR\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title>Ficha de Cadastro - Vila Naval</title>\n        <style>\n            body { font-family: 'Arial', sans-serif; color: #000; line-height: 1.4; margin:0; padding:20px; }\n            .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }\n            .header img { max-height: 80px; }\n            .header h1 { font-size: 16pt; margin: 5px 0 0 0; text-transform: uppercase; }\n            h2 { font-size: 12pt; background-color: #f0f0f0; border: 1px solid #000; padding: 5px; margin-top: 20px; }\n            .row { display: flex; flex-wrap: wrap; margin-bottom: 10px; }\n            .field { flex: 1; padding: 0 5px; }\n            .field-label { font-weight: bold; font-size: 9pt; }\n            .field-value { border-bottom: 1px solid #000; padding: 3px 0; min-height: 20px; font-size: 11pt; text-transform: uppercase; }\n            .box { border: 1px solid #000; padding: 10px; margin-bottom: 10px; }\n            .obs { font-size: 8pt; font-style: italic; margin-top: 30px; text-align: justify;}\n            \n            .signature { margin-top: 50px; text-align: center; width: 100%; display: flex; justify-content: space-around;}\n            .sig-line { border-top: 1px solid #000; width: 40%; padding-top: 5px; font-size: 10pt; }\n        </style>\n    </head>\n    <body onload=\"window.print(); window.onafterprint = function(){ window.close(); }\">\n        <div class=\"header\">\n            <!-- You can inject the literal encoded logo here or let it be text -->\n            <h1>MARINHA DO BRASIL</h1>\n            <h2>Vila Naval de Tabatinga (APVNT) - Ficha de Cadastro/Atualiza\xE7\xE3o</h2>\n        </div>\n        \n        <h2>DADOS DO PERMISSION\xC1RIO (TITULAR)</h2>\n        <div class=\"box\">\n            <div class=\"row\">\n                <div class=\"field\" style=\"flex: 2;\"><div class=\"field-label\">NOME COMPLETO:</div><div class=\"field-value\">".concat(safeGet('nomeCompleto'), "</div></div>\n                <div class=\"field\" style=\"flex: 1;\"><div class=\"field-label\">POSTO/GRADUA\xC7\xC3O:</div><div class=\"field-value\">").concat(safeGet('posto'), "</div></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"field\"><div class=\"field-label\">NIP:</div><div class=\"field-value\">").concat(safeGet('nip'), "</div></div>\n                <div class=\"field\"><div class=\"field-label\">CPF:</div><div class=\"field-value\">").concat(safeGet('cpf'), "</div></div>\n                <div class=\"field\"><div class=\"field-label\">DATA NASCIMENTO:</div><div class=\"field-value\">").concat(safeGet('dataNascimentoTitular'), "</div></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"field\" style=\"flex: 1;\"><div class=\"field-label\">ENDERE\xC7O NA APVNT (PNR):</div><div class=\"field-value\">").concat(safeGet('endereco'), "</div></div>\n            </div>\n        </div>\n        \n        <h2>DADOS DOS DEPENDENTES / AGREGADOS</h2>\n        <div class=\"box\">\n            <div class=\"row\">\n                <div class=\"field\" style=\"flex: 2;\"><div class=\"field-label\">1. NOME DO DEPENDENTE:</div><div class=\"field-value\">").concat(safeGet('nomeDependente1'), "</div></div>\n                <div class=\"field\"><div class=\"field-label\">GRAU DE PARENTESCO:</div><div class=\"field-value\">").concat(safeGet('grauParentesco'), "</div></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"field\"><div class=\"field-label\">TELEFONE:</div><div class=\"field-value\">").concat(safeGet('telefone'), "</div></div>\n                <div class=\"field\"><div class=\"field-label\">DATA DE NASCIMENTO:</div><div class=\"field-value\">").concat(safeGet('dataNascimento'), "</div></div>\n            </div>\n            <div class=\"row mt-2\">\n                <div class=\"field\"><div class=\"field-label\">OUTROS DEPENDENTES:</div><div class=\"field-value\" style=\"min-height: 40px;\">").concat(safeGet('outrosDependentes'), "</div></div>\n            </div>\n        </div>\n        \n        <h2>ANIMAIS DE ESTIMA\xC7\xC3O NO PNR</h2>\n        <div class=\"box\">\n            <div class=\"row\">\n                <div class=\"field\"><div class=\"field-label\">POSSUI ANIMAL?</div><div style=\"font-size:11pt; padding:5px 0;\"> ").concat(defBool('possuiAnimal', 'Sim'), " SIM &nbsp;&nbsp; ").concat(defBool('possuiAnimal', 'Não'), " N\xC3O</div></div>\n                <div class=\"field\"><div class=\"field-label\">ESP\xC9CIE:</div><div class=\"field-value\">").concat(safeGet('especie'), "</div></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"field\" style=\"flex: 2;\"><div class=\"field-label\">NOME DO ANIMAL:</div><div class=\"field-value\">").concat(safeGet('nomeAnimal'), "</div></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"field\"><div class=\"field-label\">VACINAS EM DIA?</div><div style=\"font-size:11pt; padding:5px 0;\"> ").concat(defBool('vacinacao', 'Em dia'), " SIM &nbsp;&nbsp; ").concat(defBool('vacinacao', 'Pendente'), " N\xC3O </div></div>\n            </div>\n        </div>\n        \n        <p class=\"obs\">\n            Atesto sob as penas da lei e dos regulamentos militares a veracidade das informa\xE7\xF5es ora prestadas, e comprometo-me a informar \xE0 Prefeitura da Vila Naval (Sistema APVNT) quaisquer atualiza\xE7\xF5es ocorridas.\n        </p>\n        \n        <div class=\"signature\">\n            <div class=\"sig-line\">Local e Data</div>\n            <div class=\"sig-line\">Assinatura do Permission\xE1rio</div>\n        </div>\n    </body>\n    </html>\n    ");
        if (!(typeof html2pdf !== 'undefined')) {
          _context9.n = 3;
          break;
        }
        opt = {
          margin: 10,
          filename: 'ficha_cadastro_' + (nipTarget || 'novo') + '.pdf',
          image: {
            type: 'jpeg',
            quality: 0.98
          },
          html2canvas: {
            scale: 2
          },
          jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
          }
        }; // Create invisible container to render
        container = document.createElement('div');
        container.innerHTML = html;
        container.style.position = 'absolute';
        container.style.left = '-9999px';
        container.style.width = '210mm'; // A4 width slightly less
        container.style.backgroundColor = 'white';
        document.body.appendChild(container);
        html2pdf().set(opt).from(container).save().then(function () {
          document.body.removeChild(container);
        });
        _context9.n = 5;
        break;
      case 3:
        printWindow = window.open('', '_blank');
        if (printWindow) {
          _context9.n = 4;
          break;
        }
        return _context9.a(2, alert('Autorize popups neste site para gerar o documento.'));
      case 4:
        printWindow.document.write(html);
        printWindow.document.close();
      case 5:
        return _context9.a(2);
    }
  }, _callee9);
}));


// Lógica de Estatísticas do Dashboard (Dinâmico)
window.carregarEstatisticasDashboard = async function() {
    try {
        if (!window._supabase) return;
        
        let ocupadas = 0;
        let totalValidos = 0;
        const totalCasas = 37; // Total PNRs

        const { data: moradores, error } = await window._supabase.from('moradores').select('dados');
        if (!error && moradores) {
            moradores.forEach(m => {
                // Filtramos "sindico" e "sistema" exigindo um endereço válido preenchido
                if (m.dados && m.dados.dadosPessoais && m.dados.dadosPessoais.endereco) {
                    totalValidos++;
                    ocupadas++;
                }
            });
        }
        
        let totalReservasAtivas = 0;
        try {
            const reservasRaw = localStorage.getItem('vnt_reservas');
            if (reservasRaw) {
                const reservasArr = JSON.parse(reservasRaw);
                const hoje = new Date().toISOString().split('T')[0];
                totalReservasAtivas = reservasArr.filter(r => r.data >= hoje && (r.status === 'Confirmada' || r.status === 'Pendente')).length;
            }
        } catch(e) {}

        const elTotal = document.getElementById('statTotalMoradores');
        const elCasas = document.getElementById('statCasasOcupadas');
        const elReser = document.getElementById('statReservas');

        if (elTotal) elTotal.innerText = totalValidos;
        if (elCasas) elCasas.innerText = Math.round((ocupadas / totalCasas) * 100) + '%';
        if (elReser) elReser.innerText = totalReservasAtivas;

    } catch(e) {
        console.error("Erro ao carregar estatísticas do dashboard:", e);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Aguarda leve delay para garantir Supabase JS load
    setTimeout(window.carregarEstatisticasDashboard, 500);
});

// ====== EDIÇÃO DE MORADORES PELO SÍNDICO ====== //
window.abrirModalEditarMorador = async function(nip) {
    if (!nip) { alert("Erro: NIP não informado."); return; }
    let moradores = [];
    if (window._supabase) {
        let { data } = await window._supabase.from('moradores').select('dados').eq('nip', nip);
        if (data && data.length > 0) moradores = data.map(d => d.dados);
    }
    if (moradores.length === 0) {
        moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
        moradores = moradores.filter(m => m.dadosPessoais && m.dadosPessoais.nip === nip);
    }
    if (moradores.length === 0) { alert("Morador não encontrado!"); return; }
    const dados = moradores[0];
    document.getElementById('formEditarMoradorSindico').dataset.dadosOriginais = JSON.stringify(dados);
    
    // 1. DADOS PESSOAIS
    const p = dados.dadosPessoais || {};
    document.getElementById('editMoradorNip').value = p.nip || '';
    document.getElementById('editMoradorPosto').value = p.posto || '';
    document.getElementById('editMoradorNome').value = p.nomeCompleto || '';
    document.getElementById('editMoradorNomeGuerra').value = p.nomeGuerra || '';
    document.getElementById('editMoradorNasc').value = p.dataNascimentoTitular || '';
    document.getElementById('editMoradorCpf').value = p.cpf || '';
    document.getElementById('editMoradorEndereco').value = p.endereco || p.enderecoPnr || '';

    // 2. DEPENDENTES
    const d = dados.dependentes || {};
    document.getElementById('editDepNome').value = d.nomeDependente1 || '';
    document.getElementById('editDepParentesco').value = d.grauParentesco || '';
    document.getElementById('editDepTel').value = d.telefone || '';
    document.getElementById('editDepOutros').value = d.outrosDependentes || '';

    // 3. ANIMAIS
    const a = dados.animais || {};
    document.getElementById('editMoradorPossuiAnimal').value = a.possuiAnimal === 'Sim' ? 'Sim' : 'Não';
    document.getElementById('editAnimalEspecie').value = a.especie || '';
    document.getElementById('editAnimalNome').value = a.nomeAnimal || '';
    document.getElementById('editAnimalVacinado').value = a.vacinacao === 'Sim' ? 'Sim' : 'Não';

    // 4. STATUS
    document.getElementById('editMoradorStatus').value = dados.statusVerificacao || 'Pendente';

    document.getElementById('modalEditarMorador').style.display = 'flex';
};

window.salvarEdicaoMorador = async function(e) {
    e.preventDefault();
    const btn = document.getElementById('btnSalvarEdicaoMorador');
    btn.innerHTML = '⏳ Salvando...'; btn.disabled = true;
    try {
        const nip = document.getElementById('editMoradorNip').value;
        const formStr = document.getElementById('formEditarMoradorSindico').dataset.dadosOriginais;
        if (!nip || !formStr) throw new Error("Dados incompletos");
        let dadosEdit = JSON.parse(formStr);
        
        // 1. DADOS PESSOAIS
        dadosEdit.dadosPessoais.posto = document.getElementById('editMoradorPosto').value;
        dadosEdit.dadosPessoais.nomeCompleto = document.getElementById('editMoradorNome').value;
        dadosEdit.dadosPessoais.nomeGuerra = document.getElementById('editMoradorNomeGuerra').value;
        dadosEdit.dadosPessoais.dataNascimentoTitular = document.getElementById('editMoradorNasc').value;
        dadosEdit.dadosPessoais.cpf = document.getElementById('editMoradorCpf').value;
        
        const endereco = document.getElementById('editMoradorEndereco').value;
        const enderecoAntigo = dadosEdit.dadosPessoais.endereco || dadosEdit.dadosPessoais.enderecoPnr;
        dadosEdit.dadosPessoais.endereco = endereco;
        dadosEdit.dadosPessoais.enderecoPnr = endereco;

        // 2. DEPENDENTES
        if (!dadosEdit.dependentes) dadosEdit.dependentes = {};
        dadosEdit.dependentes.nomeDependente1 = document.getElementById('editDepNome').value || 'Não informado';
        dadosEdit.dependentes.grauParentesco = document.getElementById('editDepParentesco').value || 'Não informado';
        dadosEdit.dependentes.telefone = document.getElementById('editDepTel').value || 'Não informado';
        dadosEdit.dependentes.outrosDependentes = document.getElementById('editDepOutros').value || 'Não informado';

        // 3. ANIMAIS
        if (!dadosEdit.animais) dadosEdit.animais = {};
        dadosEdit.animais.possuiAnimal = document.getElementById('editMoradorPossuiAnimal').value;
        dadosEdit.animais.especie = document.getElementById('editAnimalEspecie').value || 'Não informado';
        dadosEdit.animais.nomeAnimal = document.getElementById('editAnimalNome').value || 'Não informado';
        dadosEdit.animais.vacinacao = document.getElementById('editAnimalVacinado').value;

        // 4. STATUS
        dadosEdit.statusVerificacao = document.getElementById('editMoradorStatus').value;

        // Histórico de mudança de PNR
        if (endereco && endereco !== enderecoAntigo) {
            if (enderecoAntigo) await window.registrarHistoricoOcupacao(enderecoAntigo, nip, dadosEdit.dadosPessoais.nomeCompleto, 'saida');
            await window.registrarHistoricoOcupacao(endereco, nip, dadosEdit.dadosPessoais.nomeCompleto, 'entrada');
        }
        if (window._supabase) {
            const cleanNip = nip.toString().replace(/\D/g, '');
            const { error } = await window._supabase.from('moradores').update({ dados: dadosEdit }).eq('nip', cleanNip);
            if (error) throw error;
        }
        let lblMoradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
        const idx = lblMoradores.findIndex(m => m.dadosPessoais && m.dadosPessoais.nip === nip);
        if (idx > -1) lblMoradores[idx] = dadosEdit; else lblMoradores.push(dadosEdit);
        localStorage.setItem('vnt_moradores', JSON.stringify(lblMoradores));
        document.getElementById('modalEditarMorador').style.display = 'none';
        setTimeout(() => alert('Dados atualizados com sucesso!'), 100);
        if (typeof renderMoradores === 'function') await renderMoradores();
    } catch (err) {
        alert("Ocorreu um erro ao salvar. Verifique o console.");
        console.error(err);
    } finally {
        btn.innerHTML = 'Salvar Alterações'; btn.disabled = false;
    }
};

// ====== HISTÓRICO DE PNR E OCORRÊNCIAS ====== //
window.registrarHistoricoOcupacao = async function(pnr, nip, nome, tipo) {
    try {
        const dataAtual = new Date().toISOString().split('T')[0];
        if (tipo === 'entrada') {
            const reg = { pnr, nip, nome, data_entrada: dataAtual, data_saida: null };
            if (window._supabase) await window._supabase.from('pnr_history').insert([reg]);
            let h = JSON.parse(localStorage.getItem('vnt_pnr_history')) || [];
            h.push({ ...reg, id: Date.now().toString() });
            localStorage.setItem('vnt_pnr_history', JSON.stringify(h));
        } else if (tipo === 'saida') {
            if (window._supabase) {
                const { data } = await window._supabase.from('pnr_history').select('*').eq('pnr', pnr).eq('nip', nip).is('data_saida', null).order('data_entrada', { ascending: false }).limit(1);
                if (data && data.length > 0) await window._supabase.from('pnr_history').update({ data_saida: dataAtual }).eq('id', data[0].id);
            }
            let h = JSON.parse(localStorage.getItem('vnt_pnr_history')) || [];
            for (let i = h.length - 1; i >= 0; i--) {
                if (h[i].pnr === pnr && h[i].nip === nip && !h[i].data_saida) { h[i].data_saida = dataAtual; break; }
            }
            localStorage.setItem('vnt_pnr_history', JSON.stringify(h));
        }
    } catch (err) { console.error('Erro ao registrar histórico:', err); }
};

window.showHistTab = function(tab) {
    document.getElementById('tabOcupacao').style.display = tab === 'ocupacao' ? 'block' : 'none';
    document.getElementById('tabOcorrencias').style.display = tab === 'ocorrencias' ? 'block' : 'none';
    document.getElementById('btnTabOcupacao').className = tab === 'ocupacao' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline';
    document.getElementById('btnTabOcorrencias').className = tab === 'ocorrencias' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline';
};

window.carregarHistoricoPnr = async function(pnr) {
    const listOcup = document.getElementById('listHistOcupacao');
    const listOcorr = document.getElementById('listHistOcorrencias');
    listOcup.innerHTML = '<p>Carregando...</p>';
    listOcorr.innerHTML = '<p>Carregando...</p>';
    let histO = [], histI = [];
    if (window._supabase) {
        const { data: d1 } = await window._supabase.from('pnr_history').select('*').eq('pnr', pnr).order('data_entrada', { ascending: false });
        if (d1) histO = d1;
        const { data: d2 } = await window._supabase.from('interaction_history').select('*').eq('pnr', pnr).order('data_ocorrencia', { ascending: false });
        if (d2) histI = d2;
    } else {
        histO = (JSON.parse(localStorage.getItem('vnt_pnr_history')) || []).filter(h => h.pnr === pnr);
        histI = (JSON.parse(localStorage.getItem('vnt_interaction_history')) || []).filter(h => h.pnr === pnr);
    }
    listOcup.innerHTML = histO.length === 0 ? '<p class="text-muted">Nenhum registro de ocupação anterior.</p>' :
        histO.map(h => `<div style="border-left:3px solid var(--primary-color);padding-left:10px;margin-bottom:15px;"><p style="margin:0;font-weight:600;">${h.nome} (NIP: ${h.nip})</p><p style="margin:0;font-size:0.85rem;color:var(--text-muted);">Entrada: ${h.data_entrada ? new Date(h.data_entrada).toLocaleDateString('pt-BR',{timeZone:'UTC'}) : '-'} | Saída: ${h.data_saida ? new Date(h.data_saida).toLocaleDateString('pt-BR',{timeZone:'UTC'}) : 'Atual'}</p></div>`).join('');
    listOcorr.innerHTML = histI.length === 0 ? '<p class="text-muted">Nenhuma ocorrência registrada.</p>' :
        histI.map(h => `<div style="background:#fff;padding:10px;border-radius:8px;border:1px solid #e2e8f0;margin-bottom:10px;"><div style="display:flex;justify-content:space-between;margin-bottom:5px;"><strong>${h.motivo}</strong><span style="font-size:0.8rem;color:var(--text-muted);">${h.data_ocorrencia ? new Date(h.data_ocorrencia).toLocaleDateString('pt-BR',{timeZone:'UTC'}) : '-'}</span></div><p style="margin:0 0 5px 0;font-size:0.9rem;"><strong>Providência:</strong> ${h.providencia}</p>${h.observacao ? `<p style="margin:0;font-size:0.85rem;font-style:italic;color:#666;">"${h.observacao}"</p>` : ''}</div>`).join('');
};

window.abrirModalHistorico = async function(pnr) {
    document.getElementById('histPnrTitle').textContent = pnr;
    document.getElementById('histOcorrenciaPnr').value = pnr;
    let moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
    if (window._supabase) {
        let { data } = await window._supabase.from('moradores').select('dados');
        if (data && data.length > 0) moradores = data.map(d => d.dados);
    }
    const moradorAtual = moradores.find(m => m.dadosPessoais && (m.dadosPessoais.endereco === pnr || m.dadosPessoais.enderecoPnr === pnr));
    document.getElementById('histOcorrenciaNip').value = moradorAtual ? moradorAtual.dadosPessoais.nip : '';
    document.getElementById('formNovaOcorrencia').reset();
    document.getElementById('novaOcData').valueAsDate = new Date();
    window.showHistTab('ocupacao');
    document.getElementById('modalHistorico').style.display = 'flex';
    await window.carregarHistoricoPnr(pnr);
};

window.salvarOcorrencia = async function(e) {
    e.preventDefault();
    const btn = document.getElementById('btnSalvarOcorrencia');
    btn.innerHTML = 'Salvando...'; btn.disabled = true;
    try {
        const pnr = document.getElementById('histOcorrenciaPnr').value;
        const nip = document.getElementById('histOcorrenciaNip').value;
        const oc = {
            pnr, nip,
            data_ocorrencia: document.getElementById('novaOcData').value,
            motivo: document.getElementById('novaOcMotivo').value,
            providencia: document.getElementById('novaOcProvidencia').value,
            observacao: document.getElementById('novaOcObs').value
        };
        if (window._supabase) await window._supabase.from('interaction_history').insert([oc]);
        let h = JSON.parse(localStorage.getItem('vnt_interaction_history')) || [];
        h.push({ ...oc, id: Date.now().toString() });
        localStorage.setItem('vnt_interaction_history', JSON.stringify(h));
        document.getElementById('formNovaOcorrencia').reset();
        await window.carregarHistoricoPnr(pnr);
        alert('Ocorrência salva com sucesso!');
    } catch (err) {
        console.error(err); alert('Erro ao salvar ocorrência.');
    } finally {
        btn.innerHTML = 'Salvar Registro'; btn.disabled = false;
    }
};

window.autenticarMorador = async function(nip) {
    if (!confirm(`Confirmar verificação do NIP ${nip}?`)) return;
    try {
        if (!window._supabase) { alert("BD offline"); return; }
        const cleanNip = nip.toString().replace(/\D/g, '');
        let { data } = await window._supabase.from('moradores').select('dados').eq('nip', cleanNip);
        if (data && data.length > 0) {
            let dados = data[0].dados;
            dados.statusVerificacao = 'Verificado';
            await window._supabase.from('moradores').update({ dados }).eq('nip', cleanNip);
            setTimeout(() => alert("Cadastro verificado!"), 100);
            if (typeof renderMoradores === 'function') renderMoradores();
            if (typeof carregarListaMoradores === 'function') carregarListaMoradores();
        }
    } catch(e) { alert("Erro: " + e.message); }
};

window.apagarMorador = async function(nip) {
    let confirmNum = Math.floor(1000 + Math.random() * 9000);
    let pass = prompt(`EXCLUSÃO de NIP: ${nip}\n\nDigite o número para confirmar: ${confirmNum}`);
    if (pass !== confirmNum.toString()) { alert("Cancelado: número incorreto."); return; }
    try {
        if (!window._supabase) { alert("BD offline"); return; }
        const cleanNip = nip.toString().replace(/\D/g, '');
        let { data } = await window._supabase.from('moradores').select('dados').eq('nip', cleanNip);
        if (data && data.length > 0) {
            let pnr = data[0].dados.dadosPessoais.endereco || data[0].dados.dadosPessoais.enderecoPnr;
            if (pnr) await window.registrarHistoricoOcupacao(pnr, cleanNip, data[0].dados.dadosPessoais.nomeCompleto, 'saida');
        }
        await window._supabase.from('moradores').delete().eq('nip', cleanNip);
        setTimeout(() => alert("Excluído com sucesso!"), 100);
        if (typeof renderMoradores === 'function') renderMoradores();
        if (typeof carregarListaMoradores === 'function') carregarListaMoradores();
    } catch(e) { alert("Erro: " + e.message); }
};

// ====== LISTA DE MORADORES COMPLETA ====== //
window.carregarListaMoradores = async function() {
    const tableBody = document.getElementById('listaMoradoresBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '<tr><td colspan="7" style="padding:20px; text-align:center;">🔍 Carregando dados...</td></tr>';
    
    let moradores = [];
    try {
        if (window._supabase) {
            const { data, error } = await window._supabase.from('moradores').select('dados');
            if (data) {
                moradores = data.filter(d => d.dados && d.dados.dadosPessoais && d.dados.dadosPessoais.nip !== 'sistema').map(d => d.dados);
            }
        }
        
        if (moradores.length === 0) {
            moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
            moradores = moradores.filter(m => m.dadosPessoais && m.dadosPessoais.nip !== 'sistema');
        }
        
        // Guardar para busca offline
        window._cacheMoradores = moradores;
        renderizarTabelaMoradores(moradores);
        
    } catch (err) {
        console.error("Erro ao carregar lista de moradores:", err);
        tableBody.innerHTML = '<tr><td colspan="7" style="padding:20px; text-align:center; color:red;">Erro ao carregar dados.</td></tr>';
    }
};

function renderizarTabelaMoradores(lista) {
    const tableBody = document.getElementById('listaMoradoresBody');
    if (lista.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" style="padding:20px; text-align:center; color:#718096;">Nenhum morador encontrado.</td></tr>';
        return;
    }
    
    tableBody.innerHTML = lista.map(m => {
        const d = m.dadosPessoais;
        const pnr = d.endereco || d.enderecoPnr || '-';
        const animal = m.animais && m.animais.possuiAnimal === 'Sim' ? m.animais.especie : 'Não';
        const status = m.statusVerificacao || 'Pendente';
        const statusColor = status === 'Verificado' ? '#48bb78' : '#ed8936';
        
        return `
            <tr style="border-bottom: 1px solid #edf2f7; hover: background-color: #f7fafc;">
                <td style="padding:12px;">${d.posto}</td>
                <td style="padding:12px; font-weight:600;">${d.nomeCompleto}</td>
                <td style="padding:12px;">${d.nip}</td>
                <td style="padding:12px;">${pnr}</td>
                <td style="padding:12px;">${animal}</td>
                <td style="padding:12px;">
                    <span class="badge" 
                          style="background:${statusColor}22; color:${statusColor}; border:1px solid ${statusColor}44; cursor:${status !== 'Verificado' ? 'pointer' : 'default'};"
                          onclick="${status !== 'Verificado' ? `autenticarMorador('${d.nip}')` : ''}"
                          title="${status !== 'Verificado' ? 'Clique para liberar acesso deste morador' : 'Cadastro já verificado'}">
                        ${status}
                    </span>
                </td>
                <td style="padding:12px;">
                    <div style="display:flex; gap:5px;">
                        ${status !== 'Verificado' ? `<button class="btn btn-sm" style="background:#48bb78; color:white; border:none;" onclick="autenticarMorador('${d.nip}')" title="Verificar NIP"><i class="ri-check-double-line"></i> Liberar</button>` : ''}
                        <button class="btn btn-sm btn-outline" onclick="abrirModalEditarMorador('${d.nip}')" title="Editar"><i class="ri-pencil-line"></i></button>
                        <button class="btn btn-sm btn-outline" onclick="abrirModalHistorico('${pnr}')" title="Histórico"><i class="ri-history-line"></i></button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

window.filtrarListaMoradores = function() {
    const termo = document.getElementById('buscaMorador').value.toLowerCase();
    if (!window._cacheMoradores) return;
    
    const filtrados = window._cacheMoradores.filter(m => {
        const d = m.dadosPessoais;
        return d.nomeCompleto.toLowerCase().includes(termo) || 
               d.nip.toLowerCase().includes(termo) || 
               (d.endereco || d.enderecoPnr || '').toLowerCase().includes(termo);
    });
    
    renderizarTabelaMoradores(filtrados);
};

window.togglePwd = function(id, iconId) {
    var input = document.getElementById(id);
    var icon = document.getElementById(iconId);
    if (!input || !icon) return;
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('ri-eye-line');
        icon.classList.add('ri-eye-off-line');
    } else {
        input.type = 'password';
        icon.classList.remove('ri-eye-off-line');
        icon.classList.add('ri-eye-line');
    }
};

