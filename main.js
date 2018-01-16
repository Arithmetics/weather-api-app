const img = document.querySelector('img');
const refresher = document.querySelector('#refresh');
const city = document.querySelector('#city');
const weather = document.querySelector('#weather');
const temperature = document.querySelector('#temperature');
const wind = document.querySelector('#wind');


getWeather('portland');


function getWeather(targetCity) {fetch(`http://api.openweathermap.org/data/2.5/weather?q=${targetCity}&APPID=cd5636cbefe61df414ec932089509492`,
     {mode: 'cors'})
     .then(function(response) {
      return response.json()
     })
     .then(function(response){
       city.textContent = `City: ${response.name}`;
       weather.textContent = `Currently: ${response.weather[0].description}`;
       getGif('weather ' + response.weather[0].description);
       temperature.textContent = `Temperature: ${(response.main.temp * 9/5 -459.67).toFixed(2)} F`;
       wind.textContent = `Wind: ${response.wind.speed} m.p.h.`;
     })
  };





function getGif(input) {fetch(`https://api.giphy.com/v1/gifs/translate?api_key=PM0RBvkXPQSadf9sNYiEaQ9dCnecnz9R&s=${input}`,
     {mode: 'cors'})
     .then(function(response) {
       console.log(input);
       return response.json()
     })
     .then(function(response) {
       img.src = (response.data.images.original.url)
     })
  };


 refresher.addEventListener('click', function(){
   let term = document.getElementById('term').value;
   getWeather(term);
   console.log(term)
 })
