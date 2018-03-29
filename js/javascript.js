// Lists of all const and variables;
const fieldGame = document.querySelector(".container");

const scorePanel = document.querySelector(".score-panel");
const listOfCard = document.querySelectorAll(".fa-star");
//const rating = $('.fa-star');
const moves = document.querySelector(".moves");
const timer = document.querySelector(".timer");
const restart = document.querySelector(".restart");
const deck = document.querySelector(".deck");
const stars = document.querySelector(".stars");
//empties arrays for elements and value of card
let valueCards = [];
let openCards = [];
let matchCards = [];
let counter = 0;
let counterRating = 0;
let myTimer;
let accessEvents = true;

// List of all cards
let cardDesk = [
  "fa fa-diamond",
  "fa fa-diamond",
  "fa fa-paper-plane-o",
  "fa fa-paper-plane-o",
  "fa fa-anchor",
  "fa fa-anchor",
  "fa fa-bolt",
  "fa fa-bolt",
  "fa fa-cube",
  "fa fa-cube",
  "fa fa-bomb",
  "fa fa-bomb",
  "fa fa-leaf",
  "fa fa-leaf",
  "fa fa-bicycle",
  "fa fa-bicycle"
];

const numberOfCard = cardDesk.length;
//create modal window
let createModalWindow = function() {
  accessEvents = false;

  //outer div
  let div = document.createElement('div');
    div.classList = "modal"

    //inner div with content
    let inner = document.createElement('div');
    div.appendChild(inner);
    inner.classList = "modal-content";
    //button with awesome icon
    let closeWindow = document.createElement('span');
    closeWindow.classList = "btn";
    let closeIcon = document.createElement('i')
    closeIcon.classList = "fa fa-times";
    closeIcon.setAttribute('aria-hidden', 'true');
    closeWindow.appendChild(closeIcon);
    inner.appendChild(closeWindow);
    fieldGame.appendChild(div);


    let contextText = document.createElement('p');
    contextText.innerHTML =`You win!  ${counter} moves used, It took you ${timer.innerHTML} minutes. You rating ${counterRating} stars`
    inner.appendChild(contextText);
    let offerRestart= document.createElement('p');
    offerRestart.innerHTML = ` If you want to play again, press x and after that press restart. Additional information about rating: If you ended game for 15 steps, you've taken three stars. If you ended game for 25 steps, you've taken two stars. If you have more than 25 steps, you've taken only one star`;
    inner.appendChild(offerRestart);
    //console.log(div);
    let crossPress = document.querySelector('.btn');
    crossPress.onclick = function(e){
      removeModal();
    }
    return div;
};

//remove modal window

let removeModal = function(element){
  let modalWindow = document.querySelector('.modal');
  modalWindow.style.display = "none";
  accessEvents = true;
  hideCards();
  shuffle(cardDesk);
  changeClassNameOfCard(elem = cardDesk);
  console.log(cardDesk);
  counter = 0;
  startTimer(myTimer);
  return accessEvents;
}


//array from cards sort with mathRandom (Fisher–Yates Shuffle)
function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

//push className to index.HTML
function changeClassNameOfCard(array, elem = cardDesk) {
  shuffle(cardDesk);
  let changeCardElement = Array.from(deck.children);
  //console.log(cardDesk);
  for (let i = 0; i < changeCardElement.length; i++) {
    changeCardElement[i].firstElementChild.setAttribute(
      "class",
      `${cardDesk[i]}`
    );
  }
}

changeClassNameOfCard(cardDesk);
//remove open class
let removeOpen = function(elements) {
  let openCards = document.querySelectorAll(".open");
  for (opencard of openCards) {
    opencard.classList.remove("open");
  }
};
//remove show class
let removeShow = function(elements) {
  let removeClasses = document.querySelectorAll(".show");
  for (removeClass of removeClasses) {
    removeClass.classList.remove("show");
  }
};
//remove match class
let removeMatch = function(elements) {
  let winCards = Array.from(document.querySelectorAll(".match"));
  for (card of winCards) {
    card.classList.remove("match");
  }
};

