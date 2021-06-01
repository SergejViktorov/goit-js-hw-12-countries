import './sass/main.scss';
import countriesCardsMurkUp from './templates/countries-card.hbs';
import API from './fetchCountries';
import countriesList from './templates/countries-list.hbs';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
defaults.width = '450px';

import { defaults, error } from '@pnotify/core';

const cardContainer = document.querySelector('.js-card-container');
const input = document.querySelector('.form-control');

var debounce = require('lodash.debounce');
input.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const searchQuery = e.target.value;

  if (searchQuery.length < 1) {
    return onClear();
  }
  const fatchName = API.fetchCountryByName(searchQuery);
  return fatchName.then(data => {
    if (data.length >= 2 && data.length <= 10) {
      renderList(data);
    } else if (data.length < 2) {
      renderCountriCard(data);
    } else if (data.length > 10) {
      const myError = error({
        text: 'Too many matches found. Please enter a more specific query!',
        type: 'Error',
        delay: 4000,
      });
    }
  });
}

function onClear(error) {
  cardContainer.innerHTML = '';
}

function renderCountriCard(country) {
  const murkUp = countriesCardsMurkUp(country);
  cardContainer.innerHTML = murkUp;
}

function renderList(country) {
  const murkUp = countriesList(country);
  cardContainer.innerHTML = murkUp;
}
