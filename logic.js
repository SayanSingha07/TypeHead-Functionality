let countries=[];
function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => { 
         return response.json(); // Added return statement
    })
    .then((data) => {
        console.log(data);
        countries=data.map((list)=>list.name.common);
        countries.sort();
        console.log(countries)
    })
    .catch((error) => { // Added a catch block for error handling
        console.error('Error fetching data:', error);
    });
}
fetchData();



