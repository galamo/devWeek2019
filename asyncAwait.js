const axios = require("axios");
const url = "https://restcountries.eu/rest/v2/all";

console.log("starting script");
async function getCountries() {
  const result = await axios.get(url);
  //   console.log(result.data[150]);
}
async function getCountriesV2() {
  const result = await axios.get(url);
  doSomthingWithCountries(result.data);
}
function doSomthingWithCountries(countries) {
  const result = countries.find(c => {
    return c.name === "Israel";
  });
  console.log(result);
}
getCountries();
console.log("between..");
getCountriesV2();
console.log("end script");
