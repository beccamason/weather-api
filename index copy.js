const fetch = require('node-fetch');
const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=${APPID}`


const getWeather = async() => {
    let data = await fetch(url);
    console.log(await data.json());
}

getWeather();

// weather API key fe20ab9c8adb36dfe0b67c15e5c1bc16
//http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=fe20ab9c8adb36dfe0b67c15e5c1bc16

