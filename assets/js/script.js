// var apiKey = "9473e5cba5msh74e0809a1e4e6cfp166f95jsnf68009c0712b";
//var apiKey = "deeee58b0fmsh827d4e2c1b2b4b3p118ac7jsncfe4d7ea6eb8";
// var apiKeyKk = "e39f34ac20msh1b788198a77aac4p1f6b56jsnf6ae5a296344";
var billboardDiv = document.getElementById('top-10');

var spotifyContainer = document.getElementById("spotify-artists");
var billboardContainer = document.getElementById("billboard");

var apiKey = "deeee58b0fmsh827d4e2c1b2b4b3p118ac7jsncfe4d7ea6eb8";
var musixKey = "30134de52c4876b8e46fb0bc4deac1f1"
var billBoardKey ='9473e5cba5msh74e0809a1e4e6cfp166f95jsnf68009c0712b'
var testContainer = document.getElementById("test");
var citySearch = document.getElementById('search');
var submtBtn = document.getElementById('searchBtn')

function run(){
  fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&&city="+ citySearch.value + "&size=50&classificationName=music,concert,-theatre,-musical&apikey=ZNUGzsWtaFDTZqTsYFz6uJO63BV2G624").then(function(res){
    return res.json()
  })
  .then(function(res){
    console.log(res._embedded.events)
  })
}
submtBtn.addEventListener('click', run)




function start() {
  const spotifyOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      "X-RapidAPI-Key": apiKey,
    },
  };

  fetch(
    "https://spotify23.p.rapidapi.com/charts/?type=regional&country=us&recurrence=daily&date=latest",
    spotifyOptions
  )
    .then((response) => response.json())
    .then((response) => {
      spotifyContainer.innerHTML = "";
        for (var i = 0; i < 10; i++) {
            // console.log the results from the fetch
            console.log(response.content[i])

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
    })
    .catch((err) => console.error(err));
};




