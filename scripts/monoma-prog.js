const keywords = {
  "dados": "Escolha o assunto para pesquisar nos meus dados, digite o respectivo número:\n1. HTML\n2. CSS\n3. JavaScript",
  "1": "HTML: digite o respectivo número:\n1. Conceito de HTML",
  "2": "CSS: digite o respectivo número:\n1. Conceito de CSS",
  "3": "JavaScript: digite o respectivo número:\n1. Conceito de JavaScript"
};

const html = {
  "1": "HTML: HyperText Markup Language, HTML é a linguagem padrão para criar e estruturar páginas web, utiliza tags para definir elementos como cabeçalhos, parágrafos, imagens, links, formulários, entre outros."
};

const css = {
  "1": "CSS: As folhas de estilo CSS são usadas para estilizar o conteúdo HTML em uma página web."
};

const js = {
  "1": "JavaScript: JavaScript é uma linguagem de programação usada para criar interatividade em páginas web."
};

const chatBox = document.getElementById("chat-box");
let stage = 0; // Variável para controlar o estágio da conversa

// Função para enviar mensagem
function sendMessage() {
  const userInput = document.getElementById("user-input").value.toLowerCase();
  document.getElementById("user-input").value = "";

  // Adicionar mensagem do usuário ao chat
  appendMessage('user', `${userInput}`);

  // Lógica para determinar a resposta com base no estágio da conversa
  let response = "";
  if (stage === 0) {
    if (userInput.includes("dados")) {
      response = keywords["dados"];
      stage = 1; // Avança para o próximo estágio
    } else {
      response = "Olá, sou um ChatBot criado para guardar informações sobre programação. Para acessar meus dados, digite 'dados'.";
    }
  } else if (stage === 1) {
    if (userInput === "1") {
      response = keywords["1"];
      stage = 2; // Avança para o próximo estágio
    } else if (userInput === "2") {
      response = keywords["2"];
      stage = 2; // Avança para o próximo estágio
    } else if (userInput === "3") {
      response = keywords["3"];
      stage = 2; // Avança para o próximo estágio
    } else {
      response = "Por favor, escolha uma das opções válidas (1, 2 ou 3).";
    }
  } else if (stage === 2) {
    if (userInput === "1") {
      response = html["1"];
    } else {
      response = "Por favor, escolha uma das opções válidas (1).";
    }
    stage = 0; // Reinicia o estágio para o próximo conjunto de perguntas
  }

  // Adicionar resposta do bot ao chat
  appendMessage('bot', `${response}`);
}

// Função para adicionar mensagem ao chat
function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(`${sender}-message`);

  if (sender === 'bot') {
    const botReplyContainer = document.createElement('div');
    botReplyContainer.classList.add('bot-reply');

    const botLogoContainer = document.createElement('div');
    botLogoContainer.classList.add('bot-logo-container');

    const botLogo = document.createElement('img');
    botLogo.src = '../imagens/monoma.png'; // Substitua pelo caminho da sua logo
    botLogo.classList.add('bot-logo');
    botLogoContainer.appendChild(botLogo);

    const botInfo = document.createElement('span');
    botInfo.classList.add('bot-info');
    botInfo.innerText = 'Monoma PROG';
    botLogoContainer.appendChild(botInfo);

    botReplyContainer.appendChild(botLogoContainer);

    const botText = document.createElement('div');
    botText.innerHTML = message; // Use innerHTML para renderizar a imagem
    botReplyContainer.appendChild(botText);

    messageElement.appendChild(botReplyContainer);
  } else {
    messageElement.innerText = message;
  }

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listener para enviar mensagem ao pressionar Enter
document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function clickMenu() {
  const itens = document.getElementById('itens');
  if (itens.style.display === 'block') {
    itens.style.display = 'none';
  } else {
    itens.style.display = 'block';
  }
}
  