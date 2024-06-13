const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userMessage = userInput.value.toLowerCase(); // Converter para minúsculas
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

// Objetos para diferentes tipos de respostas
const greetings = {
  'oi': 'Olá! Como posso ajudar?',
  'olá': 'Olá! Como posso ajudar?',
  'ola': 'Olá! Como posso ajudar?',
  'oie': 'Oi! Em que posso te ajudar?',
  'eai': 'E aí! Como posso ser útil?',
  'eae': 'E aê! Em que posso te ajudar?',
  'opa': 'Olá! Estou aqui para te ajudar!',
  'aoba': 'Aoba! Como posso ser útil?',
  'bom dia': 'Bom dia! Como posso te ajudar?',
  'boa tarde': 'Boa tarde! Em que posso te auxiliar?',
  'boa noite': 'Boa noite! Precisa de alguma ajuda?',
  'como você está': 'Estou bem, obrigada por perguntar! 😊',
  'tudo bem': 'Sim, estou bem! 😃',
  'está tudo bem': 'Sim, estou bem! 😊',
  'tudo certo': 'Sim, estou bem! 😃',
  'como tem passado': 'Estou indo bem, obrigada por perguntar! 😊',
  'como vai': 'Estou indo bem, obrigada por perguntar! 😊',
  'td bom': 'Tudo ótimo! 😊',
  'tudo bão': 'Tudo ótimo! 😊',
  'td bão': 'Tudo ótimo! 😊'
};

const botInfo = {
  'seu nome': 'Sei lá... pergunta para Carlos.',
  'sobre você': 'Algumas curiosidades sobre mim são: a Monoma é uma assistente virtual criada por Kauê Vieira, nomeada por Carlos Henrique Borges e sua logo foi Feita Por Daline Soares, A Monoma foi criada para um projeto acadêmico sobre inteligência artificial.',
  'habilidade especial': 'Como uma assistente virtual, minha habilidade especial é ajudar os usuários com suas perguntas e tarefas, posso enviar imagens, vídeos e resolver contas envolvendo as operações básicas.',
  'função':'A Monoma é um chatbot inicialmente criado como parte de uma atividade acadêmica sobre inteligências artificiais. Sua função principal é interagir com os usuários, respondendo a perguntas com respostas pré-programadas. Embora seja limitada, a Monoma pode realizar cálculos matemáticos básicos, enviar vídeos, imagens, compartilhar frases filosóficas e fornecer fatos interessantes.',
  'o que você pode fazer': 'Na teoria eu poderia fornecer informações sobre diversos tópicos, responder perguntas e auxiliar em tarefas simples. No entanto, Kauê ficou com preguiça de criar mais códigos para me ensinar mais coisas 🥲. No momento posso resolver contas básicas de matemática, enviar imagens e vídeos.',
  'surgiu sua logo': 'Foi Daline que fez, Diga a ela que ficou bem legal! 😉',
};

const facts = [
  "A Antártida é o maior deserto do mundo.",
  "A lua cheia é mais brilhante do que a lua em qualquer outra fase.",
  "O DNA humano é aproximadamente 99,9% idêntico entre todas as pessoas.",
  "Os ursos polares são canhotos.",
  "O sol é cerca de 330.000 vezes mais massivo do que a Terra.",
  "O Japão flutua sobre sete placas tectônicas.",
  "Os elefantes são os únicos mamíferos que não podem pular.",
  "O azul é a cor mais quente da chama de uma vela.",
  "O Burj Khalifa, em Dubai, é o edifício mais alto do mundo.",
  "Os coelhos e os papagaios podem ver atrás de si sem mover a cabeça.",
  "Um mol é aproximadamente igual ao número de átomos de carbono em 12 gramas de carbono-12.",
  "Os golfinhos têm nomes próprios.",
  "A Grande Muralha da China não é visível da Lua a olho nu.",
  "Os ossos humanos são mais fortes do que o concreto.",
  "O olho humano é capaz de distinguir entre aproximadamente 10 milhões de cores.",
  "Orelhas e narizes nunca param de crescer.",
  "Os furacões raramente atingem a linha do equador.",
  "Os camelos têm três pálpebras para protegerem os olhos de tempestades de areia.",
  "Um único raio de um relâmpago é cinco vezes mais quente do que a superfície do sol.",
  "A Ilha de Páscoa é a localização mais remota de qualquer civilização do mundo."
];



const filosofia = [
  "Penso, logo existo. - René Descartes",
  "A vida é sem sentido sem a arte. - Platão",
  "A maior sabedoria é perceber a própria ignorância. - Sócrates",
  "O homem nasce livre, mas está aprisionado em todos os lugares. - Jean-Jacques Rousseau",
  "O conhecimento é poder. - Francis Bacon",
  "Só sei que nada sei. - Sócrates",
  "A vida é curta, mas a arte é longa. - Hipócrates",
  "O homem é a medida de todas as coisas. - Protágoras",
  "O que não nos mata nos torna mais fortes. - Friedrich Nietzsche",
  "Quem luta com monstros deve acautelar-se para não se tornar também um monstro. Quando se olha muito tempo para um abismo, o abismo olha para você. - Friedrich Nietzsche",
];


