//Storing and retrieving simple data
function favHero(){
    //create variable with the same name as key and extract value from localStorage using getItem()
    name = localStorage.getItem("name");
    //check to see if value exists.
    if (name == null || name == "null"){
      alert("Your favorite superhero is ...");
      //prompt user to add value so it exists
      name = prompt("Who is your favorite superhero?");
      //store value
      localStorage.setItem("name", name);
      //return new value
    } else {
      alert ("Your favorite superhero is " + name + "." + " But, Batman is still better!");
    } 
} 

function clearStorage(){
    localStorage.clear();
}

//Arrays in local storage
function arrayStorage(){
    //create array
    var hereos = new Array();
    //fill array
    hereos.push('Batman', ' Superman', ' WonderWoman', ' Aquaman');
    // turn array into a string to store it
    var JSONusers = JSON.stringify(hereos);
    // store it
    localStorage.setItem('hereos', JSONusers);
    // parse data to display
    var changedHereos = JSON.parse(localStorage['hereos']);
    //display 
    alert (changedHereos);
}


function objStorage(){
//create object
    var myObj = {
        firstName: "Bruce",
        lastName: "Wayne",
        comic: "DC"
    };
    //stringify object so we can store it
    var JSONobj = JSON.stringify(myObj);
    // store object
    localStorage.setItem('myObj', JSONobj);
    //parse object so we can view/use it
    var parseObj = JSON.parse(localStorage.getItem('myObj'));
    //display object
    alert (parseObj.comic + ": " + parseObj.firstName + " " + parseObj.lastName);
}

//Storing and retrieving simple data with sessionStorage
function favHero2(){
    //create variable with the same name as key and extract value from localStorage using getItem()
    name2 = sessionStorage.getItem("name2");
    //check to see if value exists.
    if (name2 == null || name2 == "null"){
      alert("Your favorite superhero is ...");
      //prompt user to add value so it exists
      name2 = prompt("Who is your favorite superhero?");
      //store value
      sessionStorage.setItem("name2", name2);
      //return new value
    } else {
      alert ("Your favorite superhero is " + name2 + "." + " But, Batman is still better!");
    } 
} 

function clearStorage2(){
    sessionStorage.clear();
}