// wind chill factor

const temp = document.querySelector("#temp").textContent;
const windSpeed = document.querySelector("#windSpeed").textContent;
if (temp <= 10 && windSpeed >= 4.8) {
	const windChill = 13.2 + (0.6215 * temp) - (11.37 * windSpeed ** 0.16) + (0.3965 * temp * windSpeed ** 0.16);
	document.querySelector("#windChill").innerHTML = `<mark>${Math.round(windChill)}</mark> °C`;
}
else {
	document.querySelector("#windChill").textContent = "N/A"
}