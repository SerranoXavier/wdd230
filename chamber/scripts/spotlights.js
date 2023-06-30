// variables

// path of the json file used in the getMembers function
const path = 'json/data.json';
let numCards;
// if the screen is big (>= 55rem) we want three different spotlights
// if the screen is small or medium (< 55rem) we want two different spotlights
if (isBigScreen(55)) {
    numCards = 3;
}
else {
    numCards = 2;
}
// select the container div
spotlights = document.querySelector('div.spotlights');




// functions

// convert rem in pixels
function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// determine if the screen is big or not
function isBigScreen(maxRem) {
    if (window.innerWidth >= convertRemToPixels(maxRem)) {
        return true;
    }
    else {
        return false;
    }
}

// filter to get only gold members
function getGoldMembers(member) {
    if (member.membership.toLowerCase() == 'gold') {
        return member;
    }
}

// get all the members from the json file
async function getMembers() {
    const response = await fetch(path);
    const data = await response.json();
    return data.directory;
};







getMembers().then(
    function(value) {
        const goldMembers = value.filter(getGoldMembers);
        let usedIndexes = [];
        let selectedMembers = [];
        for (let i = 0; i < numCards;) {
            let randomIndex = Math.floor(Math.random() * goldMembers.length);
            if (! (usedIndexes.includes(randomIndex))) {
                let spotlight = goldMembers[randomIndex];
                selectedMembers.push(spotlight);
                usedIndexes.push(randomIndex);
                i++;
            }
        }
        selectedMembers.forEach((company) => {
            // create all the required HTML elements
            let spotlightCard = document.createElement('div');
            let image = document.createElement('img');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let p = document.createElement('p');

            // Set the relevant attributes to the div and img elements
            spotlightCard.setAttribute('class', 'spotlightCard');
            image.setAttribute('src', company.imageSrc);
            image.setAttribute('alt', company.imageAlt);
            image.setAttribute('loading', 'lazy');

            // attribute the good values to the elements
            // Build the h3 content to display the company name
            h3.textContent = company.company;
            // Build the h4 content to display the company's slogan
            h4.textContent = company.slogan;
            // Build the p content to display the contact info
            p.innerHTML = `<a href="mailto:${company.email}">${company.email}</a><br>${company.phone}<br><a href="#" target="_blank">${company.website}</a>`;

            // Append the div.spotlightCard with the created elements
            spotlightCard.appendChild(image);
            spotlightCard.appendChild(h3);
            spotlightCard.appendChild(h4);
            spotlightCard.appendChild(p);

            // Append the div.spotlights with the div.spotlightCard
            spotlights.appendChild(spotlightCard);
        })
    }
);




