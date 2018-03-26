// Lists of all const and variable;
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

//cursor blocking
//let blockinCurcor = function(){

//}

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

//function winner
let conditionOfWinnings = function(array){
  //console.log(counter);
  if (array.length == 16) {
    let div = document.createElement('div');
    div.classList = "alert success"
    div.innerHTML =`You're winner!  Only ${counter} moves`;
    console.log(div);
    fieldGame.appendChild(div);
  }
}


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
//console.log(matchCards);
for (let i = 0; i<openCards.length; i++) {
  //console.log(openCards[i]);
  openCards[i].classList.remove('open');
  openCards[i].classList.add('match', 'off');
  matchCards.push(openCards[i]);
  //delete all elements from elements array;
  }
  //console.log(matchCards);
  openCards=[];

  //function winner;
  conditionOfWinnings(matchCards);
}

//if we have a two different cards
let differentCards = function(array = openCards){
  //console.log(openCards);
  openCards[0].classList.remove('open', 'show');
  openCards[1].classList.remove('open', 'show');
   //delete all elements from elements array;
  openCards=[];
}

//after restart shuffle deck of card
let shuffleDeck = function(e, elem = cardDesk){
counter = 0;
updateStars();
changeClassNameOfCard(elem = cardDesk);

let hideCards = function(elements){
  const deck = Array.from(document.querySelector('.deck').children);
  //console.log(deck);
  for(card of deck){
    card.classList.remove('open');
    card.classList.remove('show');
  }


  let winCards = Array.from(document.querySelectorAll('.match'));
  for(card of winCards){
  card.classList.remove('match');
        }
  }();
}

// listen deck and comparing two cards
let openTwoCards = function(elements = deck.children, array = valueCards){

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
//console.log(valueCards,openCards);

            //if we have two cards
            if (valueCards.length === 2) {
              //compare two values card
              let compareTwoCards = function(array = valueCards){
                if (`${valueCards[0]}`=== `${valueCards[1]}`) {
                  console.log('You are win!');
                  valueCards=[];
                  setTimeout (sameCard, 2000);
                } else {
                  console.log('You are lost!');
                  valueCards=[];
                  setTimeout (differentCards, 2000);
                }

              }();
            }
          }





deck.addEventListener('click', openTwoCards);
restart.addEventListener('click', shuffleDeck);
});



/*  let startTimer = function(event){

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
        }*/


