
// number of Speciality Drinks

const specialityDrinks = localStorage.getItem('specialityDrinks');
const numSharedDrinks = document.getElementById('sharedDrinks');
const p = document.createElement('p');
if (specialityDrinks === null) {
    p.innerHTML = `You have not yet shared with us any Speciality Drinks.<br>Do not hesitate, share!`;
} else {
    p.innerHTML = `You have shared with us already ${specialityDrinks} Speciality Drinks!<br>Thank you!`;
};
numSharedDrinks.appendChild(p);