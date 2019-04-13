function updateTemp() {
    
//frankfurt
var apiURLString = "https://api.openweathermap.org/data/2.5/weather?q=Frankfurt,de&APPID=11bcd0d86618f285952a20f00a263c7c&units=imperial";
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLString, true);
weatherRequest.send();
weatherRequest.onload = function () {

let weatherData = JSON.parse(weatherRequest.responseText);
document.getElementById("tempF").innerHTML=weatherData.main.temp;

}

//London
var apiURLString = "https://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=11bcd0d86618f285952a20f00a263c7c&units=imperial";
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLString, true);
weatherRequest.send();
weatherRequest.onload = function () {

let weatherData = JSON.parse(weatherRequest.responseText);
document.getElementById("tempL").innerHTML=weatherData.main.temp;

}

//DC
var apiURLString = "https://api.openweathermap.org/data/2.5/weather?q=Kensington,us&APPID=11bcd0d86618f285952a20f00a263c7c&units=imperial";
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLString, true);
weatherRequest.send();
weatherRequest.onload = function () {

let weatherData = JSON.parse(weatherRequest.responseText);
document.getElementById("tempD").innerHTML=weatherData.main.temp;

}

//rome
var apiURLString = "https://api.openweathermap.org/data/2.5/weather?q=rome&APPID=11bcd0d86618f285952a20f00a263c7c&units=imperial";
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLString, true);
weatherRequest.send();
weatherRequest.onload = function () {

let weatherData = JSON.parse(weatherRequest.responseText);
document.getElementById("tempR").innerHTML=weatherData.main.temp;

}
}