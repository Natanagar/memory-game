// Lists of all const and variable;
const fieldGame = document.querySelector('.container');

const scorePanel = document.querySelector('.score-panel');
const listOfCard = document.querySelectorAll('.fa-star');
//const rating = $('.fa-star');
const moves = document.querySelector('.moves');
const timer = document.querySelector('.timer');
const restart = document.querySelector('.restart');
const deck = document.querySelector('.deck');
//empties arrays for elements and value of card
let valueCards = [];
let openCards =[];


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

//cardDesk.length
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

//push className to index.HTML
function changeClassNameOfCard(array, elem = cardDesk){
  shuffle(cardDesk);
    let changeCardElement = Array.from(deck.children);
    //console.log(cardDesk);
      for(let i=0; i<changeCardElement.length; i++){
      changeCardElement[i].firstElementChild.setAttribute('class', `${cardDesk[i]}`);
      //changeCardElement[i].firstElementChild.className(`${changeCardElement[i]}`);
      //console.log(changeCardElement[i].firstElementChild);
    }

}

changeClassNameOfCard(cardDesk);



document.addEventListener('DOMContentLoaded',(e) => {
//delete all additional classes
let hideCards = function(elements){
  document.querySelector('.open').classList.remove('open');
  document.querySelector('.show').classList.remove('show');
  let winCards = Array.from(document.querySelectorAll('.match'));
  for(card of winCards){
  card.classList.remove('match');
  }

}();

//if we have a two same cards
let sameCard = function(array = openCards){
console.log(openCards);
for (let i = 0; i<openCards.length; i++) {
  openCards[i].classList.remove('open');
  openCards[i].classList.add('match');
  openCards[i].classList.add('off');
  }
}

//if we have a two different cards
let differentCards = function(array = openCards){
  console.log(openCards);
  openCards[0].classList.remove('open');
  openCards[0].classList.remove('show');
  openCards[1].classList.remove('open');
  openCards[1].classList.remove('show');
}

//after restart shuffle deck of card
let shuffleDeck = function(e, elem = cardDesk){
changeClassNameOfCard(elem = cardDesk);

}

// listen deck and comparing two cards
let openTwoCards = function(elements = deck.children, array = valueCards){

//add class .open and .show
let showCard = event.target;
showCard.classList.add('open');
showCard.classList.add('show');

//add elements to array (elements and value of cards)
openCards.push(showCard);
let targetCard = showCard.firstElementChild.getAttribute('class');
valueCards.push(targetCard);
console.log(valueCards,openCards);

            //if we have two cards
            if (valueCards.length === 2) {
              //compare two values card
              let compareTwoCards = function(array = valueCards){
                if (`${valueCards[0]}`=== `${valueCards[1]}`) {
                  console.log('You are win!');
                  valueCards=[];
                  sameCard();
                } else {
                  console.log('You are lost!');
                  valueCards=[];
                  differentCards();
                }

              }();
            }
          }





deck.addEventListener('click', openTwoCards);
restart.addEventListener('click', shuffleDeck);
});
