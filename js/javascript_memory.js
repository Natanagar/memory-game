
// Lists of all const and variables;
const fieldGame = document.querySelector('.container');

const scorePanel = document.querySelector('.score-panel');
const listOfCard = document.querySelectorAll('.fa-star');
//const rating = $('.fa-star');
const moves = document.querySelector('.moves');
const timer = document.querySelector('.timer');
const restart = document.querySelector('.restart');
const deck = document.querySelector('.deck');
const stars = document.querySelector('.stars');
//empties arrays for elements and value of card
let valueCards = [];
let openCards =[];
let matchCards = [];
let counter = 0;
let myTimer;
let accessEvents = true;

// List of all cards
let cardDesk = [
'fa fa-diamond',
'fa fa-diamond',
'fa fa-paper-plane-o',
'fa fa-paper-plane-o',
'fa fa-anchor',
'fa fa-anchor',
'fa fa-bolt',
'fa fa-bolt',
'fa fa-cube',
'fa fa-cube',
'fa fa-anchor',
'fa fa-anchor',
'fa fa-leaf',
'fa fa-leaf',
'fa fa-bicycle',
'fa fa-bicycle'
];

const numberOfCard = cardDesk.length;

//array from cards sort with mathRandom (Fisher–Yates Shuffle)
function shuffle(array) {
  var m = array.length, t, i;

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

let hideCards = function(elements){
    moves.innerHTML='0';
    document.querySelector('.open').classList.remove('open');
    document.querySelector('.show').classList.remove('show');
    let winCards = Array.from(document.querySelectorAll('.match'));
    for(card of winCards){
    card.classList.remove('match');
    }
}
//start timer
function startTimer() {
    minutes = 0;
    let i = 1;

    myTimer = setInterval(function() {

    if(i<10){
      timer.innerHTML=`${minutes}:0${i}`;
    } else {
      timer.innerHTML=`${minutes}:${i}`;
    }
    if(i == 59){
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
//inizialite timer
//myTimer = startTimer();


//update counter
let updateStars = function(elements){
  if(counter<=15){
    stars.firstElementChild.firstElementChild.classList = "fa fa-star-o";
    } else if(counter>15 && counter<=25) {
      stars.firstElementChild.nextElementSibling.firstElementChild.classList = "fa fa-star-o";
    } else if (counter>25){
      stars.lastElementChild.firstElementChild.classList = "fa fa-star-o";
    }
}

//if we have a two different cards
let differentCards = function(array = openCards){
  //console.log(openCards);
  openCards[0].classList.remove('open', 'show');
  openCards[1].classList.remove('open', 'show');
   //delete all elements from elements array;
  openCards=[];
  accessEvents = true;
}

//if we have a two same cards
let sameCard = function(array = openCards){
for (let i = 0; i<openCards.length; i++) {
    openCards[i].classList.remove('open');
    openCards[i].classList.add('match', 'off');
    matchCards.push(openCards[i]);
  }
  //delete all elements from elements array;
  openCards=[];
  accessEvents = true;

  //function winner;
  conditionOfWinnings(matchCards);
}

let conditionOfWinnings = function(array){
  //console.log(i);
  if (array.length == 16) {
    stopTimer(myTimer);
    let div = document.createElement('div');
    div.classList = "alert success"
    div.innerHTML =`You win!  ${counter} moves used, It took you ${timer.innerHTML} minutes`;
    console.log(div);
    fieldGame.appendChild(div);
  }
}

document.addEventListener('DOMContentLoaded', (e) => {
  hideCards();
startTimer();
  /*startTimer(myTimer);
  setTimeout(function() {
     if(accessEvents == false){
      stopTimer(myTimer);
    }

  }, 5000);

  console.log(accessEvents);
  setTimeout(() => {
    accessEvents = false;
    console.log(accessEvents);
    return accessEvents;// Todo...
  }, 2000)*/




let openTwoCards = function(elements = deck.children, array = valueCards){
if(accessEvents==true){
  //add class .open and .show
  let showCard = event.target;
  showCard.classList.add('open');
  showCard.classList.add('show');

  //add function callback (rating)
  let counterFunction = function(elem = moves){
    counter++;
    moves.innerHTML = counter;
    //console.log(stars, counter);
    updateStars();

  }();

  //add elements to array (elements and value of cards)
  openCards.push(showCard);
  let targetCard = showCard.firstElementChild.getAttribute('class');
  valueCards.push(targetCard);
         //if we have two cards
          if (valueCards.length === 2) {
          accessEvents = false;
          console.log(accessEvents);
          //compare two values card
          let compareTwoCards = function(array = valueCards){
          if (`${valueCards[0]}`=== `${valueCards[1]}`) {
          console.log('You win!');
          valueCards=[];
          setTimeout (sameCard, 2000);
          } else {
          console.log('You lost!');
          valueCards=[];
          setTimeout (differentCards, 2000);
          }

      }();
    }
  }
}














deck.addEventListener('click', openTwoCards);
});
