import weather from "./apiLogic";
import render from "./render"
let city = 'Lviv';
weather.getWeather(city).then((value) => {
  render.render(value)
})

const button = document.querySelector('#search_icon');
const input = document.querySelector('input');

button.addEventListener('click',() => {
    city = input.value;
    input.value = '';
    weather.getWeather(city).then((value) => {
         render.render(value)
    })
})

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    city = input.value;
    input.value = '';
    weather.getWeather(city).then((value) => {
      render.render(value)
  })
});