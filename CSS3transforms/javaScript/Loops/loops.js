//while loop
function go(){
  var x = 0; 
  while(x<=5){
    alert("Click Again!: "+x+" / 5")
    x++}
}

//do while loop
function go2(){
  var x = 0;
  do {
    x++;
    alert("Click Again!: "+x+" / 5");
  } while (x <= 5);
}

// for loop
function go3(){
  for (var i = 0; i < 5; i++){
    alert("Click Again!: "+i+" / 5")
  }
}

// for/in loop
function go4(){
  var date = {month: "May", day: "20th", year: 2019};
  var text = "";
  for (x in date) {
    alert(text += date[x] + " ");
  }
}

// for/of loop
function go5(){
  var date = [3, 5, 7];
  var text = "";
  for (let x of date) {
    x += " ";
    alert(text += date[x] + " ");
  }
}

// parameters
function go6(a = 5,b = 5,c = a*b){
  alert( a + " " + "*" + " " + b + " " + "=" + " " + c);
}