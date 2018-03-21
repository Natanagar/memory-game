// Lists of all const and variable;
const fieldGame = document.querySelector('.container');

const scorePanel = document.querySelector('.score-panel');
const listOfCard = document.querySelectorAll('.fa-star');
//const rating = $('.fa-star');
const moves = document.querySelector('.moves');
const timer = document.querySelector('.timer');
const restart = document.querySelector('.restart');
const deck = document.querySelector('.deck');
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
            
            //delete classes after reload
            let listOfTheSameCard = Array.from(document.querySelectorAll('.match'));    
             for(let i=0; i<listOfTheSameCard.length;i++){
              listOfTheSameCard[i].classList.remove('match');
             } 
              document.querySelector('.open').classList.remove('open');
              document.querySelector('.show').classList.remove('show');


               //after restart shuffle deck of card
               let shuffleDeck = function(e, elem = cardDesk){
                changeClassNameOfCard(elem = cardDesk);
               }

               //if we have a two same cards
               let sameCard = function(array = openCards){
                console.log(openCards);
                for (let i = 0; i<openCards.length; i++) {
                  openCards[i].classList.remove('open');
                  openCards[i].classList.add('match');
                }
               }

               //if we have a two different cards
               let differentCards = function(array = openCards){
                console.log(openCards);
                openCards[1].classList.remove('open');
                openCards[1].classList.remove('show');
               }

   

           //open show and compare two cards
           let openTwoCards = function(elements = deck.children, array = valueCards){
            //add class .open and .show
            let showElement = event.target;
            showElement.classList.add('open');
            showElement.classList.add('show');
          
            //add elements to array (elements and value of cards)  
            openCards.push(showElement);
            let targetCard = showElement.firstElementChild.getAttribute('class');
            valueCards.push(targetCard);
            console.log(valueCards,openCards);
            
            //if we have two cards
            if (valueCards.length === 2) {
              //compare two values card 
             let compareTwoCards = function(array = valueCards){
                if (`${valueCards[0]}`=== `${valueCards[1]}`) {
                    console.log('You are win!');
                    delete valueCards[0];
                    delete valueCards[1];
                    sameCard();
                } else {
                    console.log('You are lost!');
                    delete valueCards[0];
                    differentCards();
                }
               
              }();
        }
    }

   deck.addEventListener('click', openTwoCards);
   restart.addEventListener('click', shuffleDeck);
});

	
  /*
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
            scorePanel.insertBefore(timer, restart);
        }

 




 	restart.addEventListener('click', startTimer);

    	}
	}
*/

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */



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
