"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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

// --- Security Helpers ---
function hashPassword(_x) {
  return _hashPassword.apply(this, arguments);
} // --- Supabase Storage Wrapper ---
function _hashPassword() {
  _hashPassword = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(password) {
    var msgUint8, hashBuffer, hashArray, hashHex;
    return _regenerator().w(function (_context20) {
      while (1) switch (_context20.n) {
        case 0:
          if (password) {
            _context20.n = 1;
            break;
          }
          return _context20.a(2, '');
        case 1:
          if (!(password.length === 64 && /^[0-9a-f]+$/.test(password))) {
            _context20.n = 2;
            break;
          }
          return _context20.a(2, password);
        case 2:
          msgUint8 = new TextEncoder().encode(password);
          _context20.n = 3;
          return crypto.subtle.digest('SHA-256', msgUint8);
        case 3:
          hashBuffer = _context20.v;
          hashArray = Array.from(new Uint8Array(hashBuffer));
          hashHex = hashArray.map(function (b) {
            return b.toString(16).padStart(2, '0');
          }).join('');
          return _context20.a(2, hashHex);
      }
    }, _callee20);
  }));
  return _hashPassword.apply(this, arguments);
}
function getStorageData(_x2) {
  return _getStorageData.apply(this, arguments);
}
function _getStorageData() {
  _getStorageData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(key) {
    var _yield$window$_supaba15, data, _t14;
    return _regenerator().w(function (_context21) {
      while (1) switch (_context21.p = _context21.n) {
        case 0:
          if (window._supabase) {
            _context21.n = 1;
            break;
          }
          return _context21.a(2, JSON.parse(localStorage.getItem(key)) || null);
        case 1:
          _context21.p = 1;
          _context21.n = 2;
          return window._supabase.from('moradores').select('dados').eq('nip', 'sistema');
        case 2:
          _yield$window$_supaba15 = _context21.v;
          data = _yield$window$_supaba15.data;
          if (!(data && data.length > 0 && data[0].dados && data[0].dados[key])) {
            _context21.n = 3;
            break;
          }
          return _context21.a(2, data[0].dados[key]);
        case 3:
          _context21.n = 5;
          break;
        case 4:
          _context21.p = 4;
          _t14 = _context21.v;
        case 5:
          return _context21.a(2, JSON.parse(localStorage.getItem(key)) || null);
      }
    }, _callee21, null, [[1, 4]]);
  }));
  return _getStorageData.apply(this, arguments);
}
function setStorageData(_x3, _x4) {
  return _setStorageData.apply(this, arguments);
} // ---------------------------------
function _setStorageData() {
  _setStorageData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(key, value) {
    var _yield$window$_supaba16, data, _dados3, res, _t15;
    return _regenerator().w(function (_context22) {
      while (1) switch (_context22.p = _context22.n) {
        case 0:
          localStorage.setItem(key, JSON.stringify(value));
          if (window._supabase) {
            _context22.n = 1;
            break;
          }
          return _context22.a(2);
        case 1:
          _context22.p = 1;
          _context22.n = 2;
          return window._supabase.from('moradores').select('dados').eq('nip', 'sistema');
        case 2:
          _yield$window$_supaba16 = _context22.v;
          data = _yield$window$_supaba16.data;
          _dados3 = {};
          if (data && data.length > 0 && data[0].dados) {
            _dados3 = data[0].dados;
          }
          _dados3[key] = value;
          _context22.n = 3;
          return window._supabase.from('moradores').select('id').eq('nip', 'sistema');
        case 3:
          res = _context22.v;
          if (!(res.data && res.data.length > 0)) {
            _context22.n = 5;
            break;
          }
          _context22.n = 4;
          return window._supabase.from('moradores').update({
            dados: _dados3
          }).eq('nip', 'sistema');
        case 4:
          _context22.n = 6;
          break;
        case 5:
          _context22.n = 6;
          return window._supabase.from('moradores').insert([{
            nip: 'sistema',
            dados: _dados3
          }]);
        case 6:
          _context22.n = 8;
          break;
        case 7:
          _context22.p = 7;
          _t15 = _context22.v;
        case 8:
          return _context22.a(2);
      }
    }, _callee22, null, [[1, 7]]);
  }));
  return _setStorageData.apply(this, arguments);
}
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
  var currentLoc, isLoginScreen, currentRole, loginForm, renderChamados, role, user, navChamados, lblMenuCadastro, btnMuralHomeAcao, btnReservaHomeAcao, logoutBtn, navItems, tabPanes, pageTitle, titleMap, chamadosKey, chamados, formNovoChamado, modalNovoChamado, btnAbrirChamado, _t3;
  return _regenerator().w(function (_context4) {
    while (1) switch (_context4.n) {
      case 0:
        // ENFORCE LOGIN
        currentLoc = window.location.pathname;
        isLoginScreen = currentLoc.includes('index') || currentLoc.endsWith('/');
        currentRole = localStorage.getItem('vnt_role');
        if (!(!currentRole && !isLoginScreen && !currentLoc.includes('limpar_banco'))) {
          _context4.n = 1;
          break;
        }
        window.location.href = 'index.html';
        return _context4.a(2);
      case 1:
        // Login com Supabase + Validação de Senha + NIP Masks
        loginForm = document.getElementById('loginForm');
        if (loginForm) {
          loginForm.addEventListener('submit', /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
              var nip, senha, btn, hashedInput, validPwdHash, _yield$window$_supaba, data, error, _yield$window$_supaba2, _data, _error, moradorData, dados, senhaBanco, hashedPadrao, modal, _t, _t2;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    e.preventDefault();
                    nip = document.getElementById('nip').value.toLowerCase().trim();
                    senha = document.getElementById('senha').value.trim();
                    btn = loginForm.querySelector("button[type='submit']");
                    btn.innerHTML = "Verificando...";
                    btn.disabled = true;
                    _context2.p = 1;
                    _context2.n = 2;
                    return hashPassword(senha);
                  case 2:
                    hashedInput = _context2.v;
                    if (!(nip === 'sindico' || nip.includes('admin'))) {
                      _context2.n = 10;
                      break;
                    }
                    _context2.n = 3;
                    return hashPassword('sindico');
                  case 3:
                    validPwdHash = _context2.v;
                    _context2.p = 4;
                    if (!window._supabase) {
                      _context2.n = 6;
                      break;
                    }
                    _context2.n = 5;
                    return window._supabase.from('moradores').select('dados').eq('nip', 'sindico');
                  case 5:
                    _yield$window$_supaba = _context2.v;
                    data = _yield$window$_supaba.data;
                    error = _yield$window$_supaba.error;
                    if (data && data.length > 0 && data[0].dados && data[0].dados.senha) {
                      validPwdHash = data[0].dados.senha.trim();
                    }
                  case 6:
                    _context2.n = 8;
                    break;
                  case 7:
                    _context2.p = 7;
                    _t = _context2.v;
                    console.error("Erro consultando supabase para sindico:", _t);
                  case 8:
                    if (!(hashedInput !== validPwdHash && senha.trim() !== validPwdHash)) {
                      _context2.n = 9;
                      break;
                    }
                    alert("Senha do Síndico Incorreta!");
                    btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                    btn.disabled = false;
                    return _context2.a(2);
                  case 9:
                    localStorage.setItem('vnt_role', 'sindico');
                    localStorage.setItem('vnt_user', 'Síndico');
                    window.location.href = 'dashboard.html';
                    return _context2.a(2);
                  case 10:
                    if (validarNIP(nip)) {
                      _context2.n = 11;
                      break;
                    }
                    alert("NIP Inválido (Regra Módulo 11)! Verifique o Dígito Verificador inserido.");
                    btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                    btn.disabled = false;
                    return _context2.a(2);
                  case 11:
                    if (!window._supabase) {
                      _context2.n = 17;
                      break;
                    }
                    _context2.n = 12;
                    return window._supabase.from('moradores').select('*').eq('nip', nip);
                  case 12:
                    _yield$window$_supaba2 = _context2.v;
                    _data = _yield$window$_supaba2.data;
                    _error = _yield$window$_supaba2.error;
                    if (!(_data && _data.length > 0)) {
                      _context2.n = 15;
                      break;
                    }
                    moradorData = _data[0];
                    dados = moradorData.dados || {};
                    senhaBanco = dados.senha || 'marinha123';
                    _context2.n = 13;
                    return hashPassword('marinha123');
                  case 13:
                    hashedPadrao = _context2.v;
                    if (!(hashedInput !== senhaBanco && senha !== senhaBanco)) {
                      _context2.n = 14;
                      break;
                    }
                    alert("Senha Incorreta!");
                    btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                    btn.disabled = false;
                    return _context2.a(2);
                  case 14:
                    if (senhaBanco === 'marinha123' || senhaBanco === hashedPadrao) {
                      // FORÇA MUDANÇA DE SENHA
                      modal = document.getElementById('modalMudarSenha');
                      if (modal) {
                        modal.style.display = 'flex';
                        document.getElementById('btnSalvarSenha').onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                          var novaSenha, novaSenhaConf, btnSalvar;
                          return _regenerator().w(function (_context) {
                            while (1) switch (_context.n) {
                              case 0:
                                novaSenha = document.getElementById('novaSenha').value;
                                novaSenhaConf = document.getElementById('novaSenhaConf').value;
                                if (!(novaSenha.length < 6)) {
                                  _context.n = 1;
                                  break;
                                }
                                alert("A senha deve ter no mínimo 6 caracteres para ser segura.");
                                return _context.a(2);
                              case 1:
                                if (!(novaSenha !== novaSenhaConf)) {
                                  _context.n = 2;
                                  break;
                                }
                                alert("A confirmação não coincide com a nova senha digitada.");
                                return _context.a(2);
                              case 2:
                                btnSalvar = document.getElementById('btnSalvarSenha');
                                btnSalvar.innerHTML = "Salvando...";
                                btnSalvar.disabled = true;
                                _context.n = 3;
                                return hashPassword(novaSenha);
                              case 3:
                                dados.senha = _context.v;
                                _context.n = 4;
                                return window._supabase.from('moradores').update({
                                  dados: dados
                                }).eq('nip', nip);
                              case 4:
                                localStorage.setItem('vnt_role', nip);
                                localStorage.setItem('vnt_user', nip);
                                window.location.href = 'dashboard.html';
                              case 5:
                                return _context.a(2);
                            }
                          }, _callee);
                        }));
                      }
                    } else {
                      // Login normal
                      localStorage.setItem('vnt_role', nip);
                      localStorage.setItem('vnt_user', nip);
                      window.location.href = 'dashboard.html';
                    }
                    _context2.n = 16;
                    break;
                  case 15:
                    alert("Acesso Negado! NIP não matriculado na Vila Naval. Solicite liberação na administração.");
                    btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                    btn.disabled = false;
                  case 16:
                    _context2.n = 18;
                    break;
                  case 17:
                    alert("Erro grave: Banco de Dados Inacessível.");
                    btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                    btn.disabled = false;
                  case 18:
                    _context2.n = 20;
                    break;
                  case 19:
                    _context2.p = 19;
                    _t2 = _context2.v;
                    console.error("Login Error:", _t2);
                    alert("Ocorreu um erro ao processar seu login. Tente novamente.");
                    btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                    btn.disabled = false;
                  case 20:
                    return _context2.a(2);
                }
              }, _callee2, null, [[4, 7], [1, 19]]);
            }));
            return function (_x5) {
              return _ref2.apply(this, arguments);
            };
          }());
        }

        // Dashboard Initialization
        if (!document.querySelector('.dashboard-bg')) {
          _context4.n = 4;
          break;
        }
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
          navChamados = document.querySelector('[data-target="chamados"]');
          if (navChamados) navChamados.style.display = 'none';
          lblMenuCadastro = document.getElementById('lblMenuCadastro');
          if (lblMenuCadastro) lblMenuCadastro.textContent = 'Cadastro dos Moradores';
          btnMuralHomeAcao = document.getElementById('btnMuralHomeAcao');
          if (btnMuralHomeAcao) btnMuralHomeAcao.textContent = 'Editar Avisos';
          btnReservaHomeAcao = document.getElementById('btnReservaHomeAcao');
          if (btnReservaHomeAcao) btnReservaHomeAcao.textContent = 'Consultar Reservas';
        } else {
          document.getElementById('userRoleDisplay').textContent = 'Permissionário';
        }
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
          'admin-lista': 'Cadastros e Autenticações',
          'admin': 'Administração (Síndico)'
        }; // Chamados Logic
        chamadosKey = 'vnt_chamados';
        _context4.n = 2;
        return getStorageData(chamadosKey);
      case 2:
        _t3 = _context4.v;
        if (_t3) {
          _context4.n = 3;
          break;
        }
        _t3 = [];
      case 3:
        chamados = _t3;
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
            } else if (targetId === 'admin-pnrs' || targetId === 'admin-lista') {
              if (typeof renderMoradores === 'function') setTimeout(function () {
                return renderMoradores();
              }, 100);
            } else if (targetId === 'reservas') {
              if (typeof initCalendar === 'function') {
                setTimeout(initCalendar, 50);
              }
            } else if (targetId === 'relatorio-sindico') {
              if (typeof loadRelatorioMensal === 'function') setTimeout(function () {
                return loadRelatorioMensal();
              }, 50);
            }
          });
        });

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
            setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
              var newChamado;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
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
                  case 1:
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
            if (modalNovoChamado) modalNovoChamado.style.display = 'flex';
          });
        }
      case 4:
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
    return function (_x6) {
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
function submitFormData(_x7) {
  return _submitFormData.apply(this, arguments);
}
function _submitFormData() {
  _submitFormData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(form) {
    var submitBtn, originalText, formData, moradores, _t16;
    return _regenerator().w(function (_context23) {
      while (1) switch (_context23.n) {
        case 0:
          submitBtn = form.querySelector('button[type="submit"]');
          originalText = submitBtn.textContent;
          submitBtn.disabled = true;
          submitBtn.innerHTML = '⏳ Salvando...';
          formData = collectFormData(form); // Save to vnt_moradores
          _context23.n = 1;
          return getStorageData('vnt_moradores');
        case 1:
          _t16 = _context23.v;
          if (_t16) {
            _context23.n = 2;
            break;
          }
          _t16 = [];
        case 2:
          moradores = _t16;
          moradores.push(formData);
          _context23.n = 3;
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
          return _context23.a(2);
      }
    }, _callee23);
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
  _renderMoradores = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24() {
    var isSindico, pnrGrid, moradores, _yield$_supabase$from, data, mapMoradores, ocupadoCount, vagoCount, html, todasPnr, btnOcupado, btnVago, tbLista, sortedMoradores, tbHtml;
    return _regenerator().w(function (_context24) {
      while (1) switch (_context24.n) {
        case 0:
          isSindico = localStorage.getItem('vnt_role') === 'sindico';
          if (isSindico) {
            _context24.n = 1;
            break;
          }
          return _context24.a(2);
        case 1:
          pnrGrid = document.getElementById('pnrGridContainer');
          if (pnrGrid) {
            _context24.n = 2;
            break;
          }
          return _context24.a(2);
        case 2:
          moradores = [];
          if (!_supabase) {
            _context24.n = 4;
            break;
          }
          _context24.n = 3;
          return _supabase.from('moradores').select('dados');
        case 3:
          _yield$_supabase$from = _context24.v;
          data = _yield$_supabase$from.data;
          if (data) moradores = data.map(function (d) {
            return d.dados;
          });
          _context24.n = 5;
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
          btnVago = document.getElementById('badgeOcupado');
          if (btnOcupado) btnOcupado.innerText = 'Ocupado: ' + ocupadoCount;
          if (btnVago) btnVago.innerText = 'Vago (Taxa União): ' + vagoCount;

          // Tabela Administrativa em Lista Detalhada
          tbLista = document.getElementById('listaMoradoresAdmin');
          if (tbLista) {
            sortedMoradores = _toConsumableArray(moradores).sort(function (a, b) {
              var statusA = a.statusVerificacao || 'Pendente';
              var statusB = b.statusVerificacao || 'Pendente';
              if (statusA === statusB) return 0;
              return statusA === 'Pendente' ? -1 : 1;
            });
            tbHtml = sortedMoradores.map(function (m) {
              if (!m || !m.dadosPessoais || !m.dadosPessoais.nip) return '';
              var nipStr = m.dadosPessoais.nip;
              if (nipStr === 'sindico' || nipStr === 'sistema') return '';
              var status = m.statusVerificacao || 'Pendente';
              var statusBadge = status === 'Verificado' ? '<span class="badge" style="background:#c6f6d5; color:#22543d; border: 1px solid #9ae6b4;"><i class="ri-verified-badge-fill"></i> Verificado</span>' : '<span class="badge" style="background:#fefcbf; color:#975a16; border: 1px solid #faf089;"><i class="ri-error-warning-fill"></i> Pendente</span>';
              var strAction = '';
              if (status !== 'Verificado') {
                strAction += "<button class=\"btn btn-sm btn-outline\" title=\"Autenticar Cadastro\" onclick=\"autenticarMorador('".concat(nipStr, "')\"><i class=\"ri-check-double-line\" style=\"color:#38a169;\"></i></button> ");
              }
              strAction += "<button class=\"btn btn-sm btn-outline\" title=\"Editar\" onclick=\"abrirModalEditarMorador('".concat(nipStr, "')\"><i class=\"ri-pencil-line\" style=\"color:#3182ce;\"></i></button> ");
              strAction += "<button class=\"btn btn-sm btn-outline\" title=\"Apagar\" onclick=\"apagarMorador('".concat(nipStr, "')\"><i class=\"ri-delete-bin-line\" style=\"color:#e53e3e;\"></i></button>");
              return "\n            <tr style=\"border-bottom: 1px solid rgba(0,0,0,0.05); transition: background 0.2s;\">\n                <td style=\"padding: 12px; font-family: monospace; font-size: 1.1em; color: var(--primary);\">".concat(nipStr, "</td>\n                <td style=\"padding: 12px;\"><strong>").concat(m.dadosPessoais.posto, "</strong> ").concat(m.dadosPessoais.nomeCompleto, "</td>\n                <td style=\"padding: 12px;\">").concat(m.dadosPessoais.endereco || m.dadosPessoais.enderecoPnr, "</td>\n                <td style=\"padding: 12px;\">").concat(statusBadge, "</td>\n                <td style=\"padding: 12px; text-align: right; white-space: nowrap;\">").concat(strAction, "</td>\n            </tr>\n            ");
            }).join('');
            if (!tbHtml) tbHtml = '<tr><td colspan="5" style="text-align:center; padding: 20px; color:#a0aec0;">Nenhum morador cadastrado.</td></tr>';
            tbLista.innerHTML = tbHtml;
          }
        case 6:
          return _context24.a(2);
      }
    }, _callee24);
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
  _initCalendar = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26() {
    var calendarEl, reservasData;
    return _regenerator().w(function (_context26) {
      while (1) switch (_context26.n) {
        case 0:
          calendarEl = document.getElementById('reservasCalendar');
          if (calendarEl) {
            _context26.n = 1;
            break;
          }
          return _context26.a(2);
        case 1:
          if (calendar) {
            calendar.destroy();
          }
          _context26.n = 2;
          return getStorageData('vnt_reservas');
        case 2:
          reservasData = _context26.v;
          if (_typeof(reservasData) === 'object') reservasData = JSON.stringify(reservasData);
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
              var _events = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(info, successCallback, failureCallback) {
                var reservas, events, _t17;
                return _regenerator().w(function (_context25) {
                  while (1) switch (_context25.n) {
                    case 0:
                      _context25.n = 1;
                      return getStorageData('vnt_reservas');
                    case 1:
                      _t17 = _context25.v;
                      if (_t17) {
                        _context25.n = 2;
                        break;
                      }
                      _t17 = [];
                    case 2:
                      reservas = _t17;
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
                      return _context25.a(2);
                  }
                }, _callee25);
              }));
              function events(_x22, _x23, _x24) {
                return _events.apply(this, arguments);
              }
              return events;
            }(),
            dateClick: function dateClick(info) {
              document.getElementById('reservaData').value = info.dateStr;
            }
          });
          calendar.render();
        case 3:
          return _context26.a(2);
      }
    }, _callee26);
  }));
  return _initCalendar.apply(this, arguments);
}
var formReserva = document.getElementById('formReserva');
if (formReserva) {
  formReserva.addEventListener('submit', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(e) {
      var data, espacoSelect, espaco, horaInicio, horaFim, motivo, reservas, hasConflict, novaReserva, _t4;
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
            _t4 = _context6.v;
            if (_t4) {
              _context6.n = 5;
              break;
            }
            _t4 = [];
          case 5:
            reservas = _t4;
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
    return function (_x8) {
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

// ====== HISTÓRICO DE PNR E OCORRÊNCIAS ====== //
window.showHistTab = function (tab) {
  document.getElementById('tabOcupacao').style.display = tab === 'ocupacao' ? 'block' : 'none';
  document.getElementById('tabOcorrencias').style.display = tab === 'ocorrencias' ? 'block' : 'none';
  document.getElementById('btnTabOcupacao').className = tab === 'ocupacao' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline';
  document.getElementById('btnTabOcorrencias').className = tab === 'ocorrencias' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline';
};
window.carregarHistoricoPnr = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(pnr) {
    var listOcupacao, listOcorrencias, histOcupacao, histOcorrencias, _yield$window$_supaba3, dataOcup, _yield$window$_supaba4, dataOcorr;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          listOcupacao = document.getElementById('listHistOcupacao');
          listOcorrencias = document.getElementById('listHistOcorrencias');
          listOcupacao.innerHTML = '<p>Carregando histórico de ocupação...</p>';
          listOcorrencias.innerHTML = '<p>Carregando ocorrências...</p>';
          histOcupacao = [];
          histOcorrencias = [];
          if (!window._supabase) {
            _context7.n = 3;
            break;
          }
          _context7.n = 1;
          return window._supabase.from('pnr_history').select('*').eq('pnr', pnr).order('data_entrada', {
            ascending: false
          });
        case 1:
          _yield$window$_supaba3 = _context7.v;
          dataOcup = _yield$window$_supaba3.data;
          if (dataOcup) histOcupacao = dataOcup;
          _context7.n = 2;
          return window._supabase.from('interaction_history').select('*').eq('pnr', pnr).order('data_ocorrencia', {
            ascending: false
          });
        case 2:
          _yield$window$_supaba4 = _context7.v;
          dataOcorr = _yield$window$_supaba4.data;
          if (dataOcorr) histOcorrencias = dataOcorr;
          _context7.n = 4;
          break;
        case 3:
          // Fallback localStorage
          histOcupacao = (JSON.parse(localStorage.getItem('vnt_pnr_history')) || []).filter(function (h) {
            return h.pnr === pnr;
          }).sort(function (a, b) {
            return new Date(b.data_entrada) - new Date(a.data_entrada);
          });
          histOcorrencias = (JSON.parse(localStorage.getItem('vnt_interaction_history')) || []).filter(function (h) {
            return h.pnr === pnr;
          }).sort(function (a, b) {
            return new Date(b.data_ocorrencia) - new Date(a.data_ocorrencia);
          });
        case 4:
          // Render Ocupação
          if (histOcupacao.length === 0) {
            listOcupacao.innerHTML = '<p class="text-muted">Nenhum registro de ocupação anterior encontrado.</p>';
          } else {
            listOcupacao.innerHTML = histOcupacao.map(function (h) {
              return "\n            <div style=\"border-left: 3px solid var(--primary-color); padding-left: 10px; margin-bottom: 15px;\">\n                <p style=\"margin:0; font-weight:600;\">".concat(h.nome, " (NIP: ").concat(h.nip, ")</p>\n                <p style=\"margin:0; font-size:0.85rem; color:var(--text-muted);\">\n                    Entrada: ").concat(h.data_entrada ? new Date(h.data_entrada).toLocaleDateString('pt-BR', {
                timeZone: 'UTC'
              }) : '-', "\n                    | Sa\xEDda: ").concat(h.data_saida ? new Date(h.data_saida).toLocaleDateString('pt-BR', {
                timeZone: 'UTC'
              }) : 'Atual', "\n                </p>\n            </div>\n        ");
            }).join('');
          }

          // Render Ocorrencias
          if (histOcorrencias.length === 0) {
            listOcorrencias.innerHTML = '<p class="text-muted">Nenhuma ocorrência registrada.</p>';
          } else {
            listOcorrencias.innerHTML = histOcorrencias.map(function (h) {
              return "\n            <div style=\"background: #fff; padding: 10px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 10px;\">\n                <div style=\"display:flex; justify-content:space-between; margin-bottom:5px;\">\n                    <strong style=\"color:var(--primary-dark);\">".concat(h.motivo, "</strong>\n                    <span style=\"font-size:0.8rem; color:var(--text-muted);\">").concat(h.data_ocorrencia ? new Date(h.data_ocorrencia).toLocaleDateString('pt-BR', {
                timeZone: 'UTC'
              }) : '-', "</span>\n                </div>\n                <p style=\"margin:0 0 5px 0; font-size:0.9rem;\"><strong>Provid\xEAncia:</strong> ").concat(h.providencia, "</p>\n                ").concat(h.observacao ? "<p style=\"margin:0; font-size:0.85rem; font-style:italic; color:#666;\">\"".concat(h.observacao, "\"</p>") : '', "\n            </div>\n        ");
            }).join('');
          }
        case 5:
          return _context7.a(2);
      }
    }, _callee7);
  }));
  return function (_x9) {
    return _ref7.apply(this, arguments);
  };
}();
window.abrirModalHistorico = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(pnr) {
    var currentNip, moradores, _yield$window$_supaba5, data, moradorAtual;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          document.getElementById('histPnrTitle').textContent = pnr;
          document.getElementById('histOcorrenciaPnr').value = pnr;

          // Pre-determine current NIP for the PNR based on local data
          currentNip = '';
          moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
          if (!window._supabase) {
            _context8.n = 2;
            break;
          }
          _context8.n = 1;
          return window._supabase.from('moradores').select('dados');
        case 1:
          _yield$window$_supaba5 = _context8.v;
          data = _yield$window$_supaba5.data;
          if (data && data.length > 0) moradores = data.map(function (d) {
            return d.dados;
          });
        case 2:
          moradorAtual = moradores.find(function (m) {
            return m.dadosPessoais && (m.dadosPessoais.endereco === pnr || m.dadosPessoais.enderecoPnr === pnr);
          });
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
          _context8.n = 3;
          return carregarHistoricoPnr(pnr);
        case 3:
          return _context8.a(2);
      }
    }, _callee8);
  }));
  return function (_x0) {
    return _ref8.apply(this, arguments);
  };
}();
window.salvarOcorrencia = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(e) {
    var btn, pnr, nip, novaOcorrencia, histLocal, _t5;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          e.preventDefault();
          btn = document.getElementById('btnSalvarOcorrencia');
          btn.innerHTML = 'Salvando...';
          btn.disabled = true;
          _context9.p = 1;
          pnr = document.getElementById('histOcorrenciaPnr').value;
          nip = document.getElementById('histOcorrenciaNip').value;
          novaOcorrencia = {
            id: window._supabase ? undefined : Date.now().toString(),
            pnr: pnr,
            nip: nip,
            data_ocorrencia: document.getElementById('novaOcData').value,
            motivo: document.getElementById('novaOcMotivo').value,
            providencia: document.getElementById('novaOcProvidencia').value,
            observacao: document.getElementById('novaOcObs').value
          };
          if (!window._supabase) {
            _context9.n = 2;
            break;
          }
          _context9.n = 2;
          return window._supabase.from('interaction_history').insert([novaOcorrencia]);
        case 2:
          // Simultanemente salva no localStorage
          histLocal = JSON.parse(localStorage.getItem('vnt_interaction_history')) || [];
          if (!novaOcorrencia.id) novaOcorrencia.id = Date.now().toString();
          histLocal.push(novaOcorrencia);
          localStorage.setItem('vnt_interaction_history', JSON.stringify(histLocal));
          document.getElementById('formNovaOcorrencia').reset();
          _context9.n = 3;
          return carregarHistoricoPnr(pnr);
        case 3:
          alert('Ocorrência salva com sucesso!');
          _context9.n = 5;
          break;
        case 4:
          _context9.p = 4;
          _t5 = _context9.v;
          console.error(_t5);
          alert('Erro ao salvar ocorrência.');
        case 5:
          _context9.p = 5;
          btn.innerHTML = 'Salvar Registro';
          btn.disabled = false;
          return _context9.f(5);
        case 6:
          return _context9.a(2);
      }
    }, _callee9, null, [[1, 4, 5, 6]]);
  }));
  return function (_x1) {
    return _ref9.apply(this, arguments);
  };
}();
window.registrarHistoricoOcupacao = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(pnr, nip, nome, tipo) {
    var dataAtual, novoRegistro, histLocal, _yield$window$_supaba6, data, _histLocal, i, _t6;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          dataAtual = new Date().toISOString().split('T')[0];
          if (!(tipo === 'entrada')) {
            _context0.n = 2;
            break;
          }
          novoRegistro = {
            id: window._supabase ? undefined : Date.now().toString(),
            pnr: pnr,
            nip: nip,
            nome: nome,
            data_entrada: dataAtual,
            data_saida: null
          };
          if (!window._supabase) {
            _context0.n = 1;
            break;
          }
          _context0.n = 1;
          return window._supabase.from('pnr_history').insert([novoRegistro]);
        case 1:
          histLocal = JSON.parse(localStorage.getItem('vnt_pnr_history')) || [];
          if (!novoRegistro.id) novoRegistro.id = Date.now().toString();
          histLocal.push(novoRegistro);
          localStorage.setItem('vnt_pnr_history', JSON.stringify(histLocal));
          _context0.n = 8;
          break;
        case 2:
          if (!(tipo === 'saida')) {
            _context0.n = 8;
            break;
          }
          if (!window._supabase) {
            _context0.n = 4;
            break;
          }
          _context0.n = 3;
          return window._supabase.from('pnr_history').select('*').eq('pnr', pnr).eq('nip', nip).is('data_saida', null).order('data_entrada', {
            ascending: false
          }).limit(1);
        case 3:
          _yield$window$_supaba6 = _context0.v;
          data = _yield$window$_supaba6.data;
          if (!(data && data.length > 0)) {
            _context0.n = 4;
            break;
          }
          _context0.n = 4;
          return window._supabase.from('pnr_history').update({
            data_saida: dataAtual
          }).eq('id', data[0].id);
        case 4:
          _histLocal = JSON.parse(localStorage.getItem('vnt_pnr_history')) || []; // Acha o último ativo
          i = _histLocal.length - 1;
        case 5:
          if (!(i >= 0)) {
            _context0.n = 7;
            break;
          }
          if (!(_histLocal[i].pnr === pnr && _histLocal[i].nip === nip && !_histLocal[i].data_saida)) {
            _context0.n = 6;
            break;
          }
          _histLocal[i].data_saida = dataAtual;
          return _context0.a(3, 7);
        case 6:
          i--;
          _context0.n = 5;
          break;
        case 7:
          localStorage.setItem('vnt_pnr_history', JSON.stringify(_histLocal));
        case 8:
          _context0.n = 10;
          break;
        case 9:
          _context0.p = 9;
          _t6 = _context0.v;
          console.error('Erro ao registrar histórico de ocupação:', _t6);
        case 10:
          return _context0.a(2);
      }
    }, _callee0, null, [[0, 9]]);
  }));
  return function (_x10, _x11, _x12, _x13) {
    return _ref0.apply(this, arguments);
  };
}();

