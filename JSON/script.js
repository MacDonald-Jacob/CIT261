//Using AJAX to Consume a JSON Web Service
const weatherObject = new XMLHttpRequest();

//initialize or set up
weatherObject.open('GET','https://api.openweathermap.org/data/2.5/weather?zip=84103,us&appid=44ae659aedc9547e507e6cd8e21c0f5a&units=imperial', true);

//get data and store in local device
weatherObject.send();

//convert incoming data to object using JSON.parse
weatherObject.onload = function(){
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('sky').innerHTML = weatherInfo.weather["0"].description;
    document.getElementById('temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    // Calculate Wind Chill
    var temp = parseFloat(document.getElementById('temp').innerHTML = weatherInfo.main.temp);
    var wind = parseFloat(document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed);
    var speed = Math.pow(wind,.16)
    var answer = (35.74 + (0.6215*temp)) - (35.75*speed) + (0.4275*temp*speed)

    document.getElementById("windChill").innerHTML = Math.round(answer);

}//end of the function