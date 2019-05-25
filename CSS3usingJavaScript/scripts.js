
//Global objects containing CSS style values.
var i = 0;
var colors = ['blue', 'red', 'gold', 'black', 'purple'];
var fonts = ['Sans-serif', 'Verdana', 'Times New Roman', 'Courier New', 'Lucida Console'];
var bgcolors = ['black', 'gold', 'teal'];

//Function that goes through the background colors in the array
function bckgColor(){
    if (i > bgcolors.length) {i = 0; }
    document.getElementById("batman").style.backgroundColor = bgcolors[i];
    i++;
}

//hide img and show image
function hideMe() {
    document.getElementById("batman").style.visibility = "hidden";
}
function showMe() {
    document.getElementById("batman").style.visibility = "visible";

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

//change font of page
function fontChange(){
    if (i > fonts.length) {i = 0; }
    document.getElementById("entirePage").style.fontFamily = fonts[i];
    i++;
}