// ====== EDIÇÃO DE MORADORES PELO SÍNDICO ====== //
window.abrirModalEditarMorador = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(nip) {
    var moradores, _yield$window$_supaba7, data, dados, possuiDep, possuiAnimal;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          if (nip) {
            _context1.n = 1;
            break;
          }
          alert("Erro: NIP não informado para edição.");
          return _context1.a(2);
        case 1:
          // Buscar dados do localStorage (fallback) ou do Supabase
          moradores = [];
          if (!window._supabase) {
            _context1.n = 3;
            break;
          }
          _context1.n = 2;
          return window._supabase.from('moradores').select('dados').eq('nip', nip);
        case 2:
          _yield$window$_supaba7 = _context1.v;
          data = _yield$window$_supaba7.data;
          if (data && data.length > 0) {
            moradores = data.map(function (d) {
              return d.dados;
            });
          } else {
            // Tentativa de fallback no localStorage se estiver offline
            moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
            moradores = moradores.filter(function (m) {
              return m.dadosPessoais && m.dadosPessoais.nip === nip;
            });
          }
          _context1.n = 4;
          break;
        case 3:
          moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
          moradores = moradores.filter(function (m) {
            return m.dadosPessoais && m.dadosPessoais.nip === nip;
          });
        case 4:
          if (!(moradores.length === 0)) {
            _context1.n = 5;
            break;
          }
          alert("Morador não encontrado!");
          return _context1.a(2);
        case 5:
          // Considerando o primeiro resultado se houver múltiplos
          dados = moradores[0]; // Armazenar o objeto original em um data-attribute para uso no submit
          document.getElementById('formEditarMoradorSindico').dataset.dadosOriginais = JSON.stringify(dados);

          // Preencher o formulário do Modal
          document.getElementById('editMoradorNip').value = dados.dadosPessoais.nip;
          document.getElementById('editMoradorPosto').value = dados.dadosPessoais.posto;
          document.getElementById('editMoradorNome').value = dados.dadosPessoais.nomeCompleto;
          document.getElementById('editMoradorEndereco').value = dados.dadosPessoais.endereco || dados.dadosPessoais.enderecoPnr;
          possuiDep = dados.dependentes && dados.dependentes.nomeDependente1 !== 'Não informado' ? 'Sim' : 'Não';
          document.getElementById('editMoradorDependentes').value = possuiDep;
          possuiAnimal = "Nenhum";
          if (dados.animais && dados.animais.possuiAnimal === 'Sim') {
            possuiAnimal = dados.animais.especie;
            if (!['Cão', 'Gato'].includes(possuiAnimal)) possuiAnimal = 'Outro';
          }
          document.getElementById('editMoradorAnimais').value = possuiAnimal;

          // Mostrar modal
          document.getElementById('modalEditarMorador').style.display = 'flex';
        case 6:
          return _context1.a(2);
      }
    }, _callee1);
  }));
  return function (_x14) {
    return _ref1.apply(this, arguments);
  };
}();
window.salvarEdicaoMorador = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(e) {
    var btn, txtOriginal, nip, formStr, dadosEdit, endereco, selDep, selAni, enderecoAntigo, _yield$window$_supaba8, error, lblMoradores, index, _t7;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          e.preventDefault();
          btn = document.getElementById('btnSalvarEdicaoMorador');
          txtOriginal = btn.innerHTML;
          btn.innerHTML = '⏳ Salvando...';
          btn.disabled = true;
          _context10.p = 1;
          nip = document.getElementById('editMoradorNip').value;
          formStr = document.getElementById('formEditarMoradorSindico').dataset.dadosOriginais;
          if (!(!nip || !formStr)) {
            _context10.n = 2;
            break;
          }
          throw new Error("Dados de formulário incompletos");
        case 2:
          dadosEdit = JSON.parse(formStr); // Atualiza campos modificados
          dadosEdit.dadosPessoais.posto = document.getElementById('editMoradorPosto').value;
          dadosEdit.dadosPessoais.nomeCompleto = document.getElementById('editMoradorNome').value;
          endereco = document.getElementById('editMoradorEndereco').value;
          dadosEdit.dadosPessoais.endereco = endereco;
          dadosEdit.dadosPessoais.enderecoPnr = endereco; // garantir ambas chaves

          // Simplesmente reflete os selects básicos
          selDep = document.getElementById('editMoradorDependentes').value;
          if (!dadosEdit.dependentes) dadosEdit.dependentes = {};
          if (selDep === 'Não') {
            dadosEdit.dependentes.nomeDependente1 = 'Não informado';
          } else if (selDep === 'Sim' && dadosEdit.dependentes.nomeDependente1 === 'Não informado') {
            dadosEdit.dependentes.nomeDependente1 = 'Dependente Cadastrado';
          }
          selAni = document.getElementById('editMoradorAnimais').value;
          if (!dadosEdit.animais) dadosEdit.animais = {};
          if (selAni === 'Nenhum') {
            dadosEdit.animais.possuiAnimal = 'Não';
            dadosEdit.animais.especie = '';
          } else {
            dadosEdit.animais.possuiAnimal = 'Sim';
            dadosEdit.animais.especie = selAni;
          }

          // Registrar no histórico de ocupação se houver mudança de endereço
          enderecoAntigo = JSON.parse(formStr).dadosPessoais.endereco || JSON.parse(formStr).dadosPessoais.enderecoPnr;
          if (!(endereco && endereco !== enderecoAntigo)) {
            _context10.n = 4;
            break;
          }
          if (!enderecoAntigo) {
            _context10.n = 3;
            break;
          }
          _context10.n = 3;
          return registrarHistoricoOcupacao(enderecoAntigo, nip, dadosEdit.dadosPessoais.nomeCompleto, 'saida');
        case 3:
          _context10.n = 4;
          return registrarHistoricoOcupacao(endereco, nip, dadosEdit.dadosPessoais.nomeCompleto, 'entrada');
        case 4:
          if (!window._supabase) {
            _context10.n = 6;
            break;
          }
          _context10.n = 5;
          return window._supabase.from('moradores').update({
            dados: dadosEdit
          }).eq('nip', nip);
        case 5:
          _yield$window$_supaba8 = _context10.v;
          error = _yield$window$_supaba8.error;
          if (!error) {
            _context10.n = 6;
            break;
          }
          console.error("Erro ao atualizar supabase:", error);
          throw error;
        case 6:
          // Salvar fallback em localStorage
          lblMoradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
          index = lblMoradores.findIndex(function (m) {
            return m.dadosPessoais && m.dadosPessoais.nip === nip;
          });
          if (index > -1) {
            lblMoradores[index] = dadosEdit;
          } else {
            lblMoradores.push(dadosEdit);
          }
          localStorage.setItem('vnt_moradores', JSON.stringify(lblMoradores));
          document.getElementById('modalEditarMorador').style.display = 'none';

          // Mensagem Toast ou Alert natural
          setTimeout(function () {
            return alert('Dados atualizados com sucesso!');
          }, 100);
          if (!(typeof renderMoradores === 'function')) {
            _context10.n = 7;
            break;
          }
          _context10.n = 7;
          return renderMoradores();
        case 7:
          _context10.n = 9;
          break;
        case 8:
          _context10.p = 8;
          _t7 = _context10.v;
          alert("Ocorreu um erro ao salvar as alterações. Verifique o console.");
          console.error(_t7);
        case 9:
          _context10.p = 9;
          btn.innerHTML = txtOriginal;
          btn.disabled = false;
          return _context10.f(9);
        case 10:
          return _context10.a(2);
      }
    }, _callee10, null, [[1, 8, 9, 10]]);
  }));
  return function (_x15) {
    return _ref10.apply(this, arguments);
  };
}();
window.autenticarMorador = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(nip) {
    var _yield$window$_supaba9, data, dados, _t8;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          if (confirm("Tem certeza que deseja marcar o cadastro do NIP ".concat(nip, " como Verificado/Aut\xEAntico? \nIsso atesta que os dados foram conferidos pelo s\xEDndico."))) {
            _context11.n = 1;
            break;
          }
          return _context11.a(2);
        case 1:
          _context11.p = 1;
          if (window._supabase) {
            _context11.n = 2;
            break;
          }
          alert("Erro: Conexão com Supabase não disponível.");
          return _context11.a(2);
        case 2:
          _context11.n = 3;
          return window._supabase.from('moradores').select('dados').eq('nip', nip);
        case 3:
          _yield$window$_supaba9 = _context11.v;
          data = _yield$window$_supaba9.data;
          if (!(data && data.length > 0)) {
            _context11.n = 5;
            break;
          }
          dados = data[0].dados;
          dados.statusVerificacao = 'Verificado';
          _context11.n = 4;
          return window._supabase.from('moradores').update({
            dados: dados
          }).eq('nip', nip);
        case 4:
          setTimeout(function () {
            return alert("Cadastro verificado e autenticado com sucesso!");
          }, 100);
          if (typeof renderMoradores === 'function') renderMoradores();
        case 5:
          _context11.n = 7;
          break;
        case 6:
          _context11.p = 6;
          _t8 = _context11.v;
          alert("Erro ao validar cadastro: " + _t8.message);
        case 7:
          return _context11.a(2);
      }
    }, _callee11, null, [[1, 6]]);
  }));
  return function (_x16) {
    return _ref11.apply(this, arguments);
  };
}();
window.apagarMorador = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(nip) {
    var confirmNum, pass, _yield$window$_supaba0, data, pnr, _t9;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          confirmNum = Math.floor(1000 + Math.random() * 9000);
          pass = prompt("CUIDADO: EXCLUS\xC3O DE DADOS PESSOAIS E PERMISS\xD5ES.\n\nVoc\xEA est\xE1 prestes a apagar o NIP: ".concat(nip, "\n\nPara confirmar a exclus\xE3o, digite o n\xFAmero: ").concat(confirmNum));
          if (!(pass !== confirmNum.toString())) {
            _context12.n = 1;
            break;
          }
          alert("Ação cancelada: Número de confirmação incorreto.");
          return _context12.a(2);
        case 1:
          _context12.p = 1;
          if (window._supabase) {
            _context12.n = 2;
            break;
          }
          alert("Erro: Conexão com Supabase não disponível.");
          return _context12.a(2);
        case 2:
          _context12.n = 3;
          return window._supabase.from('moradores').select('dados').eq('nip', nip);
        case 3:
          _yield$window$_supaba0 = _context12.v;
          data = _yield$window$_supaba0.data;
          if (!(data && data.length > 0)) {
            _context12.n = 4;
            break;
          }
          pnr = data[0].dados.dadosPessoais.endereco || data[0].dados.dadosPessoais.enderecoPnr;
          if (!pnr) {
            _context12.n = 4;
            break;
          }
          _context12.n = 4;
          return registrarHistoricoOcupacao(pnr, nip, data[0].dados.dadosPessoais.nomeCompleto, 'saida');
        case 4:
          _context12.n = 5;
          return window._supabase.from('moradores')["delete"]().eq('nip', nip);
        case 5:
          setTimeout(function () {
            return alert("Morador e todas as suas permissões foram excluídos com sucesso do banco de dados.");
          }, 100);
          if (typeof renderMoradores === 'function') renderMoradores();
          _context12.n = 7;
          break;
        case 6:
          _context12.p = 6;
          _t9 = _context12.v;
          alert("Erro ao excluir: " + _t9.message);
        case 7:
          return _context12.a(2);
      }
    }, _callee12, null, [[1, 6]]);
  }));
  return function (_x17) {
    return _ref12.apply(this, arguments);
  };
}();
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
    if (rawVal.toLowerCase().startsWith('s') || rawVal.toLowerCase().startsWith('a')) {
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
  var n = nip.replace(/\D/g, '');
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
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(e) {
    var btn, nip, nome, endereco, mockData, _yield$window$_supaba1, data, error, _t0;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.p = _context13.n) {
        case 0:
          e.preventDefault();
          btn = document.getElementById('btnSalvarSindico');
          nip = document.getElementById('novoMoradorNip').value.toLowerCase();
          nome = document.getElementById('novoMoradorNome').value;
          endereco = document.getElementById('novoMoradorEndereco').value;
          if (validarNIP(nip)) {
            _context13.n = 1;
            break;
          }
          alert("NIP Inválido!");
          return _context13.a(2);
        case 1:
          if (window._supabase) {
            _context13.n = 2;
            break;
          }
          alert("BD Offline");
          return _context13.a(2);
        case 2:
          btn.innerHTML = 'Salvando...';
          _context13.p = 3;
          mockData = {
            nomeCompleto: nome,
            nip: nip,
            endereco: endereco,
            senha: 'marinha123',
            posto: 'N/A'
          };
          _context13.n = 4;
          return window._supabase.from('moradores').select('id').eq('nip', nip);
        case 4:
          _yield$window$_supaba1 = _context13.v;
          data = _yield$window$_supaba1.data;
          error = _yield$window$_supaba1.error;
          if (!(data && data.length > 0)) {
            _context13.n = 5;
            break;
          }
          alert("Este NIP já existe!");
          _context13.n = 8;
          break;
        case 5:
          _context13.n = 6;
          return window._supabase.from('moradores').insert([{
            nip: nip,
            dados: mockData
          }]);
        case 6:
          _context13.n = 7;
          return registrarHistoricoOcupacao(endereco, nip, nome, 'entrada');
        case 7:
          alert("Morador cadastrado com sucesso! Acesso liberado.");
          document.getElementById('formNovoMoradorSindico').reset();
          document.getElementById('modalNovoMorador').style.display = 'none';
          if (typeof renderMoradores === 'function') renderMoradores();
        case 8:
          _context13.n = 10;
          break;
        case 9:
          _context13.p = 9;
          _t0 = _context13.v;
          alert("Erro no servidor.");
        case 10:
          btn.innerHTML = 'Salvar';
        case 11:
          return _context13.a(2);
      }
    }, _callee13, null, [[3, 9]]);
  }));
  return function (_x18) {
    return _ref13.apply(this, arguments);
  };
}();

