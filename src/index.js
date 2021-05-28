import './sass/main.scss';
import API from './fetchCountries.js';
import countriesCardsMurkUp from './templates/countries-card.hbs';

const cardContainer = document.querySelector('.js-card-container');

const input = document.querySelector('.form-control');
input.addEventListener('input', onInput);

function onInput(e) {
  console.log(e.currentTarget.value);
}

fetchCountries()
  .then(renderCountriCard)
  .catch(error => {
    console.log(error);
  });

function renderCountriCard(countries) {
  const murkUp = countriesCardsMurkUp(countries);
  cardContainer.innerHtml = murkUp;
}