function renderBillboard (artists) {
  billboardDiv.innerHTML = "";
  // Artist 1
  var div1 = document.createElement('div');
  var title1 = document.createElement('h2');
  var rank1 = document.createElement('h2');
  var artist1 = document.createElement('h3');
  var image1 = document.createElement('img');
  var lineBreak1 = document.createElement('br');
  rank1.textContent = artists[1].rank; 
  title1.textContent = artists[1].title;
  artist1.textContent = artists[1].artist;
  image1.src = artists[1].image;
  div1.textContent = rank1.textContent + ". " + title1.textContent + " by " + artist1.textContent;
  div1.append(lineBreak1, image1);
  billboardDiv.append(div1);
  // Artist 2
  var div2 = document.createElement('div');
  var title2 = document.createElement('h2');
  var rank2 = document.createElement('h2');
  var artist2 = document.createElement('h3');
  var image2 = document.createElement('img');
  var lineBreak2 = document.createElement('br');
  rank2.textContent = artists[2].rank; 
  title2.textContent = artists[2].title;
  artist2.textContent = artists[2].artist;
  image2.src = artists[2].image;
  div2.textContent = rank2.textContent + ". " + title2.textContent + " by " + artist2.textContent;
  div2.append(lineBreak2, image2);
  billboardDiv.append(div2);
  //Artist3
  var div3 = document.createElement('div');
  var rank3 = document.createElement('h2');
  var title3 = document.createElement('h2');
  var artist3 = document.createElement('h3');
  var image3 = document.createElement('img');
  var lineBreak3 = document.createElement('br');
  title3.textContent = artists[3].title;
  rank3.textContent = artists[3].rank;
  artist3.textContent = artists[3].artist;
  image3.src = artists[3].image;
  div3.textContent = rank3.textContent + ". " + title3.textContent + " by " + artist3.textContent;
  div3.append(lineBreak3, image3);
  billboardDiv.append(div3);
  //Artist 4
  var div4 = document.createElement('div');
  var rank4 = document.createElement('h2');
  var title4 = document.createElement('h2');
  var artist4 = document.createElement('h3');
  var image4 = document.createElement('img');
  var lineBreak4 = document.createElement('br');
  title4.textContent = artists[4].title;
  rank4.textContent = artists[4].rank;
  artist4.textContent = artists[4].artist;
  image4.src = artists[4].image;
  div4.textContent = rank4.textContent + ". " + title4.textContent + " by " + artist4.textContent;
  div4.append(lineBreak4, image4);
  billboardDiv.append(div4);
  //Artist 5 
  var div5 = document.createElement('div');
  var rank5 = document.createElement('h2');
  var title5 = document.createElement('h2');
  var artist5 = document.createElement('h3');
  var image5 = document.createElement('img');
  var lineBreak5 = document.createElement('br');
  title5.textContent = artists[5].title;
  rank5.textContent = artists[5].rank;
  artist5.textContent = artists[5].artist;
  image5.src = artists[5].image;
  div5.textContent = rank5.textContent + ". " + title5.textContent + " by " + artist5.textContent;
  div5.append(lineBreak5, image5);
  billboardDiv.append(div5);
  //Artist 6
  var div6 = document.createElement('div');
  var rank6 = document.createElement('h2');
  var title6 = document.createElement('h2');
  var artist6 = document.createElement('h3');
  var image6 = document.createElement('img');
  var lineBreak6 = document.createElement('br');
  title6.textContent = artists[6].title;
  rank6.textContent = artists[6].rank;
  artist6.textContent = artists[6].artist;
  image6.src = artists[6].image;
  div6.textContent = rank6.textContent + ". " + title6.textContent + " by " + artist6.textContent;
  div6.append(lineBreak6, image6);
  billboardDiv.append(div6);
  //Artist 7
  var div7 = document.createElement('div');
  var rank7 = document.createElement('h2');
  var title7 = document.createElement('h2');
  var artist7 = document.createElement('h3');
  var image7 = document.createElement('img');
  var lineBreak7 = document.createElement('br');
  title7.textContent = artists[7].title;
  rank7.textContent = artists[7].rank;
  artist7.textContent = artists[7].artist;
  image7.src = artists[7].image;
  div7.textContent = rank7.textContent + ". " + title7.textContent + " by " + artist7.textContent;
  div7.append(lineBreak7, image7);
  billboardDiv.append(div7);
  //Artist 8
  var div8 = document.createElement('div');
  var rank8 = document.createElement('h2');
  var title8 = document.createElement('h2');
  var artist8 = document.createElement('h3');
  var image8 = document.createElement('img');
  var lineBreak8 = document.createElement('br');
  title8.textContent = artists[8].title;
  rank8.textContent = artists[8].rank;
  artist8.textContent = artists[8].artist;
  image8.src = artists[8].image;
  div8.textContent = rank8.textContent + ". " + title8.textContent + " by " + artist8.textContent;
  div8.append(lineBreak8, image8);
  billboardDiv.append(div8);
  //Artist 9
  var div9 = document.createElement('div');
  var rank9 = document.createElement('h2');
  var title9 = document.createElement('h2');
  var artist9 = document.createElement('h3');
  var image9 = document.createElement('img');
  var lineBreak9 = document.createElement('br');
  title9.textContent = artists[9].title;
  rank9.textContent = artists[9].rank;
  artist9.textContent = artists[9].artist;
  image9.src = artists[9].image;
  div9.textContent = rank9.textContent + ". " + title9.textContent + " by " + artist9.textContent;
  div9.append(lineBreak9, image9);
  billboardDiv.append(div9);
  //Artist 10
  var div10 = document.createElement('div');
  var rank10 = document.createElement('h2');
  var title10 = document.createElement('h2');
  var artist10 = document.createElement('h3');
  var image10 = document.createElement('img');
  var lineBreak10 = document.createElement('br');
  title10.textContent = artists[10].title;
  rank10.textContent = artists[10].rank;
  artist10.textContent = artists[10].artist;
  image10.src = artists[10].image;
  div10.textContent = rank10.textContent + ". " + title10.textContent + " by " + artist10.textContent;
  div10.append(lineBreak10, image10);
  billboardDiv.append(div10);

  image1.classList.add("top-10");
  image2.classList.add("top-10");
  image3.classList.add("top-10");
  image4.classList.add("top-10");
  image5.classList.add("top-10");
  image6.classList.add("top-10");
  image7.classList.add("top-10");
  image8.classList.add("top-10");
  image9.classList.add("top-10");
  image10.classList.add("top-10");
  
}





fetch('https://billboard-api2.p.rapidapi.com/hot-100?range=1-10&date=2022-06-02', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com',
		'X-RapidAPI-Key': 'deeee58b0fmsh827d4e2c1b2b4b3p118ac7jsncfe4d7ea6eb8'
	}
})
	.then(response => response.json())
	.then(response => {
    // console.log(response)
    renderBillboard(response.content);
  });
  


start();

// ticketMaster();
