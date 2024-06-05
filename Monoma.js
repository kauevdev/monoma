const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userMessage = userInput.value;
  appendMessage('user', userMessage);
  setTimeout(() => {
    const botMessage = getBotResponse(userMessage);
    appendMessage('bot', botMessage);
  }, 500);
  userInput.value = '';
}

// Função para enviar mensagem ao pressionar Enter
userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Impede o comportamento padrão de quebra de linha
    sendMessage();
  }
});

function calcularOperacao(operacao, num1, num2) {
  let resultado;

  switch (operacao.toLowerCase()) {
    case 'mais':
      resultado = num1 + num2;
      break;
    case 'menos':
      resultado = num1 - num2;
      break;
    case 'vezes':
      resultado = num1 * num2;
      break;
    case 'dividido':
      if (num2 === 0) {
        resultado = 'Não é possível dividir por zero! Vai aprender matemática básica! 💀';
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      resultado = 'Operação inválida. Por favor, escolha entre adição, subtração, multiplicação ou divisão.';
      break;
  }

  return resultado;
}

const responses = {
  'quero ver sua logo': '<img src="monoma.png" alt="Logo da Monoma">',
  'me envie sua logo': '<img src="monoma.png" alt="Logo da Monoma">',
  'foto de um gato': '<img src="https://www.pngall.com/wp-content/uploads/2016/05/Kitten.png" alt="gatinho fofo">',
  'video random': '<iframe width="300" height="300" src="https://www.youtube.com/embed/ba7--Hp7EQU" title="BEAT ZÉ DA MANGA 🥭 - Aaah zé da manga (FUNK REMIX) by Sr. Nescau" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  'video phonk': '<iframe width="300" height="300" src="https://www.youtube.com/embed/dvQJIgjlR3I" title="MoonDeity - NEON BLADE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  'seu nome': 'Sei lá... pergunta para Carlos.',
  'perguntas': 'Aqui estão algumas sugestões de perguntas: \n1.Por que o seu nome é Monoma? \n2.Como você está? \n3.Quais são algumas curiosidades sobre você? \n4.A Monoma tem alguma habilidade especial? \n5.Qual é a função da Monoma? \n6.O que você pode fazer? \n7.Como surgiu sua logo?\n8.Faça um cálculo matemático (por exemplo: "Calcule 2 mais 2") \n9.Pode me enviar uma foto? \n10.Pode me enviar um video? \n Lembre-se que você deve digitar dessa mesma maneira, pois sou uma IA exata 🧐.',
  'como você está': 'Estou bem, obrigada por perguntar! 😃',
  'enviar uma foto': 'Claro, tente "Me envie sua logo" ou "Me envie uma foto de um gato". Lembre-se que você deve digitar dessa mesma maneira, pois sou uma IA exata 🧐',
  'enviar um video': 'Sim! Tente "Me envie um video phonk" ou "Me envie um video random". Lembre-se que você deve digitar dessa mesma maneira, pois sou uma IA exata 🧐',
  'oi': 'Olá! Como posso ajudar?',
  'olá': 'Olá! Como posso ajudar?',
  'tudo bem': 'Sim, estou bem! :)',
  'você é humano': 'Não, sou uma assistente virtual criada para um trabalho sobre IA.',
  'você é uma pessoa': 'Não, sou uma assistente virtual criada para um trabalho sobre IA.',
  'sobre você': 'Algumas curiosidades sobre mim são: a Monoma é uma assistente virtual criada por Kauê Vieira, nomeada por Carlos Henrique Borges e sua logo foi Feita Por Daline Soares, A Monoma foi criada para um projeto acadêmico sobre inteligência artificial.',
  'habilidade especial': 'Como uma assistente virtual, minha habilidade especial é ajudar os usuários com suas perguntas e tarefas, posso enviar imagens, vídeos e resolver contas envolvendo as operações básicas.',
  'função': 'A função da Monoma é servir como uma assistente virtual para facilitar a vida dos usuários, fornecendo suporte, informações e executando tarefas de forma rápida e eficiente. E também divertir o usuário.',
  'o que você pode fazer': 'Na teoria eu poderia fornecer informações sobre diversos tópicos, responder perguntas e auxiliar em tarefas simples. No entanto, Kauê ficou com preguiça de criar mais códigos para me ensinar mais coisas 🥲. No momento posso resolver contas básicas de matemática, enviar imagens e videos.',
  'surgiu sua logo': 'Foi Daline que fez, Diga a ela que ficou bem legal! 😉',
};

function getBotResponse(userMessage) {
  const keys = Object.keys(responses);
  const message = userMessage.toLowerCase();

  for (const key of keys) {
    if (message.includes(key)) {
      return responses[key];
    }
  }

  if (message.includes('quanto é') || message.includes('calcule')) {
    const operacoes = ['mais', 'menos', 'vezes', 'dividido'];
    let operacaoEncontrada = '';
    for (const operacao of operacoes) {
      if (message.includes(operacao)) {
        operacaoEncontrada = operacao;
        break;
      }
    }

    if (operacaoEncontrada) {
      const numeros = message.match(/\d+/g);
      if (numeros && numeros.length >= 2) {
        const num1 = parseFloat(numeros[0
]);
        const num2 = parseFloat(numeros[1]);
        const resultado = calcularOperacao(operacaoEncontrada, num1, num2);
        return `${resultado}. Achei fácil 😎`;
      } else {
        return 'Por favor, forneça dois números para calcular.';
      }
    } else {
      return 'Desculpe, não entendi. Por favor, tente fornecer a operação matemática (adição, subtração, multiplicação ou divisão) seguida de dois números. Usando a função: Calcule Número1, Operação matemática(mais, menos, vezes, dividido) Número2. ';
    }
  } else {
    return 'Desculpe, não entendi.\n\nVocê gostaria de fazer alguma pergunta? Se sim, digite: "Perguntas".';
  }
}

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(`${sender}-message`);

  if (sender === 'bot') {
    const botReplyContainer = document.createElement('div');
    botReplyContainer.classList.add('bot-reply');

    const botLogoContainer = document.createElement('div');
    botLogoContainer.classList.add('bot-logo-container');

    const botLogo = document.createElement('img');
    botLogo.src = 'monoma.png'; // Substitua pelo caminho da sua logo
    botLogo.classList.add('bot-logo');
    botLogoContainer.appendChild(botLogo);

    const botInfo = document.createElement('span');
    botInfo.classList.add('bot-info');
    botInfo.innerText = 'Monoma';
    botLogoContainer.appendChild(botInfo);

    botReplyContainer.appendChild(botLogoContainer);

    const botText = document.createElement('span');
    botText.innerHTML = message; // Use innerHTML para renderizar a imagem
    botReplyContainer.appendChild(botText);

    messageElement.appendChild(botReplyContainer);
  } else {
    messageElement.innerText = message;
  }

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