// Handle Formulario Meu Cadastro Complete
document.addEventListener('DOMContentLoaded', function () {
  var cadForm = document.getElementById('cadastroForm');
  if (cadForm) {
    cadForm.addEventListener('submit', /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(e) {
        var rawCpf, btn, formData, payload, _iterator, _step, _step$value, key, val, currentNip, _yield$window$_supaba10, data, error, oldData, merged, _t1;
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.p = _context14.n) {
            case 0:
              e.preventDefault();
              rawCpf = document.getElementById('cpf').value;
              if (!(rawCpf && rawCpf.trim() !== '')) {
                _context14.n = 1;
                break;
              }
              if (validarCPF(rawCpf)) {
                _context14.n = 1;
                break;
              }
              alert("CPF Inválido. Corrija-o ou deixe em branco.");
              return _context14.a(2);
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
                _context14.n = 2;
                break;
              }
              alert("Síndico não usa este cadastro pessoal.");
              btn.innerHTML = 'Salvar / Atualizar Dados';
              btn.disabled = false;
              return _context14.a(2);
            case 2:
              if (window._supabase) {
                _context14.n = 3;
                break;
              }
              alert("Aguarde, sistema off-line");
              return _context14.a(2);
            case 3:
              _context14.p = 3;
              _context14.n = 4;
              return window._supabase.from('moradores').select('*').eq('nip', currentNip);
            case 4:
              _yield$window$_supaba10 = _context14.v;
              data = _yield$window$_supaba10.data;
              error = _yield$window$_supaba10.error;
              if (!(data && data.length > 0)) {
                _context14.n = 8;
                break;
              }
              oldData = data[0].dados || {}; // Merge
              merged = _objectSpread(_objectSpread({}, oldData), payload);
              _context14.n = 5;
              return window._supabase.from('moradores').update({
                dados: merged
              }).eq('nip', currentNip);
            case 5:
              if (!(payload.enderecoPnr && oldData.enderecoPnr !== payload.enderecoPnr)) {
                _context14.n = 7;
                break;
              }
              if (!oldData.enderecoPnr) {
                _context14.n = 6;
                break;
              }
              _context14.n = 6;
              return registrarHistoricoOcupacao(oldData.enderecoPnr, currentNip, oldData.nomeCompleto, 'saida');
            case 6:
              _context14.n = 7;
              return registrarHistoricoOcupacao(payload.enderecoPnr, currentNip, payload.nomeCompleto || oldData.nomeCompleto, 'entrada');
            case 7:
              alert("Seus dados foram atualizados com sucesso!");
              _context14.n = 11;
              break;
            case 8:
              // Force create if somehow missing
              payload.senha = 'marinha123';
              _context14.n = 9;
              return window._supabase.from('moradores').insert([{
                nip: currentNip,
                dados: payload
              }]);
            case 9:
              _context14.n = 10;
              return registrarHistoricoOcupacao(payload.enderecoPnr, currentNip, payload.nomeCompleto, 'entrada');
            case 10:
              alert("Seus dados foram salvos com sucesso!");
            case 11:
              _context14.n = 13;
              break;
            case 12:
              _context14.p = 12;
              _t1 = _context14.v;
              alert("Falha na rede.");
            case 13:
              btn.innerHTML = 'Salvar / Atualizar Dados';
              btn.disabled = false;
            case 14:
              return _context14.a(2);
          }
        }, _callee14, null, [[3, 12]]);
      }));
      return function (_x19) {
        return _ref14.apply(this, arguments);
      };
    }());
  }
});
window.imprimirFichaCadastro = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
  var nipTarget,
    dados,
    _yield$window$_supaba11,
    data,
    safeGet,
    defBool,
    html,
    opt,
    container,
    printWindow,
    _args15 = arguments;
  return _regenerator().w(function (_context15) {
    while (1) switch (_context15.n) {
      case 0:
        nipTarget = _args15.length > 0 && _args15[0] !== undefined ? _args15[0] : null;
        dados = {};
        if (!(nipTarget && window._supabase)) {
          _context15.n = 2;
          break;
        }
        _context15.n = 1;
        return window._supabase.from('moradores').select('dados').eq('nip', nipTarget);
      case 1:
        _yield$window$_supaba11 = _context15.v;
        data = _yield$window$_supaba11.data;
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
          _context15.n = 3;
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
        _context15.n = 5;
        break;
      case 3:
        printWindow = window.open('', '_blank');
        if (printWindow) {
          _context15.n = 4;
          break;
        }
        return _context15.a(2, alert('Autorize popups neste site para gerar o documento.'));
      case 4:
        printWindow.document.write(html);
        printWindow.document.close();
      case 5:
        return _context15.a(2);
    }
  }, _callee15);
}));

