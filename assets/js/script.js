// universal variables for weather forecast
var searchFormEl = document.querySelector("#search-form");
var currentWeather = document.querySelector("#current-weather");
var locationInfo = document.querySelector("#location");
var tempInfo = document.querySelector("#temp-info");
var windInfo = document.querySelector("#wind-info");
var humidityInfo = document.querySelector("#humidity-info");
var uviInfo = document.querySelector("#uvi-info");
var recentSearch = document.querySelector("#searches");
var searchInput = document.querySelector("#search");

var searchHistory = [];

var weatherApiKey = "91d57b7fd6726c36fc275a86a5361130";
var musixKey = "30134de52c4876b8e46fb0bc4deac1f1";

var testContainer = document.getElementById("test");
var citySearch = document.getElementById("search");
var submtBtn = document.getElementById("searchBtn");

var rapidApiKey = "deeee58b0fmsh827d4e2c1b2b4b3p118ac7jsncfe4d7ea6eb8";
var apiKeyKk = "e39f34ac20msh1b788198a77aac4p1f6b56jsnf6ae5a296344";
var billboardDiv = document.getElementById("top-10");

var spotifyContainer = document.getElementById("spotify-artists");
var ticketMasterContainer = document.getElementById("ticket-master");
var billboardContainer = document.getElementById("billboard");

function start() {
  const spotifyOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      // "X-RapidAPI-Key": apiKeyKk,
    },
  };

  fetch(
    "https://spotify23.p.rapidapi.com/charts/?type=regional&country=us&recurrence=daily&date=latest",
    spotifyOptions
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      spotifyContainer.innerHTML = "";
      for (var i = 0; i < 10; i++) {
        // console.log the results from the fetch

        // created variables for the artist name, song name.
        var position = response.content[i];
        var song = response.content[i];
        var ranking = position.position;
        var songName = song.track_title;
        var artistName = song.artists[0];

        var div = document.createElement("div");

        // created a variable for the image
        var img = document.createElement("img");
        img.setAttribute("src", song.thumbnail);

        // created a variable for the text
        var p = document.createElement("p");
        p.textContent = ranking + ". " + songName + " by " + artistName;

        var a = document.createElement("a");
        a.setAttribute("href", song.track_url);
        a.textContent = "Listen Here";

        // appended the text to the div
        div.append(p, img, a);

        spotifyContainer.append(div);
      }
      
    }).then(function(){
      fetchBillboard()
    })
    .catch((err) => console.error(err));
}

// once spotify works delete this function
fetchBillboard()

function ticketMaster() {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&&city=" +
      citySearch.value +
      "&size=50&classificationName=music,concert,-theatre,-musical&apikey=ZNUGzsWtaFDTZqTsYFz6uJO63BV2G624"
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      // console.log(res._embedded.events);
      // console.log(res._embedded.events[0]._embedded.venues[0].city.name);
      // console.log(res._embedded.events[0]._embedded.venues[0].name);
      // console.log(res._embedded.events[0]._embedded.attractions[0].name);
      // console.log(res._embedded.events[0].dates.start.localDate);
      // console.log(res._embedded.events[0]._embedded.attractions[0].url);

      ticketMasterContainer.innerHTML = "";
      for (var i = 0; i < 6; i++) {
        // console.log the results from the fetch

        // created variables for the avenue information
        var artistName = res._embedded.events[i]._embedded.attractions[0].name;
        var venueName = res._embedded.events[i]._embedded.venues[0].name;
        var eventDate = res._embedded.events[i].dates.start.localDate;
        var ticketUrl = res._embedded.events[i]._embedded.attractions[0].url;

        var div = document.createElement("div");

        // created a variable for the text
        var artistNameAp = document.createElement("p");
        artistNameAp.textContent = i + 1 + ") Artist: " + artistName;

        var venueNameAp = document.createElement("p");
        venueNameAp.textContent = "Venue: " + venueName;

        var eventDateAp = document.createElement("p");
        eventDateAp.textContent = "Event Date: " + eventDate;

        var ticketUrlAp = document.createElement("a");
        ticketUrlAp.setAttribute("href", ticketUrl);
        ticketUrlAp.textContent = ticketUrl;

        var lineBreak = document.createElement("p");
        lineBreak.textContent = " ";

        // appended the text to the div
        div.append(
          artistNameAp,
          venueNameAp,
          eventDateAp,
          ticketUrlAp,
          lineBreak
        );

        ticketMasterContainer.append(div);
      }
    });
}