const iframes = [
  '<iframe width="0" height="0" src="https://www.youtube.com/embed/5iifwb4oc1g" title="você é o sigma da bahia? #shortvideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="435" height="245" src="https://www.youtube.com/embed/ibbTjZ6k37Q" title="LULA PHONK - FEIJÃO PURO METAMORPHOSIS • edit by @hidesz_17" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="435" height="241" src="https://www.youtube.com/embed/r_wjTjwyY6o" title="Memory reboot (Ultra slowed &amp; reverb)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="400" height="225" src="https://www.youtube.com/embed/YOz7dsnjS8U" title="Zé da Manga" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="438" height="246" src="https://www.youtube.com/embed/LaKbp8wuQus" title="Welcome To The Mato -  Mas vários Personagens/Famosos Cantam  (AI, IA Cover)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="438" height="246" src="https://www.youtube.com/embed/HBGv61cJwrI" title="É ISSO QUE TE CAUSA TIMIDEZ E FOBIA SOCIAL (MOSTRANDO NA PRÁTICA)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
];

const images = [
  '<img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1." alt="Gatinho fofo" class="responsive-img">',
  '<img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cachorro" class="responsive-img">', 
  '<img src="https://images.pexels.com/photos/724507/pexels-photo-724507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="por do sol" class="responsive-img">', 
  '<img src="https://images.pexels.com/photos/3489072/pexels-photo-3489072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="lua" class="responsive-img">', 
  '<img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="IA" class="responsive-img">', 
  // '<img src="" alt="" class="responsive-img">', 
  // Adicione mais imagens conforme necessário
];


const customResponses = {
  'resposta_personalizada': 'Aqui está uma resposta personalizada para você!',
};



function getBotResponse(userMessage) {
  // Converter a mensagem do usuário para minúsculas
  const message = userMessage.toLowerCase();

  // Verificar saudações
  for (const greeting in greetings) {
    if (message.includes(greeting)) {
      return greetings[greeting];
    }
  }

  // Verificar informações sobre o bot
  for (const info in botInfo) {
    if (message.includes(info)) {
      return botInfo[info];
    }
  }

  // Verificar se o usuário solicita um fato aleatório
  if (message.includes('fato')) {
    const randomFactIndex = Math.floor(Math.random() * facts.length);
    return facts[randomFactIndex];
  }

  // Verificar se o usuário solicita uma frase filosofica aleatória
  if (message.includes('frase filosofica')) {
    const randomFilosofiaIndex = Math.floor(Math.random() * filosofia.length);
    return filosofia[randomFilosofiaIndex];
  }

  // Verificar iframes
  if (message.includes('video aleatorio')) {
    const randomIframesIndex = Math.floor(Math.random() * iframes.length);
    return iframes[randomIframesIndex];
  }

  // Verificar imagens
  for (const image in images) {
    if (message.includes(image)) {
      return images[image];
    }
  }

  if (message.includes('imagem aleatoria')) {
    const randomImagemIndex = Math.floor(Math.random() * images.length);
    return images[randomImagemIndex];
  }

  // Verificar outras respostas personalizadas
  for (const response in customResponses) {
    if (message.includes(response)) {
      return customResponses[response];
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
        const num1 = parseFloat(numeros[0]);
        const num2 = parseFloat(numeros[1]);
        const resultado = calcularOperacao(operacaoEncontrada, num1, num2);
        return `${resultado}. Achei fácil 😎`;
      } else {
        return 'Por favor, forneça dois números para calcular.';
      }
    } else {
      return 'Desculpe, não entendi. Por favor, tente fornecer a operação matemática (adição, subtração, multiplicação ou divisão) seguida de dois números. Usando a função: Calcule Número1, Operação matemática(mais, menos, vezes, dividido) Número2. ';
    }
  }else {
    const suggestions = [
      'Me conte um fato interessante.',
      'Me envie uma frase filosofica.',
      'Me envie um video aleatorio.',
      'Me envie uma imagem aleatoria.',
      'Por que o seu nome é Monoma?',
      'Quais são algumas curiosidades sobre você?',
      'A Monoma tem alguma habilidade especial?',
      'Qual é a função da Monoma?',
      'Como surgiu sua logo?',
      'Faça um cálculo matemático (por exemplo: "Calcule 29 dividido por 2").'
    ];

    let suggestionMessage = 'Desculpe, não entendi, verifique se você está digitando da maneira correta. Aqui está uma lista de sugestões do que você pode me pedir:\n\n';
    suggestions.forEach((suggestion, index) => {
      suggestionMessage += `${index + 1}. ${suggestion}\n`;
    });

    return suggestionMessage;
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
    botLogo.src = 'imagens/monoma.png'; // Substitua pelo caminho da sua logo
    botLogo.classList.add('bot-logo');
    botLogoContainer.appendChild(botLogo);

    const botInfo = document.createElement('span');
    botInfo.classList.add('bot-info');
    botInfo.innerText = 'Monoma';
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
