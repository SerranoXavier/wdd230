const path = 'json/data.json';
const gridButton = document.querySelector("button#grid");
const listButton = document.querySelector("button#list");
const directoryGrid = document.querySelector("div.directoryGrid");
const directoryList = document.querySelector("div.directoryList");

const order = {"non-profit": 1, "gold": 2, "silver": 3, "bronze": 4};


// Display directory in grid mode
const displayDirectoryGrid = (directory) => {
    const cards = document.querySelector('div.directoryGrid'); // select the output container element

    // sort the companies by membership level
    directory.sort((a, b) => order[a.membership] - order[b.membership]);

    directory.forEach((company) => {
        // Create elements to add to the div.directory element
        let card = document.createElement('div');
        card.classList.add("directoryCard")
        let image = document.createElement('img');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let contact = document.createElement('p');
        let adress = document.createElement('p');
        let membership = document.createElement('p');

        // Build the image by setting all the relevant attributes
        image.setAttribute('src', company.imageSrc);
        image.setAttribute('alt', company.imageAlt);
        image.setAttribute('loading', 'lazy');

        // Build the h3 content to display the company name
        h3.textContent = company.company;

        // Build the h4 content to display the company's slogan
        h4.textContent = company.slogan;

        // Build the p content to display the contact info
        contact.innerHTML = `<a href="mailto:${company.email}">${company.email}</a><br>${company.phone}<br><a href="#" target="_blank">${company.website}</a>`;
        // Build the p content to display the adress
        adress.innerHTML = `${company.adressLine1}<br>${company.adressLine2}<br>${company.country}`;
        // Build the p content to display the membership level
        if (company.membership == "bronze") {
            membership.textContent = `Bronze Member`;
            membership.classList.add("bronzeMember")
        }
        else if (company.membership == "silver") {
            membership.textContent = `Silver Member`;
            membership.classList.add("silverMember")
        }
        else if (company.membership == "gold") {
            membership.textContent = `Gold Member`;
            membership.classList.add("goldMember")
        }
        else if (company.membership == "non-profit") {
            membership.textContent = `Non Profit Member`;
            membership.classList.add("nonProfitMember")
        };
  
  
        // Append the div.directoryCard with the created elements
        card.appendChild(image);
        card.appendChild(h3);
        card.appendChild(h4);
        card.appendChild(contact);
        card.appendChild(adress);
        card.appendChild(membership);

        // Append the div.directoryGrid with the div.directoryCard
        cards.appendChild(card);
    }) // end of forEach loop
 }; // end of function expression


async function getDirectoryGrid() {
    const response = await fetch(path);
    const data = await response.json();
    displayDirectoryGrid(data.directory);
};




// Display directory in list mode
const displayDirectoryList = (directory) => {
    const list = document.querySelector('div.directoryList'); // select the output container element

    // sort the companies by membership level
    directory.sort((a, b) => order[a.membership] - order[b.membership]);

    directory.forEach((company) => {
        // Create elements to add to the div.directory element
        let row = document.createElement('div');
        row.classList.add("directoryRow");
        let h3 = document.createElement('h3');
        h3.classList.add("directoryCompany");
        let email = document.createElement('p');
        email.classList.add("directoryEmail");
        let phone = document.createElement('p');
        phone.classList.add("directoryPhone");
        let website = document.createElement('p');
        website.classList.add("directoryWebsite");
        let membershipSmall = document.createElement('p');
        membershipSmall.classList.add("directoryMembershipSmall");
        let membershipLarge = document.createElement('p');
        membershipLarge.classList.add("directoryMembershipLarge");

        // Build the h3 content to display the company name
        h3.textContent = company.company;

        // Build the p content to display the email info
        email.innerHTML = `<a href="mailto:${company.email}">${company.email}</a>`;
        // Build the p content to display the phone info
        phone.textContent = company.phone;
        // Build the p content to display the website info
        website.innerHTML = `<a href="#" target="_blank">${company.website}</a>`;

        // Build the p content to display the membership level in small viewports
        if (company.membership == "bronze") {
            membershipSmall.classList.add("bronzeMember")
        }
        else if (company.membership == "silver") {
            membershipSmall.classList.add("silverMember")
        }
        else if (company.membership == "gold") {
            membershipSmall.classList.add("goldMember")
        }
        else if (company.membership == "non-profit") {
            membershipSmall.classList.add("nonProfitMember")
        };
        // Build the p content to display the membership level in large viewports
        if (company.membership == "bronze") {
            membershipLarge.textContent = `Bronze Member`;
            membershipLarge.classList.add("bronzeMember")
        }
        else if (company.membership == "silver") {
            membershipLarge.textContent = `Silver Member`;
            membershipLarge.classList.add("silverMember")
        }
        else if (company.membership == "gold") {
            membershipLarge.textContent = `Gold Member`;
            membershipLarge.classList.add("goldMember")
        }
        else if (company.membership == "non-profit") {
            membershipLarge.textContent = `Non Profit Member`;
            membershipLarge.classList.add("nonProfitMember")
        };
  
  
        // Append the div.directoryRow with the created elements
        row.appendChild(h3);
        row.appendChild(email);
        row.appendChild(phone);
        row.appendChild(website);
        row.appendChild(membershipSmall);
        row.appendChild(membershipLarge);

        // Append the div.directoryList with the div.directoryRow
        list.appendChild(row);
    }) // end of forEach loop
 }; // end of function expression


async function getDirectoryList() {
    const response = await fetch(path);
    const data = await response.json();
    displayDirectoryList(data.directory);
};




getDirectoryGrid();
getDirectoryList();




gridButton.addEventListener("click", () => {
    directoryGrid.classList.remove("hidden");
    listButton.classList.remove("active");
	directoryList.classList.add("hidden");
    gridButton.classList.add("active");
});

listButton.addEventListener("click", () => {
    directoryList.classList.remove("hidden");
    gridButton.classList.remove("active");
	directoryGrid.classList.add("hidden");
    listButton.classList.add("active");
});