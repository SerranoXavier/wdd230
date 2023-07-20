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

function displayResultsWeatherNow(weatherData) {
    const temp = weatherData.list[0].main.temp; // defines the temperature from the API data
    const iconSrc = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`; // defines the img source from the API data
	const iconDesc = weatherData.list[0].weather[0].description; // defines the img description from the API data
    const humidityValue = weatherData.list[0].main.humidity; // defines the humidity from the API data
	const weatherIcon = document.createElement('img'); // creates an img element
	weatherIcon.setAttribute('id', 'weatherIcon'); // set the id of the img
	const captionDesc = document.createElement('figcaption'); // creates a figcaption element

	currentTemp.innerHTML = `${temp.toFixed(0)} °F`; // set the innerHTML of the temperature

	weatherFigure.appendChild(weatherIcon); // append the img to the figure element
	weatherFigure.appendChild(captionDesc); // append the figcaption to the figure element
	weatherIcon.setAttribute('src', iconSrc); // set the src of the img
	weatherIcon.setAttribute('alt', iconDesc); // set the alt of the img
	captionDesc.textContent = titleCase(iconDesc); // set the content of the figcaption

    humidity.innerHTML = `${humidityValue} %`; // set the innerHTML of the humidity
};

function displayResultsWeatherForecast(weatherData) {
    timestampsIndexes = [8, 16, 24];
    timestampsIndexes.forEach(element => {

        // creation of all the required elements
        const div = document.createElement('div'); // creates a container div for the forecast cards
        div.setAttribute('class', 'forecastCard'); // defines the class of the container div
        const h2 = document.createElement('h2'); // creates a title h2
        const p = document.createElement('p'); // creates a paragraph
        const img = document.createElement('img'); // creates an img element
        img.setAttribute('class', 'weatherIcon'); // set the class of the img

        // definition of the variables from the API data
        const temp = weatherData.list[element].main.temp; // defines the temperature from the API data
        const imgSrc = `https://openweathermap.org/img/wn/${weatherData.list[element].weather[0].icon}@2x.png`; // defines the img source from the API data
        const imgDesc = weatherData.list[element].weather[0].description; // defines the img description from the API data

        // setting of the contents of all the elements
        if (element == 0) {
            h2.textContent = 'Now in Carlsbad';
        } else if (element == 8) {
            h2.textContent = day1Name;
        } else if (element == 16) {
            h2.textContent = day2Name;
        } else if (element == 24) {
            h2.textContent = day3Name;
        } // sets the content of the title h2, depending on the day
        p.textContent = (temp.toFixed(0) + '°F'); // sets the content of the paragraph (temperature)
        img.setAttribute('src', imgSrc); // sets the src attribute of the img
        img.setAttribute('desc', imgDesc); // sets the desc attribute of the img

        // appends the data to the container div
        div.appendChild(h2); // appends the title h2
        div.appendChild(p); // appends the paragraph (temperature)
        div.appendChild(img); // appends the img

        // appends the container div to the forcast div
        forecast.appendChild(div);
    });
}

// define the name of the days
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const todayName = days[today.getDay()];
const day1Name = days[today.getDay() + 1];
const day2Name = days[today.getDay() + 2];
const day3Name = days[today.getDay() + 3];

// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherFigure = document.querySelector('#weatherFigure');
const humidity = document.querySelector('#humidity');
const forecast = document.querySelector('#forecast');

// API URL
const latitude = 33.136556;
const longitude = -117.321778;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=33.136556&lon=-117.321778&units=imperial&appid=fc15596111cd61a40d393162c082964f`

// fetch weather data from the API
async function apiFetch() {
    try {
    	const response = await fetch(url);
    	if (response.ok) {
        	const data = await response.json();
        	displayResultsWeatherNow(data);
        	displayResultsWeatherForecast(data);
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