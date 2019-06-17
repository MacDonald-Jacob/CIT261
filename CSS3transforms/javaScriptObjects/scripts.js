// Create object that I will use for all the examples
let hero = {name: 'Batman', comic:'DC', superpower:'Money'};


/************Object Creation Functions***********/
//Object Literal
function objectCreationFunction1(){
    window.alert("Name: " + hero.name + "    Comic: " + hero.comic + "    Superpower: " + hero.superpower);
}

//Create javaScript object with Constructor
    //Constructor function for hero objects
    function objectCreationFunction2(){
        function hero(name, comic, superpower){
            this.name = name;
            this.comic = comic;
            this.superpower = superpower;
        }
    //Create two person objects
    var batman = new hero("Batman", "DC", "Money");
    var hulk = new hero("Hulk", "Marvel", "Strength");
    var flash = new hero("Flash", "DC", "Speed");

    //Display
    window.alert("Heroes: " + batman.name + ", " + hulk.name + ", " + flash.name)
}

//ES6 Pseudo classical
function objectCreationFunction4(){
    class DC{
        constructor(hero){
            this.hero = batman;
            this.vigilante = 'awake'; 
        }
        awakeHero() { this.hero = 'awake'};
        asleepHero() { this.hero = 'asleep'}

    }
    var hero_dc = new DC('shazam');
    window.alert("Heroes: " + hero_dc.hero + ", " + DC.hero + ", " + hero.hero)
}

//Create method
function objectCreationFunction3(){
let hero = Object.create(Object.prototype,
    {
      name:{
        value: 'Batman',
        realName: 'Bruce',
        symbolic: true,
      },
      comic:{
        value: 'DC',
        american: true,
      }
    });
  window.alert(hero.name) 
}




/*************Inheritance************/
function inheritance1(){
    function hero(name, comic, superpower){
        this.name = name;
        this.comic = comic;
        this.superpower = superpower;
    }
    var batman = new hero("Batman", "DC", "Money");
    window.alert("Name: " + batman.name + "    Comic: " + batman.comic + "    Superpower: " + batman.superpower);

    function hero2(name, comic, superpower, color){
        hero.call(this, name, comic, superpower);
        this.color = color;

    }
    var batman = new hero2("Batman", "DC", "Money", "Black");

    window.alert("Name: " + batman.name + "    Comic: " + batman.comic + "    Superpower: " + batman.superpower + "    Color: " + batman.color);

}


/*************Properties************/
//accessing properties
function properties1(){
    window.alert(hero.superpower)
}

//adding properties
function properties2(){
    hero.color = 'Black';
    window.alert("Name: " + hero.name + "    Comic: " + hero.comic + "    Superpower: " + hero.superpower
    + "     Color: " + hero.color);
}

//delete properties
function properties3(){
    delete hero.comic;
    window.alert("Name: " + hero.name + "    Comic: " + hero.comic + "    Superpower: " + hero.superpower);
}


/*************Methods************/
function methods1(){
    let hero = {name: 'Batman', 
                comic:'DC', 
                superpower:'Money', 
                danger: function() {
        window.alert('Turning on bat signal...');
    }
 };
 window.alert("Name: " + hero.name + "    Comic: " + hero.comic + "    Superpower: " + hero.superpower);

 hero.danger();   //Output: Turning on signal...
 
 /* Adding method danger() later to the object */
 hero.danger = function() {
     window.alert('Here he comes...');  
 }
 hero.danger();    //Output: Here he comes...
}


/*************Instantiation************/



