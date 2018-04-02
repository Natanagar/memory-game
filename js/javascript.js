// Lists of all const and variables;
const fieldGame = document.querySelector(".container");

const scorePanel = document.querySelector(".score-panel");
const listOfCard = document.querySelectorAll(".fa-star");
const moves = document.querySelector(".moves");
const timer = document.querySelector(".timer");
const restart = document.querySelector(".restart");
const deck = document.querySelector(".deck");
const stars = document.querySelector(".stars");
const modalWindow = document.querySelector(".modal");
const textRestart = document.querySelector(".alert-text");
const pressCross = document.querySelector(".btn");
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
let createModalWindow = function(elements = [textRestart, modalWindow, pressCross]) {
  accessEvents = false;
    textRestart.innerHTML =`You win!  ${counter} moves used, It took you ${timer.innerHTML} minutes. You rating ${counterRating} stars`;
    modalWindow.style.display="block";
    pressCross.onclick = function(event, elements){
      modalWindow.style.display ="none";
      accessEvents = true;
      hideCards();
      shuffle(cardDesk);
      changeClassNameOfCard(elem = cardDesk);
      console.log(cardDesk);
      counter = 0;
      startTimer(myTimer);
      return accessEvents;
    }
};

//remove modal window

/*let removeModal = function(element){
  let modalWindow = document.querySelector('.modal');
  console.log(modalWindow);
  modalWindow.remove();
  accessEvents = true;
  hideCards();
  shuffle(cardDesk);
  changeClassNameOfCard(elem = cardDesk);
  console.log(cardDesk);
  counter = 0;
  startTimer(myTimer);
  return accessEvents;
}*/


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
  let classRemoves = Array.from(document.querySelectorAll(".off"));
  for(classRemove of classRemoves){
    classRemove.classList.remove("off");
  }
}

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

  if (array[0].classList == "off" && array[1].classList== "off"){
    if(array[0] === array[1]){
      counter--;
    }

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
  //removeOff();
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
  //console.log(matchCards);
  //function winner;
  conditionOfWinnings(matchCards);
};

let conditionOfWinnings = function(array) {
  //console.log(i);
  if (array.length == 16) {
    matchCards = [];
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
  let openTwoCards = function(event, elements){ //= deck.children, array = valueCards) {
    if (accessEvents == true) {
      //add class .open and .show
      let showCard = event.target||event.srcElement;
      //console.log(showCard);
      if(showCard.classList.contains('deck')){
        //console.log('You clicked matched card, event bubbled, skipping the event...');
        event.stopPropagation();
      } else if (showCard.classList.contains('fa')) {
        //console.log('You clicked matched card, event captured, skipping the event...');
        event.stopPropagation();
      } else {
      //console.log(`${showCard.classList} selected`);
      showCard.classList.add("open");
      showCard.classList.add("show");


      //add elements to array (elements and value of cards)
      openCards.push(showCard);
      let targetCard = showCard.firstElementChild.getAttribute("class");
      valueCards.push(targetCard);


      //if we have two cards
      if (valueCards.length === 2){
        //console.log(valueCards, openCards);
         // access to events
          accessEvents = false;
          reduction(openCards);


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
      }
  };

  deck.addEventListener("click", openTwoCards);
  restart.addEventListener("click", shuffleDeck);
});
