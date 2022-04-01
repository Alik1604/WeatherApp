async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e1a314b7fb108e956201d87e4e646fc5&units=metric `, {mode: 'cors'});
    const data = await response.json();
    return data
}

export default {getWeather}

