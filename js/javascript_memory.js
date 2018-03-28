
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


document.addEventListener('DOMContentLoaded', (e) => {
  hideCards();

  startTimer(myTimer);
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
  }, 2000)




let openTwoCards = function(e){
  console.log('Hura!');

}









deck.addEventListener('click', openTwoCards);
});
