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

// today header
document.querySelector(".today").textContent = transformDate(d);
// Current Year
document.querySelector("#currentyear").textContent = d.getFullYear();
// Last Modified
document.querySelector("#lastmodified").textContent = transformDateHour(document.lastModified);
// last visit
const lastVisit = Math.round((d.getTime() - (new Date(localStorage.getItem("lastVisitLocal")).getTime())) / (1000 * 60 * 60 * 24));
if (localStorage.getItem("lastVisitLocal") === null) {
	document.querySelector(".lastVisit").textContent = "First visit";
}
else if (lastVisit === 0) {
	document.querySelector(".lastVisit").textContent = "Last visit: today";
}
else if (lastVisit === 1) {
	document.querySelector(".lastVisit").textContent = "Last visit: yesterday";
}
else {
	document.querySelector(".lastVisit").textContent = `Last visit: ${lastVisit} days ago`;
};
localStorage.setItem("lastVisitLocal", d);


// banner displayed only on Mondays and Tuesdays
const dayBannerDisplayed = [1, 2];
if (dayBannerDisplayed.includes(d.getDay())) {
	document.querySelector("#banner").style.display = "block";
}


// lazy loading
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 20px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");};
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

