const ranking = [
    { nome: "Alice", pontos: 120, categoria: "Prata" },
    { nome: "Bob", pontos: 600, categoria: "Platina" },
    { nome: "Carlos", pontos: 1800, categoria: "Challenge" }
];

function exibirRanking() {
    let rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = ""; // Limpar antes de adicionar

    ranking.forEach((aluno, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${aluno.nome} - ${aluno.pontos} pontos (${aluno.categoria})`;
        rankingList.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", exibirRanking);