// --- Password Management Functions ---

window.abrirModalSenhaDashboard = function () {
  var m = document.getElementById('modalSenhaDashboard');
  if (m) m.style.display = 'flex';
};
window.fecharModalSenhaDashboard = function () {
  var m = document.getElementById('modalSenhaDashboard');
  if (m) m.style.display = 'none';
};
window.confirmarMudarSenhaDashboard = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
  var input, inputConf, novaSenha, novaSenhaConf, btn, nip, hashedPwd, _yield$window$_supaba12, data, error, _dados, mockData, _t10;
  return _regenerator().w(function (_context16) {
    while (1) switch (_context16.p = _context16.n) {
      case 0:
        input = document.getElementById('novaSenhaInputDash');
        inputConf = document.getElementById('novaSenhaInputDashConf');
        novaSenha = input.value;
        novaSenhaConf = inputConf.value;
        btn = document.getElementById('btnConfirmaNovaSenha');
        if (!(novaSenha.length < 6)) {
          _context16.n = 1;
          break;
        }
        alert("A senha precisa ter pelo menos 6 caracteres.");
        return _context16.a(2);
      case 1:
        if (!(novaSenha !== novaSenhaConf)) {
          _context16.n = 2;
          break;
        }
        alert("A confirmação não coincide com a nova senha digitada.");
        return _context16.a(2);
      case 2:
        nip = localStorage.getItem('vnt_role');
        if (window._supabase) {
          _context16.n = 3;
          break;
        }
        alert("Falha de conexão com a Base de Dados. Tente novamente.");
        return _context16.a(2);
      case 3:
        btn.innerHTML = 'Salvando...';
        btn.disabled = true;
        _context16.p = 4;
        _context16.n = 5;
        return hashPassword(novaSenha);
      case 5:
        hashedPwd = _context16.v;
        _context16.n = 6;
        return window._supabase.from('moradores').select('*').eq('nip', nip);
      case 6:
        _yield$window$_supaba12 = _context16.v;
        data = _yield$window$_supaba12.data;
        error = _yield$window$_supaba12.error;
        if (!(data && data.length > 0)) {
          _context16.n = 8;
          break;
        }
        _dados = data[0].dados || {};
        _dados.senha = hashedPwd;
        _context16.n = 7;
        return window._supabase.from('moradores').update({
          dados: _dados
        }).eq('nip', nip);
      case 7:
        alert("Senha alterada com sucesso!");
        _context16.n = 11;
        break;
      case 8:
        if (!(nip === 'sindico')) {
          _context16.n = 10;
          break;
        }
        // Initializing sindico record if missing
        mockData = {
          nome: 'Síndico',
          senha: hashedPwd
        };
        _context16.n = 9;
        return window._supabase.from('moradores').insert([{
          nip: 'sindico',
          dados: mockData
        }]);
      case 9:
        alert("Senha do Síndico alterada e cadastrada com sucesso!");
        _context16.n = 11;
        break;
      case 10:
        alert("Erro ao localizar seu registro no banco de dados.");
      case 11:
        input.value = '';
        inputConf.value = '';
        fecharModalSenhaDashboard();
        _context16.n = 13;
        break;
      case 12:
        _context16.p = 12;
        _t10 = _context16.v;
        console.error("Erro ao mudar senha:", _t10);
        alert("Erro fatal ao salvar senha.");
      case 13:
        _context16.p = 13;
        btn.innerHTML = 'Salvar Modificação';
        btn.disabled = false;
        return _context16.f(13);
      case 14:
        return _context16.a(2);
    }
  }, _callee16, null, [[4, 12, 13, 14]]);
}));
window.resetarSenhaMorador = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(nipTarget, nome) {
    var _yield$window$_supaba13, data, error, _dados2, _t11;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.p = _context17.n) {
        case 0:
          if (confirm("ATEN\xC7\xC3O: Voc\xEA tem certeza que deseja RESETAR a senha do morador ".concat(nome, " (NIP: ").concat(nipTarget, ") para o padr\xE3o \"marinha123\"? Isso exigir\xE1 que ele crie uma nova senha no pr\xF3ximo acesso."))) {
            _context17.n = 1;
            break;
          }
          return _context17.a(2);
        case 1:
          if (window._supabase) {
            _context17.n = 2;
            break;
          }
          alert("Sistema Offline. Tente Novamente.");
          return _context17.a(2);
        case 2:
          _context17.p = 2;
          _context17.n = 3;
          return window._supabase.from('moradores').select('*').eq('nip', nipTarget);
        case 3:
          _yield$window$_supaba13 = _context17.v;
          data = _yield$window$_supaba13.data;
          error = _yield$window$_supaba13.error;
          if (!(data && data.length > 0)) {
            _context17.n = 6;
            break;
          }
          _dados2 = data[0].dados || {}; // Reset to hashed default
          _context17.n = 4;
          return hashPassword("marinha123");
        case 4:
          _dados2.senha = _context17.v;
          _context17.n = 5;
          return window._supabase.from('moradores').update({
            dados: _dados2
          }).eq('nip', nipTarget);
        case 5:
          alert("Sucesso! A senha de " + nome + " foi completamente restaurada para marinha123.");
          _context17.n = 7;
          break;
        case 6:
          alert("Morador não encontrado no banco.");
        case 7:
          _context17.n = 9;
          break;
        case 8:
          _context17.p = 8;
          _t11 = _context17.v;
          console.error("Erro ao resetar senha:", _t11);
          alert("Falha ao comunicar com o servidor.");
        case 9:
          return _context17.a(2);
      }
    }, _callee17, null, [[2, 8]]);
  }));
  return function (_x20, _x21) {
    return _ref17.apply(this, arguments);
  };
}();
window.togglePwd = function (inputId, iconId) {
  var input = document.getElementById(inputId);
  var icon = document.getElementById(iconId);
  if (input && icon) {
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('ri-eye-line');
      icon.classList.add('ri-eye-off-line');
    } else {
      input.type = 'password';
      icon.classList.remove('ri-eye-off-line');
      icon.classList.add('ri-eye-line');
    }
  }
};

