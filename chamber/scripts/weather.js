// Weather from OpenWeatherMap.org
function titleCase(string) {
	// lower case all the characters
	string = string.toLowerCase();
	// split the string into arrays of words
	string = string.split(" ");
	// map the array replacing the first letter of each word by upper case
	string = string.map(function(word) {
		return word.replace(word[0], word[0].toUpperCase());
	});
	// join the words of the array
	return string.join(" ");
};

function displayResults(weatherData) {
    const temp = weatherData.main.temp;
    const iconSrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
	const iconDesc = weatherData.weather[0].description;
    const speed = weatherData.wind.speed;
    const humidityValue = weatherData.main.humidity;
    const pressureValue = weatherData.main.pressure;

	currentTemp.innerHTML = `<mark>${temp.toFixed(0)}</mark> °C` ;

	weatherIcon.setAttribute('src', iconSrc);
	weatherIcon.setAttribute('alt', iconDesc);
	captionDesc.textContent = titleCase(iconDesc);

    windSpeedElement.innerHTML = `<mark>${speed.toFixed(0)}</mark> km/h`;

    humidity.innerHTML = `<mark>${humidityValue}</mark> %`;
    pressure.innerHTML = `<mark>${pressureValue}</mark> hPa`;
};


// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#weather figcaption');
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