// submtBtn.addEventListener('click', ticketMaster)

function renderBillboard(artists) {
  billboardDiv.innerHTML = "";


  for (var i = 0; i < artists.length; i++) {
    var div = document.createElement("div");
    var title = document.createElement("h2");
    var rank = document.createElement("h2");
    var artist = document.createElement("h3");
    var image = document.createElement("img");
    var lineBreak = document.createElement("br");
    rank.textContent = artists[i].rank;
    title.textContent = artists[i].title;
    artist.textContent = artists[i].artist;
    image.src = artists[i].image;
    div.textContent =
      rank.textContent +
      ". " +
      title.textContent +
      " by " +
      artist.textContent;
      image.classList.add("top-10");
    div.append(lineBreak, image);
    billboardDiv.append(div);
  }
 
}

function fetchBillboard() {
  fetch(
    "https://billboard-api2.p.rapidapi.com/hot-100?range=1-10&date=2022-06-02",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "billboard-api2.p.rapidapi.com",
        "X-RapidAPI-Key": rapidApiKey,
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      var billboardArr = []
      for (var i = 1; i < 11; i++) {

        billboardArr.push(response.content[i])
      }
      renderBillboard(billboardArr);
    });
}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  // grabs search input and stores in variable
  var searchInputVal = searchInput.value;

  searchHistory.unshift(searchInputVal);
  localStorage.setItem("City Name", JSON.stringify(searchHistory));

  // checks for valid search input
  if (!searchInputVal) {
    console.error("You need a search input value!");
    return;
  }

  var queryString =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchInputVal +
    "&appid=" +
    weatherApiKey +
    "&units=imperial";

  // first api fetch for current weather info
  fetch(queryString, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      // console.log(data.name);
      // console.log(data.main.temp);
      // console.log(data.wind.speed);
      // console.log(data.main.humidity);
      // console.log(data.coord.lat);
      // console.log(data.coord.lon);

      // current weather variables navigated using the API
      var currentLat = data.coord.lat;
      var currentLon = data.coord.lon;

      var latlonString =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        currentLat +
        "&lon=" +
        currentLon +
        "&exclude=hourly&units=imperial&appid=" +
        weatherApiKey;

      // second api fetch for daily weather info
      fetch(latlonString, {
        cache: "reload",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // console.log(data);
          // console.log(data.daily[1].temp.day);
          // console.log(data.daily[1].wind_speed);
          // console.log(data.daily[1].humidity);
          // console.log("https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png");

          // set time for 5 day forecast
          for (let i = 1; i < 6; i++) {
            var dailyTime =
              document.getElementById("daily").children[i - 1].children[0];
            dailyTime.textContent = moment()
              .add(i, "days")
              .format("MM/DD/YYYY");
          }

          // storing 5 day weather info iteration
          for (let i = 1; i < 6; i++) {
            // all daily weather variables pulled from API
            var dailyIconReset =
              document.getElementById("daily").children[i - 1].children[1];
            var dailyTemp =
              document.getElementById("daily").children[i - 1].children[2];
            var dailyWind =
              document.getElementById("daily").children[i - 1].children[3];
            var dailyHumidity =
              document.getElementById("daily").children[i - 1].children[4];

            // pull icon
            var dailyIcon = data.daily[i].weather[0].icon;
            var img = document.createElement("img");
            img.src = "http://openweathermap.org/img/w/" + dailyIcon + ".png";

            // console.log(daily);

            // displaying 5 day weather info
            dailyTemp.textContent = "Temp: " + data.daily[i].temp.day + " F";
            dailyWind.textContent =
              "Wind: " + data.daily[i].wind_speed + " mph";
            dailyHumidity.textContent =
              "Humidity: " + data.daily[i].humidity + " %";
            dailyIconReset.textContent = " ";
            document.getElementById("icon-" + i).appendChild(img);
          }
        });
    });
}

// displays local storage on page refresh and displays last search
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("City Name")) {
    searchHistory = localStorage.getItem(
      "City Name",
      JSON.stringify(searchHistory)
    );
    searchHistory = JSON.parse(searchHistory);
    // console.log(searchHistory)
    document.getElementById("search").value = searchHistory[0];
    ticketMaster();
    handleSearchFormSubmit(event);
  }
});

// clears local storage and reloads page
function clearStorage() {
  localStorage.clear();
  window.location.reload();
}

// console.log(searchHistory);

searchFormEl.addEventListener("submit", handleSearchFormSubmit);

start();
