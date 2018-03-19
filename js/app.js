/*
 * Create a list that holds all of your cards
 */
 // jQuery shortcut selectors 
// Skróty do jQuery
const fieldGame = document.querySelector('.container');

const scorePanel = document.querySelector('.score-panel');
const listOfCard = document.querySelectorAll('.fa-star');
//const rating = $('.fa-star');
const moves = document.querySelector('.moves');
const timer = document.querySelector('.timer');
const restart = document.querySelector('.restart');
const deck = document.querySelector('.deck');


// List of all cards 
let cardDesk = [
    'fa-diamond',
    'fa-diamond',
    'fa-paper-plane-o',
    'fa-paper-plane-o',
    'fa-anchor',
    'fa-anchor', 
    'fa-bolt',
    'fa-bolt', 
    'fa-cube',
    'fa-cube',
    'fa-anchor',
    'fa-anchor',  
    'fa-leaf',
    'fa-leaf',
    'fa-bicycle',
    'fa-bicycle'
];

const numberOfCard = cardDesk.length;
//console.log(restart, numberOfCard);
//console.dir(listOfCard);
//console.dir(cardDesk);

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
console.log(shuffle(cardDesk));

//push className to index.HTML
function changeClassNameOfCard(array){
    let changeCardElement = Array.from(deck.children);
    for (let i = 0; i < changeCardElement.length; i++) {
     console.log(changeCardElement[i]);
   }
}

changeClassNameOfCard(cardDesk);



//document.addEventListener('DOMContentLoaded',(e)=>{
 
    
    
  
    let startTimer = function(event){

    let pressRestart = event.target.parentNode.parentNode;
    let restart = document.querySelector('.restart');
    console.log(pressRestart);
    //timer.innerHTML = '';

    let timer = document.createElement('span');
     timer.className = "timer";
     //document.querySelector('.timer').innerHTML = "";
     let listoftime = document.createElement('ul');
     let lisOfMinutes = document.createElement('li');
     let toogleDot = document.createElement('li');
     let listOfSecunds = document.createElement('li');
      
     timer.appendChild(listoftime);
     listoftime.appendChild(lisOfMinutes);
     listoftime.appendChild(toogleDot);
     listoftime.appendChild(listOfSecunds);
     
     listoftime.style.display = "inline-block";
     lisOfMinutes.className = 'minutes';
     toogleDot.className = 'dot';
     listOfSecunds.className = 'secunds';

     toogleDot.innerHTML = ":";
     lisOfMinutes.innerHTML = "00";
     listOfSecunds.innerHTML = "00";
     console.log(timer);

         if (document.querySelector('.timer')=== null) {
            scorePanel.insertBefore(timer,restart);
        }

    restart.addEventListener('click', startTimer);

    
        }
   //}


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
/*function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
