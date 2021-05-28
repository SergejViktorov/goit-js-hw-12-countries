const BASE_URL = 'https://restcountries.eu/rest/v2/name/eesti';

function fetchCountries() {
  fetch(`${BASE_URL}`).then(r => r.json());
}

export default { fetchCountries };
