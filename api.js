const loadData = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res=> res.json())
    .then (data => displayData(data))


}
loadData();

const displayData = (countries) =>{
    const mirza = document.getElementById('mirza')
    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div')
        div.classList.add('mirzaStyle')
        div.innerHTML=` 
        <img src="${country.flag}">
        <p> Country Name: ${country.name}</p>
        <p> Capital Name: ${country.capital}</p>
        <p> Continent Name: ${country.region}</p>
        
        
        `
        mirza.appendChild(div)
    });
}


