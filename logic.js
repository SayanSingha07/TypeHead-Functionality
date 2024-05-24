// let countries = [];
let countryListElement = document.querySelector("#Autocomplete-list");
let searchText = document.querySelector("#country-input");

function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => { 
         return response.json(); // Added return statement
    })
    .then((data) => {
        console.log(data);
        countries = data.map((list) => list.name.common);
        countries.sort();
        listofLoadedData(countries, countryListElement);
        console.log(countries);
    })
    .catch((error) => { // Added a catch block for error handling
        console.error('Error fetching data:', error);
    });
}
fetchData();

function listofLoadedData(data, list) {
    if (data!=null) {
        list.innerHTML = "";
        let compareList = "";
        data.forEach((item) => {
            compareList += `<li>${item}</li>`;
        });
        list.innerHTML = compareList;
    }
}

function filterInputData(data, searchText) {
    return data.filter((item) => {
        return item.toLowerCase().includes(searchText.toLowerCase());
    });
}

searchText.addEventListener("input", () => {
    const filterData = filterInputData(countries, searchText.value);
    listofLoadedData(filterData, countryListElement);
});
