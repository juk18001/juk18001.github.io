//path to github json file
//https://juk18001.github.io/assignments/lesson-9/towndata.json 

//get the card container div
var cardHolder = document.getElementById("townDiv");

var townList = new Array("Preston", "Soda Springs", "Fish Haven");
var townImgList = '[["name":"Preston","imgSrc":"images/summer-mom-n-daughter.jpg"],["name":"Soda Springs","imgSrc":"images/blue-flower-raincoat.jpg"],["name":"Fish Haven","imgSrc":"images/snow-n-glove.jpg"]]',
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
            for (var j = 0; j < townImgList.length; j++) {
                if (objJSON.name = townImgList[j].name) {
                    var iTown = document.createElement('img');
                    iTown.src = townImgList[j].imgSrc;
                    iTown.alt = objJSON.name;
                } else {
                    var iTown = document.createElement('img');
                    iTown.src = "images/beach-mom-n-daughter.jpg";
                    iTown.alt = "cool photo";
                }
            }

            divCard.appendChild(h2TownName);
            divCard.appendChild(h3Motto);
            divCard.appendChild(pYear);
            divCard.appendChild(pPopulation);
            divCard.appendChild(pAvgRain);
        //    divCard.appendChild(iTown);
            cardHolder.appendChild(divCard);
        }
    }
}