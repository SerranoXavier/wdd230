// toggle menu
function toggleMenu() {
    document.getElementById("menuNav").classList.toggle("open");
    document.getElementById("menuButton").classList.toggle("open");
}

const x = document.getElementById("menuButton");
x.onclick = toggleMenu;


// dates
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
const d = new Date();
const dayName = daynames[d.getDay()];
const day = d.getDate();
const monthName = months[d.getMonth()];
const year = d.getFullYear();
// today header
const fulldate = `${dayName}, ${day} ${monthName} ${year}`;
document.getElementById("today").textContent = fulldate;
// Current Year
document.querySelector("#currentyear").textContent = year;
// Last Modified
const dateLastModif = new Date(document.lastModified);
const dayLastModif = dateLastModif.getDate();
const monthLastModif = months[dateLastModif.getMonth()];
const yearLastModif = dateLastModif.getFullYear();
const hourLastModif = dateLastModif.getHours();
const minuteLastModif = dateLastModif.getMinutes();
document.querySelector("#lastmodified").textContent = `${dayLastModif} ${monthLastModif} ${yearLastModif} ${hourLastModif}:${minuteLastModif}`;


// banner displayed only on Mondays and Tuesdays
const dayBannerDisplayed = [1, 2, 6];
if (dayBannerDisplayed.includes(d.getDay())) {
	document.querySelector("#banner").style.display = "block";
}


// wind chill factor
const temp = document.querySelector("#temp").textContent;
const windSpeed = document.querySelector("#windSpeed").textContent;
if (temp <= 10 && windSpeed >= 4.8) {
	const windChill = 13.2 + (0.6215 * temp) - (11.37 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16);
	document.querySelector("#windChill").textContent = Math.round(windChill) + " °C";
}
