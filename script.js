var apiKey = "d0cb8cd20790977405d779960bbd6f85";
var pastCities = JSON.parse(localStorage.getItem("pastCities")) || [];
var clear = document.getElementById("clear");
var currentCity = document.getElementById('search');
var searchBtn = document.getElementById('searchBtn');
var locations = document.getElementsByClassName("locations");
var apiKeyWeather = "d0cb8cd20790977405d779960bbd6f85";
// var apiKeyG = deeee58b0fmsh827d4e2c1b2b4b3p118ac7jsncfe4d7ea6eb8
// var apiKeyKk = "e39f34ac20msh1b788198a77aac4p1f6b56jsnf6ae5a296344"

function searchCity (searchCity) {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + searchCity + "&limit=1&appid=" + apiKey).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        $("#current").empty();
        getCurrentWeather(data, data[0].name);
    });
}

function getCurrentWeather (data, cityName) {

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&units=imperial&exclude=alerts&appid=${apiKeyWeather}`).then(response => {
        return response.json();
    }).then(data2 => {
        console.log(data2)
        var card = $("<div>").addClass("card");
        var cardTitle = $("<h2>").addClass("card-title").text(cityName);
        var temp = $("<h3>").addClass("card-text").text(data2.current.temp)
        $("#current").append(card.append(cardTitle, "Temp: ", temp));

        var humidity = $("<h3>").addClass("card-text").text(data2.current.humidity)
        $("#current").append(card.append(cardTitle, "Humidity: ", humidity));
        var windSpeed = $("<h3>").addClass("card-text").text(data2.current.wind_speed)
        $("#current").append(card.append(cardTitle, "Wind Speed: ", windSpeed, " mph"));
        var uvi = $("<h3>").addClass("card-text", "uvi").text(data2.current.uvi)
        $("#current").append(card.append(cardTitle, "UV Index: ", uvi));
        if (data2.current.uvi >= 0 && data2.current.uvi <= 3) {
            uvi.addClass("low");
        } else if (data2.current.uvi >= 3 && data2.current.uvi <=5) {
            uvi.addClass("moderate");
        } else {
            uvi.addClass("severe")
        }
    });
}




clear.addEventListener("click", function () {
    localStorage.clear();
    console.log("cleared")
})

searchBtn.addEventListener("click", function (){
    console.log(currentCity.value);
    var city = currentCity.value;
    if (pastCities.indexOf(city) === -1) {
        pastCities.push(city);
        localStorage.setItem("pastCities", JSON.stringify(pastCities));
    }
searchCity(city);
})

function getPastCities () {
    var past = JSON.parse(localStorage.getItem("pastCities"))|| [];
    console.log(past);
    past.forEach(function (){
        var locations = document.getElementsByClassName("locations");
        let btn = document.createElement("button");
        btn.innerHTML = past;
        document.body.appendChild(btn);
    }) 
}

getPastCities();

=======
function ticketMaster() {

// to grab from search box
// var artistName = document.querySelector('#search-input').value; 

// to test code
var artistName = "harrystyle"

var queryString = "https://app.ticketmaster.com/discovery/v2/attractions.json?countryCode=US&name=" + artistName + "&classificationName=music&apikey=uUGLWbIhHXmBGx7OldzHzYyJPFEnqPud"

  fetch(queryString, {
      cache: 'reload',
  })
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);

          var nameArtist

      })
}


// billboard top 100 api.  Commented out to not run

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
// 	}
// };

// fetch('https://billboard-api2.p.rapidapi.com/hot-100?range=1-10&date=2019-05-11', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



start();
ticketMaster();

