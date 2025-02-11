
 🎁 Amigo Secreto - Sorteio de Nomes
Este é um projeto simples de um *sorteador de amigo secreto* desenvolvido com *HTML, CSS e JavaScript*. Ele permite que o usuário adicione nomes a uma lista e, posteriormente, sorteie aleatoriamente um nome.
---
## 📌 Funcionalidades
✅ Adicionar nomes à lista  
✅ Exibir os nomes cadastrados  
✅ Sortear aleatoriamente um nome da lista  
✅ Exibir o nome sorteado na tela  
---
## 🚀 Tecnologias Utilizadas
- *HTML5* → Estrutura da página  
- *CSS3* → Estilização da interface  
- *JavaScript (Vanilla JS)* → Manipulação do DOM e sorteio  
---
## 📂 Estrutura do Projeto
📁 amigo-secreto/ │-- 📄 index.html # Estrutura da página │-- 📄 style.css # Estilos visuais │-- 📄 app.js # Código JavaScript principal │-- 📁 assets/ # Imagens e ícones
yaml
## ⚙ Como Usar?
### 📌 1️⃣ Abrir o projeto no navegador  
Basta abrir o arquivo index.html no seu navegador.  
### 📌 2️⃣ Adicionar nomes à lista  
- Digite um nome no campo de entrada  
- Clique no botão *"Adicionar"*  
### 📌 3️⃣ Sortear um amigo  
- Após adicionar nomes, clique no botão *"Sortear amigo"*  
- O nome sorteado será exibido abaixo  
---
## 🛠 Código Explicado
### **📌 adicionarAmigo()** - Adiciona um nome à lista
```javascript
function adicionarAmigo() {
    let input = document.getElementById("amigo"); 
    let nome = input.value.trim(); 
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}
📌 atualizarLista() - Atualiza a lista na tela
javascript
Copiar
Editar
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}
📌 sortearAmigo() - Sorteia e exibe um nome aleatório
javascript
Copiar
Editar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; 
    let item = document.createElement("li");
    item.textContent = "Amigo Sorteado: " + amigoSorteado;
    resultadoLista.appendChild(item);
📝 Contribuição
Fique à vontade para contribuir! Sugestões, melhorias e correções são sempre bem-vindas.
🚀 Desenvolvido com JavaScript.
