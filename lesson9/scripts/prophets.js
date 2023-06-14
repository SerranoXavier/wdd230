const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

function ordinalSuffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + 'st';
    }
    if (j == 2 && k != 12) {
        return i + 'nd';
    }
    if (j == 3 && k != 13) {
        return i + 'rd';
    }
    return i + 'th';
}

function calculateAge(dateOfBirth, dateToCalculate = new Date()) {
    const dob = new Date(dateOfBirth).getTime();
    const dateToCompare = new Date(dateToCalculate).getTime();
    const age = (dateToCompare - dob) / (365 * 24 * 60 * 60 * 1000);
    return Math.floor(age);
}

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    let counter = 0;
    prophets.forEach((prophet) => {
        counter += 1;
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let deathdate = document.createElement('p');
        let age = document.createElement('p');
        let portrait = document.createElement('img');
  
        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the p's contents out to show the prophet's birth and death information
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        deathdate.textContent = `Date of Death: ${prophet.death}`;
        if (prophet.death == null) {
            age.textContent = `Age: ${calculateAge(prophet.birthdate)}`
        }
        else {
            age.textContent = `Age: ${calculateAge(prophet.birthdate, prophet.death)}`
        };
        // age.textContent = `Age: ${calculate_age(prophet.birthdate, prophet.death)}`
  
        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${ordinalSuffix(counter)} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
  
        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        if (prophet.death != null) {
            card.appendChild(deathdate);
        };
        card.appendChild(age);
        card.appendChild(portrait);
  
        cards.appendChild(card);
    }) // end of forEach loop
 } // end of function expression


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
}

getProphetData();

