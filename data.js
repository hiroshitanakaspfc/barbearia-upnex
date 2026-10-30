const SERVICOS = [
  { id: 1, nome: "Corte masculino", preco: 45 },
  { id: 2, nome: "Barba", preco: 30 },
  { id: 3, nome: "Corte + barba", preco: 70 },
  { id: 4, nome: "Sobrancelha", preco: 15 },
];
const BARBEIROS = [{ id: 1, nome: "Quirino" }, { id: 2, nome: "Enzo" }];
const HORARIOS = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];
const brl = n => "R$ " + n.toFixed(2).replace(".", ",");
const lerAg = () => { try { return JSON.parse(localStorage.getItem("ag") || "[]"); } catch (e) { return []; } };
const salvarAg = l => localStorage.setItem("ag", JSON.stringify(l));
const NAV = '<p><a href="index.html">Início</a> | <a href="agendar.html">Agendar horário</a> | <a href="painel.html">Painel do dono</a></p>';
