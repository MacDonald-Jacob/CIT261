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
    var score = document.getElementById("myInput").value;
    var text;
    
    if (score > 93 && score < 101) {
        text = "A";
    
    } else if (score > 89 && score < 94 ) {
        text = "A-";
    } else if (score > 86 && score < 90 ) {
        text = "B+";
    } else if (score > 83 && score < 87 ) {
        text = "B";
    } else if (score > 79 && score < 84 ) {
        text = "B-";
    } else if (score > 76 && score < 80 ) {
        text = "C+";
    } else if (score > 72 && score < 77 ) {
        text = "C";
    } else if (score > 69 && score < 73 ) {
        text = "C-";
    } else if (score > 66 && score < 70 ) {
        text = "D+";
    } else if (score > 59 && score < 67 ) {
        text = "D";
    } else if (score > -1 && score < 60 ) {
        text = "D-";
    } else {
    text = "Invalid score";
    }
  document.getElementById("demo").innerHTML = text;
}