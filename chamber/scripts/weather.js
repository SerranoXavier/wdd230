// Weather from OpenWeatherMap.org
function titleCase(string) {
	// lower case all the characters
	string = string.toLowerCase();
	// split the string into arrays of words
	string = string.split(' ');
	// map the array replacing the first letter of each word by upper case
	string = string.map(function(word) {
		return word.replace(word[0], word[0].toUpperCase());
	});
	// join the words of the array
	return string.join(' ');
};

function displayResults(weatherData) {
    const temp = weatherData.main.temp; // defines the temperature from the API data
    const iconSrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`; // defines the img source from the API data
	const iconDesc = weatherData.weather[0].description; // defines the img description from the API data
    const speed = weatherData.wind.speed; // defines the wind speed from the API data
    const humidityValue = weatherData.main.humidity; // defines the humidity from the API data
    const pressureValue = weatherData.main.pressure; // defines the pressure from the API data
	const weatherIcon = document.createElement('img'); // creates an img element
	weatherIcon.setAttribute('id', 'weatherIcon'); // set the id of the img
	const captionDesc = document.createElement('figcaption'); // creates a figcaption element

	currentTemp.innerHTML = `<mark>${temp.toFixed(0)}</mark> °C`; // set the innerHTML of the temperature

	weatherFigure.appendChild(weatherIcon); // append the img to the figure element
	weatherFigure.appendChild(captionDesc); // append the figcaption to the figure element
	weatherIcon.setAttribute('src', iconSrc); // set the src of the img
	weatherIcon.setAttribute('alt', iconDesc); // set the alt of the img
	captionDesc.textContent = titleCase(iconDesc); // set the content of the figcaption

    windSpeedElement.innerHTML = `<mark>${speed.toFixed(0)}</mark> km/h`; // set the innerHTML of the wind speed

    humidity.innerHTML = `<mark>${humidityValue}</mark> %`; // set the innerHTML of the humidity
    pressure.innerHTML = `<mark>${pressureValue}</mark> hPa`; // set the innerHTML of the pressure
};


// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherFigure = document.querySelector('#weatherFigure');
const windSpeedElement = document.querySelector('#windSpeed');
const humidity = document.querySelector('#humidity');
const pressure = document.querySelector('#pressure');

// API URL
const latitude = 64.844034;
const longitude = -147.719281;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=d03c45f00009470faed1bab6fda16b37`


// fetch weather data from the API
async function apiFetch() {
    try {
    	const response = await fetch(url);
    	if (response.ok) {
        	const data = await response.json();
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