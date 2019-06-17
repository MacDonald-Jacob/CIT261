//Global objects containing CSS style values.
var i = 0;
var bgcolors = ['black', 'gold', 'teal'];

//Function that slides a picture in onload
function slideIn(){
    var elem = document.getElementById('swoopIn');
    elem.style.left = "550px";
}


//Function that goes through the background colors in the array using onclick
function bckgColor(){
    if (i > bgcolors.length) {i = 0; }
    document.getElementById("batman").style.backgroundColor = bgcolors[i];
    i++;
}


//change text with mouseover and mouseout
function mOver(obj) {
    obj.innerHTML = "Here he comes!"
    obj.style.width = "500px";
    obj.style.height = "80px";
    obj.style.color = "black";
    obj.style.fontSize = "50px";
    obj.style.backgroundColor = "yellow";
}
function mOut(obj) {
    obj.innerHTML = "We are saved!"
    obj.style.width = "170px";
    obj.style.height = "20px";
    obj.style.color = "white";
    obj.style.fontSize = "20px";
    obj.style.backgroundColor = "black";
}

//change input to uppercase
function upperCase() {
    var input = document.getElementById("fname");
    input.value = input.value.toUpperCase();
}

// move and change background color
function dance(){
    document.getElementById('batStanding').className = "danceBatman";
}

// rotate and inlarge
function dance2(){
    document.getElementById('batStanding2').className = "danceBatman2";
}

// Skew image
function dance3(){
    document.getElementById('batStanding3').className = "danceBatman3";
}

// function to slide out with touchmove
function slideOut(el){
    var elem = document.getElementById(el);
    elem.style.transition = "left 2.0s ease-out 0s";
    elem.style.left = "-2500px";
}