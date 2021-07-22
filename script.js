const API_KEY = '43bf9bd5b2efb01eb0972fbf2357daa1';
function fetchData(position){
    const {latitude, longitude } = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherData(data));
} 

function setWeatherData(data){
 console.log(data);
 const weatherData = {
     location: data.name,
     description: data.weather[0].main,
     humidity: data.main.humidity,
     pressure: data.main.pressure,
     temperature: data.main.temp,
     date: getDate(),
 }

 Object.keys(weatherData).forEach( key => {
    document.getElementById(key).textContent = weatherData[key];
 });
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${ ('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

/* Obtener coordenadas del usuario */
function onload(){
    navigator.geolocation.getCurrentPosition(fetchData);
}

