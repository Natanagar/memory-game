const timer = document.querySelector('.timer');
console.log(timer);


function startTimer() {
  minutes = 0;
  let i = 1;
  var timerId = setInterval(function() {
    if(i<10){
      timer.innerHTML=`${minutes}:0${i}`;
    } else {
      timer.innerHTML=`${minutes}:${i}`;
    }

    if (i == 59) clearInterval(timerId);
    i++;
  }, 1000);
}

// вызов
startTimer();




/*let startTimer = function(){
  let secunds = 0;
  let minutes = 0;

let timerId = setInterval(() => {
  // Todo...
}, ms)




 secunds++;
      if (secunds<10){
        timer.innerHTML = `${minutes};0${secunds}`
      } else {
        timer.innerHTML = `${minutes}:${secunds}`
      }
}, 1000)


  let start = function(){
    for (let i = 0; i <= 59; i++) {

        return setInterval(()=>{
          start
        }, 1000);
    }*/


