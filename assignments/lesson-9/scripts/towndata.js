//path to github json file
//https://juk18001.github.io/assignments/lesson-9/towndata.json 

//get the card container div
var cardHolder = document.getElementById("townDiv");

var townList = new Array("Preston", "Soda Springs", "Fish Haven");
var requestURL = 'https://juk18001.github.io/assignments/lesson-9/towndata.json ';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var varJSON = request.response;
    createTownDivs(varJSON);
}

function createTownDivs(textJSON) {

    var townsJson = textJSON.towns;

    for (var i = 0; i < townsJson.length; i++) {
        var objJSON = townsJson[i];

        if (townList.indexOf(objJSON.name) > -1) {
            var divCard = document.createElement('div');
            divCard.className = 'card';
            //town name
            var h2TownName = document.createElement('h2');
            h2TownName.textContent = objJSON.name;
            //Motto
            var h3Motto = document.createElement('h3');
            h3Motto.textContent = objJSON.motto;
            //year founded
            var pYear = document.createElement('p');
            pYear.textContent = "Year Founded: " + objJSON.yearFounded.toString();
            //current pop
            var pPopulation = document.createElement('p');
            pPopulation.textContent = "Current Population: " + objJSON.currentPopulation;
            //avg rainfall
            var pAvgRain = document.createElement('p');
            pAvgRain.textContent = 'Average Rainfall: ' + objJSON.averageRainfall + '"';
            //img
            var imgDiv = document.createElement("div");
            imgDiv.className= "imgDiv";

            if (objJSON.name == "Preston") {
                var iTown = document.createElement('img');
                iTown.src = "images/summer-mom-n-daughter.jpg";
            } else {
                var iTown = document.createElement('img');
                iTown.src = "images/blue-flower-raincoat.jpg";
            }

            iTown.alt = objJSON.name;

            divCard.appendChild(h2TownName);
            divCard.appendChild(h3Motto);
            divCard.appendChild(pYear);
            divCard.appendChild(pPopulation);
            divCard.appendChild(pAvgRain);
            divCard.appendChild(iTown);
            cardHolder.appendChild(divCard);
        }
    }
}