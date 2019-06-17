// CHANGE BACKGROUND COLOR
function dance(){
    document.getElementById('batStanding').className = "danceBatman";
 
}

// FADE IN AND OUT
function fadeIn(){
    var elem = document.getElementById('batSignal');
    elem.style.opacity = '1';
}


//SLIDE OPEN AND CLOSE
function swingIn(){
    document.getElementById('bigBatman').className ='swingingBatman';
  }


//Transition in and out
function slideIn(){
    var elem = document.getElementById('swoopIn');
    elem.style.left = "50px";
}


