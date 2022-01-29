const api = {
    key: '83463b528a6ddfa50e16602a9cb3ad02',
    url: 'https://api.openweathermap.org/data/2.5/weather'
}

async function search(query){
    try{
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`)
        const data = await response.json();
        
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        data.innerHTML = (new Date()).toLocaleDateString();
        temp.innerHTML = toCelcius(data.main.temp);
        weather.innerHTML = data.weather[0].description;
        range.innerHTML = `${toCelcius(data.main.temp_min)} / ${toCelcius(data.main.temp_max)}`;
        uptdateImage(data);
        }catch (err) {
        console.log(err);
        alert('Hubo un error!');
    }
}

function toCelcius(kelvin){
    return Math.round(kelvin - 273.15);
}

function uptdateImage(data){
    const temp = toCelcius(data.main.temp);
    let src = 'media/img/lindo.png';
    if (temp< 20){
        src = 'media/img/frio.png';
    } else if (temp > 26){
        src = 'media/img/calor.png';
    }
    tempImg.src = src;
}


const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');
const searchbox = document.getElementById('searchbox');
const searchform = document.getElementById('search-form');



searchform.addEventListener('submit', onSubmit ,true );

function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
}


