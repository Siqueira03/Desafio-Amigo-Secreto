let titulo = document.querySelector ("h1");
titulo.innerHTML = "Sejam bem-vindos ao sorteio do amigo secreto!";
let amigos = []; // Array para armazenar os nomes dos amigos

// Adiciona um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo"); 
    let nome = input.value.trim(); // Captura e remove espaços extras
    
    if (nome === "") {
        alert("Por favor, insira um nome."); // Exibe alerta se o campo estiver vazio
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a lista na tela
    input.value = ""; // Limpa o campo de entrada
}

// Atualiza a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Sorteia um amigo aleatoriamente e exibe o resultado
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!"); // Valida se há amigos na lista
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera índice aleatório
    let amigoSorteado = amigos[indiceAleatorio]; // Obtém o nome sorteado

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa a área de resultados antes de exibir o novo sorteio

    let item = document.createElement("li");
    item.textContent = "Amigo Sorteado: " + amigoSorteado;
    resultadoLista.appendChild(item); // Adiciona o nome sorteado à tela
};