let removeOff = function(elements) {
  let offElements = document.querySelectorAll(".off");
  for (offElement of offElements) {
    offElement.classList.remove("off");
  }
};
let hideCards = function(elements) {
  moves.innerHTML = "0";
  removeOpen();
  removeShow();
  removeMatch();
};
//start timer
function startTimer() {
  minutes = 0;
  let i = 1;

  myTimer = setInterval(function() {
    if (i < 10) {
      timer.innerHTML = `${minutes}:0${i}`;
    } else {
      timer.innerHTML = `${minutes}:${i}`;
    }
    if (i == 59) {
      minutes++;
      i = 0;
    } else {
      i++;
    }
  }, 1000);
}

//stop timer
function stopTimer(aTimer) {
  clearInterval(aTimer);
}

//reduction of the steps to counter
let reduction = function(array, counter){
  if (array[0] === array[1]){
    counter--;
  }

}

//update counter
let updateStars = function(elements) {
  if (counter <= 15) {
    counterRating = 3;
    stars.firstElementChild.firstElementChild.style.display = "block";
    stars.firstElementChild.nextElementSibling.firstElementChild.style.display =
      "block";
    stars.lastElementChild.firstElementChild.style.display = "block";
  } else if (counter > 15 && counter <= 25) {
    stars.firstElementChild.firstElementChild.style.display = "block";
    stars.firstElementChild.nextElementSibling.firstElementChild.style.display =
      "block";
    stars.lastElementChild.firstElementChild.style.display = "none";
    counterRating = 2;
  } else if (counter > 25) {
    stars.firstElementChild.firstElementChild.style.display = "block";
    stars.firstElementChild.nextElementSibling.firstElementChild.style.display =
      "none";
    stars.lastElementChild.firstElementChild.style.display = "none";
    counterRating = 1;
  }
  return counterRating;
};

//if we have a two different cards
let differentCards = function(array = openCards) {
  //console.log(openCards);
  openCards[0].classList.remove("open", "show");
  openCards[1].classList.remove("open", "show");
  removeOff();
  //delete all elements from elements array;
  openCards = [];
  accessEvents = true;
};

//if we have a two same cards
let sameCard = function(array = openCards) {
  for (let i = 0; i < openCards.length; i++) {
    openCards[i].classList.remove("open");
    openCards[i].classList.add("match", "off");
    matchCards.push(openCards[i]);
  }
  //delete all elements from elements array;
  openCards = [];
  accessEvents = true;

  //function winner;
  conditionOfWinnings(matchCards);
};

let conditionOfWinnings = function(array) {
  //console.log(i);
  if (array.length == 16) {
    stopTimer(myTimer);
    createModalWindow();
  }
};

document.addEventListener("DOMContentLoaded", e => {
  hideCards();
  startTimer();

  //restart game
  let shuffleDeck = function(e, elem = cardDesk) {
    stopTimer(myTimer);
    startTimer(myTimer);
    console.log("Hura!");
    moves.innerHTML = "0";
    counter = 0;
    updateStars();
    removeMatch();
    removeShow();
    removeOff();
    changeClassNameOfCard(cardDesk);
  };

  //open two card and comparsion those value
  let openTwoCards = function(elements = deck.children, array = valueCards) {
    if (accessEvents == true) {
      //add class .open and .show
      let showCard = event.target;
      showCard.classList.add("open");
      showCard.classList.add("show");
      showCard.classList.add("off");

      //add elements to array (elements and value of cards)
      openCards.push(showCard);
      let targetCard = showCard.firstElementChild.getAttribute("class");
      valueCards.push(targetCard);
      //if we have two cards
      if (valueCards.length === 2) {
        reduction(array=showCard);
        // access to events
        accessEvents = false;

        //add function callback (rating)
        let counterFunction = (function(elem = moves) {
        counter++;
        moves.innerHTML = counter;
        //console.log(stars, counter);
        updateStars();
        })();

        //compare two values card
        let compareTwoCards = (function(array = valueCards) {
          if (`${valueCards[0]}` === `${valueCards[1]}`) {
            console.log("You win!");
            valueCards = [];
            setTimeout(sameCard, 1000);
          } else {
            console.log("You lost!");
            valueCards = [];
            setTimeout(differentCards, 1000);
          }
        })();
      }
    }
  };

  deck.addEventListener("click", openTwoCards);
  restart.addEventListener("click", shuffleDeck);
});
