//get the json data
var requestURL = 'https://juk18001.github.io/assignments/lesson-14/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';

request.send();

request.onload = function () {
    var varJSON = request.response;

    updateTemples(varJSON);
    updateTemp();
}

function updateTemples(textJSON) {
    var templesJson = textJSON.temples;

    for (var i = 0; i < templesJson.length; i++) {
        var objJSON = templesJson[i];
        if (objJSON.city == 'Frankfurt') {
            var ul = document.getElementById('fc_ul')
        } else if (objJSON.city == 'London') {
            var ul = document.getElementById('londonClosures')
        } else if (objJSON.city == 'Washington') {
            var ul = document.getElementById('dcClosures')
        } else if (objJSON.city == 'Rome') {
            var ul = document.getElementById('romeClosures')
        }

        var closureObj = objJSON.closures;
        for (j = 0; j < closureObj.length; j++) {
            var closureLi = document.createElement('li');
            closureLi.innerHTML = closureObj[j];
            ul.appendChild(closureLi);
        }
    }
}
