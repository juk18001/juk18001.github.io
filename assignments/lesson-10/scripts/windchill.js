//grab data from page
let t = parseInt(document.getElementById("currentTemp").innerHTML);
let t = parseInt(document.getElementById("windSpeed").innerHTML);
//calc windchill
let f=35.74+0.6215*t-35.75*s**0.16+0.427*t*s**0.16;
//display wind chill on page
document.getElementById("windChill").innerHTML=f.toFixed(0);