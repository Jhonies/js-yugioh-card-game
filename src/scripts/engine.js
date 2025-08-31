const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById('score_points'),
  },
  cardSprites: {
    avatar: document.getElementById('card-image'),
    name: document.getElementById('card-name'),
    type: document.getElementById('card-type'),
  },
  fieldCards: {
    player: document.getElementById('player-field-card'),
    computer: document.getElementById('computer-field-card'),
  },
  playerSides: {
    player1: document.querySelector('#player-cards'),
    computer: document.querySelector('#computer-cards'),
  },
  actions: {
    button: document.getElementById('next-duel'),
  },
};

const pathImages = "./src/assets/icons/";
const cardData = [
  {
    id: 0,
    name: "Blue-Eyes White Dragon",
    type: "Paper",
    img: `${pathImages}dragon.png`,
    WinOf: [1],
    LoseOf: [2],
  },
  {
    id: 1,
    name: "Dark Magician",
    type: "Rock",
    img: `${pathImages}magician.png`,
    WinOf: [2],
    LoseOf: [0],
  },
  {
    id: 2,
    name: "Exodia",
    type: "Scissors",
    img: `${pathImages}exodia.png`,
    WinOf: [0],
    LoseOf: [1],
  },
];

const playerSides = {
  player1: "player-cards",
  computer: "computer-cards",
};

async function getRandomCardId() {
  const randomIndex = Math.floor(Math.random() * cardData.length);
  return cardData[randomIndex].id;
}

async function createCardImage(cardId, fieldSide) {
  const cardImage = document.createElement("img");
  cardImage.setAttribute("height", "100px");
  cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
  cardImage.setAttribute("data-id", cardId);
  cardImage.classList.add("card");

  if (fieldSide === playerSides.player1) {
    cardImage.addEventListener("mouseover", () => drawSelectedCard(cardId));
    cardImage.addEventListener("click", () => setCardsInField(cardImage.getAttribute("data-id")));
  }

  return cardImage;
}

async function setCardsInField(cardId) {
  await removeAllCardsImages();
  cardId = parseInt(cardId);
  
  const computerCardId = await getRandomCardId();

  await showCardFieldsImages(true);
  await hideCardDetails();

  state.fieldCards.player.src = cardData[cardId].img;
  state.fieldCards.computer.src = cardData[computerCardId].img;

  const duelResults = await checkDuelResults(cardId, computerCardId);
  await updateScore();
  await drawButton(duelResults);
}

async function hideCardDetails() {
  state.cardSprites.avatar.src = "";
  state.cardSprites.name.innerText = "Selecione";
  state.cardSprites.type.innerText = "uma carta";
}

async function showCardFieldsImages(value) {
  state.fieldCards.player.style.display = value ? "block" : "none";
  state.fieldCards.computer.style.display = value ? "block" : "none";
}

async function updateScore() {
  state.score.scoreBox.innerText = `Win : ${state.score.playerScore} Lose: ${state.score.computerScore}`;
}

async function drawButton(text) {
  state.actions.button.innerText = text.toUpperCase();
  state.actions.button.style.display = "block";
}

async function checkDuelResults(playerCardId, computerCardId) {
  const playerCard = cardData[playerCardId];
  let duelResults = "draw";

  if (playerCard.WinOf.includes(computerCardId)) {
    duelResults = "win";
    state.score.playerScore++;
  } else if (playerCard.LoseOf.includes(computerCardId)) {
    duelResults = "lose";
    state.score.computerScore++;
  }

  await playAudio(duelResults);
  return duelResults;
}

async function removeAllCardsImages() {
  let imgElements = state.playerSides.computer.querySelectorAll("img");
  imgElements.forEach((img) => img.remove());

  imgElements = state.playerSides.player1.querySelectorAll("img");
  imgElements.forEach((img) => img.remove());
}

async function drawSelectedCard(index) {
  state.cardSprites.avatar.src = cardData[index].img;
  state.cardSprites.name.innerText = cardData[index].name;
  state.cardSprites.type.innerText = "Attribute: " + cardData[index].type;
}

async function drawCards(qtdCards, fieldSide) {
  for (let i = 0; i < qtdCards; i++) {
    const randomCardId = await getRandomCardId();
    const cardImage = await createCardImage(randomCardId, fieldSide);
    document.getElementById(fieldSide).appendChild(cardImage);
  }
}

async function resetDuel() {
  state.cardSprites.avatar.src = "";
  state.actions.button.style.display = "none";
  showCardFieldsImages(false);
  init();
}

async function playAudio(status) {
  const audio = new Audio(`./src/assets/audios/${status}.wav`);
  try {
    audio.play();
    audio.volume = 0.2;
  } catch (error) {
    console.log("Audio not playing yet:", error);
  }
}

function init() {
  showCardFieldsImages(false);
  drawCards(5, playerSides.player1);
  drawCards(5, playerSides.computer);

  const bgm = document.getElementById("bgm");
  bgm.play();
  bgm.volume = 0.3;
}

init();
