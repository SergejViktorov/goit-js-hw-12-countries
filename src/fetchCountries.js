const BASE_URL = 'https://restcountries.eu/rest/v2/';
function fetchCountryByName(countryId) {
  return fetch(`${BASE_URL}name/${countryId}`).then(response => {
    return response.json();
  });
}
export default { fetchCountryByName };
