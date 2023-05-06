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


function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }