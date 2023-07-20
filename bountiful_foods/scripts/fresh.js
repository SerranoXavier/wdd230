const freshDate = new Date();
document.querySelector('#freshDate').setAttribute('value', freshDate);

function displayResultsFruits(fruitData) {
    fruitData.forEach(fruit => {
        fruitName = fruit.name;
        carbohydrates.push(fruit.nutritions.carbohydrates);
        proteins.push(fruit.nutritions.protein);
        fats.push(fruit.nutritions.fat);
        sugars.push(fruit.nutritions.sugar);
        calories.push(fruit.nutritions.calories);
        const option = document.createElement('option');
        option.setAttribute('value', fruitName);
        option.textContent = fruitName;
        ingredients.appendChild(option);
    });
}

const urlFruits = `https://brotherblazzard.github.io/canvas-content/fruit.json`;
const ingredients = document.getElementById('ingredients');
carbohydrates = [];
proteins = [];
fats = [];
sugars = [];
calories = [];


// fetch fruits data from the json
async function fruitsFetch() {
    try {
    	const response = await fetch(urlFruits);
    	if (response.ok) {
        	const data = await response.json();
        	displayResultsFruits(data);
    }
	else {
    	throw Error(await response.text());
    }
    }
	catch (error) {
        console.log(error);
	}
}

fruitsFetch();

const response = document.getElementById('response');
const yourInformation = document.getElementById('yourInformation');
const yourRecipe = document.getElementById('yourRecipe');
const freshData = document.getElementById('freshData');
const nutritionalValue = document.getElementById('nutritionalValue');


freshData.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const phone = document.getElementById('cellphone');
    const submitDate = document.getElementById('freshDate');
    const fruits = document.getElementById('ingredients');
    const instructions = document.getElementById('instructions');

    selectedFruits = [];
    totalCarbohydrates = 0;
    totalProtein = 0;
    totalFat = 0;
    totalSugar = 0;
    totalCalories = 0;

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].selected == true) {
            selectedFruits.push(fruits[i].value);
            totalCarbohydrates += carbohydrates[i];
            totalProtein += proteins[i];
            totalFat += fats[i];
            totalSugar += sugars[i];
            totalCalories += calories[i];
        }
    }
    yourInformation.innerHTML = `First Name: ${firstName.value}<br>Last Name: ${lastName.value}<br>Email: ${email.value}<br>Phone: ${phone.value}<br>Date: ${freshDate}`;
    yourRecipe.innerHTML = `Fruits: ${selectedFruits[0]}, ${selectedFruits[1]}, ${selectedFruits[2]}<br>Instructions: ${instructions.value}`;
    nutritionalValue.innerHTML = `Carbohydrates: ${totalCarbohydrates.toFixed(2)} g<br>Protein: ${totalProtein.toFixed(2)} g<br>Fat: ${totalFat.toFixed(2)} g<br>Sugar: ${totalSugar.toFixed(2)} g<br>Calories: ${totalCalories.toFixed(2)} kcal<br>`
    response.style.display = 'block';

    let specialityDrinks = localStorage.getItem('specialityDrinks');
    if (specialityDrinks === null) {
        localStorage.setItem('specialityDrinks', 0);
    };
    let numDrinks = parseInt(localStorage.getItem('specialityDrinks'));
    numDrinks += 1;
    localStorage.setItem('specialityDrinks', numDrinks);
  });