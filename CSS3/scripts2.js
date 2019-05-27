// CHANGE BACKGROUND COLOR
function changeBG(el,clr){
    var elem = document.getElementById(el);
    //transition             property - duration - timing - delay 
    elem.style.transition = "background 1.0s linear 0s";
    elem.style.background = clr;
}

// FADE IN AND OUT
function fadeOut(){
    var elem = document.getElementById(el);
}


//SLIDE OPEN AND CLOSE
function slideOpen(el){
    var elem = document.getElementById(el);
    elem.style.transition = "height 1.0s linear 0s";
    elem.style.height = "300px";
}
function slideShut(el){
    var elem = document.getElementById(el);
    elem.style.transition = "height 1.0s linear 0s";
    elem.style.height = "0px";
}

//Transition in and out
function slideIn(el){
    var elem = document.getElementById(el);
    elem.style.transition = "left 1.0s ease-in 0s";
    elem.style.left = "50px";
}
function slideOut(el){
    var elem = document.getElementById(el);
    elem.style.transition = "left 1.0s ease-out 0s";
    elem.style.left = "-600px";
}
