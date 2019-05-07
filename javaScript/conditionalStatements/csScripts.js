// if statement
function go1(){
    for (var i = 0; i < 3; i++){
        alert("Click!: "+i+" / 3")

        if ( i = 1){
            alert("First Click: "+i+" /3");
        }
        if ( i = 2){
            alert("Second Click: "+i+" /3");
        }
        if ( i = 3){
            alert("Third Click: "+i+" /3");
        }
    }
}

// else statement
function go2(){
    for (var i = 0; i < 5; i++){

        if ( i < 3 ){
            alert("less then three: "+i+" /5");
        }

        else{
            alert("three or more than three: "+i+" /5");
        }
    }
}

// else if statement
function go3(){
    var number = document.getElementById("myInput").value;
    var text;
    
    if (number === "1" || number === "2" ) {
        text = "Number is less than three";
    
  } else if (number === "3") {
    text = "Number is Three";
    
  } else {
    text = "Number is above three";
  }
  document.getElementById("demo").innerHTML = text;
}