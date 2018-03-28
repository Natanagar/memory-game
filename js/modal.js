const fieldGame = document.querySelector('.container');



let createModalWindow = function(){
  let div = document.createElement('div');
    div.classList = "modal"
    let innerDiv = document.createElement('div');
    div.appendChild(innerDiv);
    let textModalWindow = document.createElement('div');
    textModalWindow.classList = "text";
    innerDiv.appendChild(textModalWindow);
    textModalWindow.innerHTML =`You win!  15 moves used, It took you 15 minutes. If you want to play again, press x`;
    let closeWindow = document.createElement('span');
    closeWindow.classList = "btn";
    let closeIcon = document.createElement('i')
    closeIcon.classList = "fa fa-times";
    closeIcon.setAttribute('aria-hidden', 'true');
    closeWindow.appendChild(closeIcon);
    //console.log(div);
    fieldGame.appendChild(div);
    innerDiv.appendChild(closeWindow);
    console.log(div);
}();
