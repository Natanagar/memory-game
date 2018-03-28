const fieldGame = document.querySelector('.container');



let createModalWindow = function(){
  //outer div
  let div = document.createElement('div');
    div.classList = "modal"
    //inner div with content
    let innerDiv = document.createElement('div');
    div.appendChild(innerDiv);
    innerDiv.classList = "modal-content";
    //button with awesome icon
    let closeWindow = document.createElement('span');
    closeWindow.classList = "btn";
    let closeIcon = document.createElement('i')
    closeIcon.classList = "fa fa-times";
    closeIcon.setAttribute('aria-hidden', 'true');
    closeWindow.appendChild(closeIcon);
    innerDiv.appendChild(closeWindow);

    let contextText = document.createElement('p');
    contextText.innerHTML =`You win!  15 moves used, It took you 15 minutes.`
    let offerRestart= document.createElement('p');
    offerRestart.innerHTML = ` If you want to play again, press x`;
    closeWindow.appendChild(contextText);
    closeWindow.appendChild(offerRestart);

    //console.log(div);
    fieldGame.appendChild(div);
    innerDiv.appendChild(closeWindow);
    console.log(div);
}();
