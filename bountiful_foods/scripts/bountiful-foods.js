
// toggle menu
function toggleMenu() {
    document.getElementById("menuNav").classList.toggle("open");
    document.getElementById("menuButton").classList.toggle("open");
}

const x = document.getElementById("menuButton");
x.onclick = toggleMenu;


// dates
function transformDate(dateSource) {
	const fulldate = new Date(dateSource);
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
	const dayName = daynames[fulldate.getDay()];
	const day = fulldate.getDate();
	const monthName = months[fulldate.getMonth()];
	const year = fulldate.getFullYear();
	return `${dayName}, ${day} ${monthName} ${year}`;
}
function transformDateHour(dateSource) {
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
	const fulldate = new Date(dateSource);
	const day = fulldate.getDate();
	const month = months[fulldate.getMonth()];
	const year = fulldate.getFullYear();
	const hour = fulldate.getHours();
	const minute = String(fulldate.getMinutes()).padStart(2, "0");
	return `${day} ${month} ${year} ${hour}:${minute}`;
}

const d = new Date();

// Current Year
document.querySelector("#currentyear").textContent = d.getFullYear();
// Last Modified
document.querySelector("#lastmodified").textContent = transformDateHour(document.lastModified);