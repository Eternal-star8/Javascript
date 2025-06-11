'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/////////////////////////////////////
/*const getCountryData = function(country) {
const request =  new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/portugal');
request.send();

request.addEventListener('load', function(){
    const data = JSON.parse(this.responseText);
    console.log(data);
    
 const html = `<article class="country">
  <img class="country_img" src="${data.flag}" />
  <div class="country_data">
    <h3 class="country_name">${data.name}</h3>
    <h4 class="country_region">${data.region}</h4>
    <p class="country_row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>$(data.languages[0].name)</p>
    <p class="country__row"><span>💰</span>$(data.currencies[0].name)</p>
     </p>
  </div>
</article>`;

countriesContainer.insertAdjacentHTML('beforeend',html)
countriesContainer.computedStyleMap.opacity = 1;


});
}

getCountryData('portugal');
getCountryData('usa');
getCountryData('japan');

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*const renderCountry = function (data, className = '' ){

const html = `<article class="country">
  <img class="country_img" src="${data.flag}" />
  <div class="country_data">
    <h3 class="country_name">${data.name}</h3>
    <h4 class="country_region">${data.region}</h4>
    <p class="country_row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>$(data.languages[0].name)</p>
    <p class="country__row"><span>💰</span>$(data.currencies[0].name)</p>
     </p>
  </div>
</article>`;

countriesContainer.insertAdjacementHTML('beforeend', html);
const getCountryAndNeighbour = function(country) {
  
  //AJAX call country
const request =  new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/${country}');
request.send();

request.addEventListener('load', function(){
    const data = JSON.parse(this.responseText);
    console.log(data);
   
    //render country 1
    renderCountry(data);
 
//Get neighbour country (2)
const neighbour = data.borders;

if(!neighbour) return;
//AJAX call country 
const request2 = new XMLHttpRequest();
request2.open('GET', `https://restcuntries.eu/v2/alpha/${neighbour}`);
request2.send();
request2.addEventListener('load',function(){
    const data2 = JSON.parse(this.responseText);
    console.log(data2);

    renderCountry(data2, 'neighbour');
});

});
};

getCountryAndNeighbour('canada');

setTimeout(() => {
  console.log('1 econd passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
    console.log('3 seconds passed');
    setTimeout(() => {
    console.log('4 seconds passed');
       },1000);
     },1000);
    },1000);
  }, 1000);
}
*/

// const request =  new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch ('https://restcountries.com/v2/name/usa');
// console.log(request);

// const getCountryData =function(country) {
//   fetch('https://restcountries.com/v2.name/${country}').then(function(response

//   ){
//       console.log(response);
//       return response.json();

//   }).then(function(data){
//     console.log(data);
//     renderCountry(data[0]);
//   });
// };




const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2.name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v2.alpha/${neighbour}`);
    })
    .then (response => response.json())
    .then(data => renderCountry(data,'neighbour'));
};

getCountryData('japan');

