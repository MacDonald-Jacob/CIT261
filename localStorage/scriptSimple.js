function greet(){
    name = localStorage.getItem("name");
    if (name == null || name == "null"){
      alert("Hi, Stranger!");
      name = prompt("What is your name?");
      localStorage.setItem("name", name);
    } else {
      alert ("Hi, " + name + "!");
    } // end greet
} // end function 

function clearStorage(){
    localStorage.clear();
}
