// Solicita informações ao usuário
const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

// Exibe a mensagem personalizada
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

// Exercício opcional: pergunta se gosta de estudar a linguagem
const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

// Exibe a mensagem correspondente à resposta
if (resposta == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (resposta == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
    alert("Resposta inválida. Por favor, responda com 1 para SIM ou 2 para NÃO.");
}
