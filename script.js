function coffeeTemplate(coffee) {
    let myReturn = `<p>
        <img src="${coffee.pic}" alt=${coffee.alt}" id="coffee" />
        <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s
        daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}!</p>
        <p>Use HTML/CSS & JavaScript to create a single page
        that rotates unique colors and content for each weekday (Sunday to
        Saturday) into the page. The content must include:</p>`;

    return myReturn;
}

let coffee = "";

let myDate = new Date();

let today = myDate.getDay();


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('day')) {
    today = urlParams.get('day');
    today = parseInt(today);
}

switch (today) {

    case 1:
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "Mocha Coffee",
            color: "tan",
            day: "Monday",
            desc: `You mocha me crazy!`
        };
        break;


    case 2:
        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "Drip Coffee",
            color: "brown",
            day: "Tuesday",
            desc: `I just need the drip!`
        };
        break;


    case 3:
        coffee = {
            name: "Bubble tea",
            pic: "images/bubble-tea.jpg",
            alt: "bubble tea",
            color: "purple",
            day: "Wednesday",
            desc: `You make me feel all bubbly inside!`
        };
        break;


    case 4:
        coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "Pumpkin Spice Latte",
            color: "coral",
            day: "Thursday",
            desc: `Pumpkin spice is generic`
        };
        break;


    case 5:
        coffee = {
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "caramel latte",
            color: "golden rod",
            day: "Friday",
            desc: `Carma: What goes around, comes around!`
        };
        break;


    case 6:
        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "frappaccino",
            color: "chocolate",
            day: "Saturday",
            desc: `Frappe Saturday!`
        };
        break;


    case 0:
        coffee = {
            name: "cold brew",
            pic: "images/cold-brew.jpg",
            alt: "cold brew",
            color: "maroon",
            day: "Sunday",
            desc: `You Are Brewtiful!`
        };
        break;
}

document.getElementById('mydiv').innerHTML = coffeeTemplate(coffee);
document.querySelector('.feature').style.color = coffee.color;
document.querySelector('html').style.backgroundColor = coffee.color;