// --- ANEXO H: Relatório Mensal do Síndico ---

window.loadRelatorioMensal = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
  var _document$getElementB, _document$getElementB2;
  var mes, ano, tbody, areasComuns, ocorrencias, _yield$window$_supaba14, moradores, morError, storageKey, existingReport, residentsWithPnr, _t12;
  return _regenerator().w(function (_context18) {
    while (1) switch (_context18.p = _context18.n) {
      case 0:
        mes = (_document$getElementB = document.getElementById('relatorioMes')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value;
        ano = (_document$getElementB2 = document.getElementById('relatorioAno')) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.value;
        tbody = document.getElementById('tbodyRelatorioPnrs');
        areasComuns = document.getElementById('relatorioAreasComuns');
        ocorrencias = document.getElementById('relatorioOcorrencias');
        if (!(!mes || !ano || !tbody)) {
          _context18.n = 1;
          break;
        }
        return _context18.a(2);
      case 1:
        tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; padding:20px;">Carregando dados...</td></tr>';
        _context18.p = 2;
        if (window._supabase) {
          _context18.n = 3;
          break;
        }
        tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; padding:20px;">Supabase não conectado.</td></tr>';
        return _context18.a(2);
      case 3:
        _context18.n = 4;
        return window._supabase.from('moradores').select('*');
      case 4:
        _yield$window$_supaba14 = _context18.v;
        moradores = _yield$window$_supaba14.data;
        morError = _yield$window$_supaba14.error;
        if (!morError) {
          _context18.n = 5;
          break;
        }
        throw morError;
      case 5:
        // 2. Get existing report for this month/year
        storageKey = "relatorio_mensal_".concat(ano, "_").concat(mes);
        _context18.n = 6;
        return getStorageData(storageKey);
      case 6:
        existingReport = _context18.v;
        // 3. Render PNRs
        residentsWithPnr = moradores.filter(function (m) {
          return m.dados && m.dados.endereco;
        });
        residentsWithPnr.sort(function (a, b) {
          return a.dados.endereco.localeCompare(b.dados.endereco);
        });
        if (residentsWithPnr.length === 0) {
          tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; padding:20px;">Nenhum PNR ocupado no momento.</td></tr>';
        } else {
          tbody.innerHTML = residentsWithPnr.map(function (m) {
            var pnrName = m.dados.endereco;
            var savedData = existingReport && existingReport.pnrs ? existingReport.pnrs.find(function (p) {
              return p.pnr === pnrName;
            }) : null;
            var currentStatus = savedData ? savedData.status : 'Vistoriado';
            var currentObs = savedData ? savedData.obs : '';
            return "\n                    <tr>\n                        <td style=\"padding:10px; border-bottom:1px solid #edf2f7;\">".concat(pnrName, "</td>\n                        <td style=\"padding:10px; border-bottom:1px solid #edf2f7;\">\n                            <select class=\"pnr-status-select\" data-pnr=\"").concat(pnrName, "\" style=\"width:100%; border:1px solid #e2e8f0; border-radius:4px; padding:5px;\">\n                                <option value=\"Vistoriado\" ").concat(currentStatus === 'Vistoriado' ? 'selected' : '', ">Vistoriado</option>\n                                <option value=\"Problema\" ").concat(currentStatus === 'Problema' ? 'selected' : '', ">Problema</option>\n                                <option value=\"Manuten\xE7\xE3o\" ").concat(currentStatus === 'Manutenção' ? 'selected' : '', ">Manuten\xE7\xE3o</option>\n                            </select>\n                        </td>\n                        <td style=\"padding:10px; border-bottom:1px solid #edf2f7;\">\n                            <input type=\"text\" class=\"pnr-obs-input\" data-pnr=\"").concat(pnrName, "\" value=\"").concat(currentObs, "\" placeholder=\"Sem altera\xE7\xF5es\" style=\"width:100%; border:none; background:transparent; border-bottom:1px dashed #cbd5e1;\">\n                        </td>\n                    </tr>\n                ");
          }).join('');
        }

        // 4. Fill other fields
        if (areasComuns) areasComuns.value = (existingReport === null || existingReport === void 0 ? void 0 : existingReport.areasComuns) || '';
        if (ocorrencias) ocorrencias.value = (existingReport === null || existingReport === void 0 ? void 0 : existingReport.ocorrencias) || '';
        _context18.n = 8;
        break;
      case 7:
        _context18.p = 7;
        _t12 = _context18.v;
        console.error("Erro ao carregar relatório:", _t12);
        tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; color:red; padding:20px;">Falha ao carregar relatório mensal.</td></tr>';
      case 8:
        return _context18.a(2);
    }
  }, _callee18, null, [[2, 7]]);
}));
window.saveRelatorioMensal = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
  var _document$getElementB3, _document$getElementB4;
  var mes, ano, btn, pnrs, payload, storageKey, _t13;
  return _regenerator().w(function (_context19) {
    while (1) switch (_context19.p = _context19.n) {
      case 0:
        mes = (_document$getElementB3 = document.getElementById('relatorioMes')) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.value;
        ano = (_document$getElementB4 = document.getElementById('relatorioAno')) === null || _document$getElementB4 === void 0 ? void 0 : _document$getElementB4.value;
        btn = document.getElementById('btnSalvarRelatorio');
        if (!(!mes || !ano || !btn)) {
          _context19.n = 1;
          break;
        }
        return _context19.a(2);
      case 1:
        btn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Salvando...';
        btn.disabled = true;
        _context19.p = 2;
        pnrs = [];
        document.querySelectorAll('.pnr-status-select').forEach(function (select) {
          var pnrName = select.getAttribute('data-pnr');
          var status = select.value;
          var obsInput = document.querySelector(".pnr-obs-input[data-pnr=\"".concat(pnrName, "\"]"));
          pnrs.push({
            pnr: pnrName,
            status: status,
            obs: obsInput ? obsInput.value : ''
          });
        });
        payload = {
          mes: mes,
          ano: ano,
          pnrs: pnrs,
          areasComuns: document.getElementById('relatorioAreasComuns').value,
          ocorrencias: document.getElementById('relatorioOcorrencias').value,
          updatedAt: new Date().toISOString()
        };
        storageKey = "relatorio_mensal_".concat(ano, "_").concat(mes);
        _context19.n = 3;
        return setStorageData(storageKey, payload);
      case 3:
        alert("Relat\xF3rio de ".concat(mes, "/").concat(ano, " salvo com sucesso!"));
        _context19.n = 5;
        break;
      case 4:
        _context19.p = 4;
        _t13 = _context19.v;
        console.error("Erro ao salvar relatório:", _t13);
        alert("Erro ao salvar relatório mensal.");
      case 5:
        _context19.p = 5;
        btn.innerHTML = '<i class="ri-save-line"></i> Salvar e Assinar Relatório';
        btn.disabled = false;
        return _context19.f(5);
      case 6:
        return _context19.a(2);
    }
  }, _callee19, null, [[2, 4, 5, 6]]);
}));
