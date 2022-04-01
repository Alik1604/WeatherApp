const dataCont = document.querySelector("#WeatherCont")
const back_img = document.querySelector("body")

function render(data) {
    let cardTemplete = ` 
        <div class = 'card'>
            <div class = 'head-card'>
                <div class ='head-text'>${data.name},${data.sys.country}</div>
            </div>
            <div class = 'card-body'>
                <div class = 'main-temp'>${Math.round(data.main.temp)}℃</div>
                <div class = 'sticky'></div>
                <div class = 'left-part'>
                    <div class = 'w-text'>${data.weather[0].description.toUpperCase()}</div>
                    <div class = 'w-text'>FEELS LIKE</div>
                    <div class = 'w-text'>${Math.round(data.main.feels_like)}℃</div>
                    <div class = 'w-text'>HUMIDITY</div>
                    <div class = 'w-text'>${data.main.humidity}%</div>
                    <div class = 'w-text'>WIND</div>
                    <div class = 'w-text'>${Math.round(data.wind.speed)} MPH</div>
                </div>
            </div> 
        </div>
    `;

    if(Math.round(data.main.temp)<0){
        back_img.style.backgroundImage = "url(./imgs/1.png)";
    }else if(Math.round(data.main.temp)>0 && Math.round(data.main.temp)<25){
        back_img.style.backgroundImage = "url(./imgs/2.png)";
    }else if(Math.round(data.main.temp)>25){
        back_img.style.backgroundImage = "url(./imgs/3.png)";
    }

    dataCont.innerHTML = cardTemplete;
}

export default {render}