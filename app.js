fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country'
        const countryInfo = `
            <h3 class = 'country-name'>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick='displayDetails("${country.name}")'>Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }
}

const displayDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res  => res.json())
    .then(data => renderData (data[0]));
}
const renderData = country => {
    const countryDiv2 = document.getElementById('countryDetail');
    countryDiv2.innerHTML = `
        <h1>Name: ${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src='${country.flag}'>
    `
}