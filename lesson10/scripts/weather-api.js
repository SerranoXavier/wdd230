// Current Year
const date = new Date();
const year = date.getFullYear();
document.querySelector("#currentyear").textContent = year;

// Last Modified
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const dateLastModif = new Date(document.lastModified);
const dayLastModif = dateLastModif.getDate();
const monthLastModif = months[dateLastModif.getMonth()];
const yearLastModif = dateLastModif.getFullYear();
const hourLastModif = dateLastModif.getHours();
const minuteLastModif = dateLastModif.getMinutes();
document.querySelector("#lastmodified").textContent = `${dayLastModif} ${monthLastModif} ${yearLastModif} ${hourLastModif}:${minuteLastModif}`;
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');


// Weather
// select HTML elements in the document
const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('figcaption');
// API URL
// const url = "https://api.openweathermap.org/data/2.5/weather?lat=64.844034&lon=-147.719281&units=imperial&appid=d03c45f00009470faed1bab6fda16b37"
const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=f6588d7122110c890c4e5af65e131e5b"


// fetch weather data from the API
async function apiFetch() {
    try {
    	const response = await fetch(url);
    	if (response.ok) {
        	const data = await response.json();
        	// console.log(data); // this is for testing the call
        	displayResults(data);
    }
	else {
    	throw Error(await response.text());
    }
    }
	catch (error) {
        console.log(error);
	}
}
  
apiFetch();


function displayResults(weatherData) {
	currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

	const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
	const desc = weatherData.weather[0].description;
  
	weatherIcon.setAttribute('src', iconsrc);
	weatherIcon.setAttribute('alt', desc);
	captionDesc.textContent = desc;
}