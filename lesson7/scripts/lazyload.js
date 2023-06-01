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