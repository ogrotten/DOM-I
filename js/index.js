const siteContent = {
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png"
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
		"img-src": "img/header-img.png"
	},
	"main-content": {
		"features-h4": "Features",
		"features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

		"about-h4": "About",
		"about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

		"middle-img-src": "img/mid-page-accent.jpg",

		"services-h4": "Services",
		"services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

		"product-h4": "Product",
		"product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

		"vision-h4": "Vision",
		"vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io"
	},
	footer: {
		copyright: "Copyright Great Idea! 2018"
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

function clg(x) {
	console.log(x);
}

// nav -------------------------------
const nav = Array.from(document.querySelectorAll("nav a"));
const navNew = Object.entries(siteContent.nav);
// I realize that `object.entries` doesn't guarantee order,
// but it works in this assignment.

for (let i = 0; i < nav.length; i++) {
	const e = nav[i];
	e.setAttribute("class", navNew[i][0]);

	// Task 3 -------------------------------
	e.setAttribute("style", "color: green; font-weight: bold;");
	// Task 3 -------------------------------

	e.textContent = navNew[i][1];
}

// section.cta -------------------------------
document.getElementById("cta-img").src = siteContent.cta["img-src"];
document.querySelector(".cta h1").textContent = siteContent.cta.h1;
document.querySelector(".cta button").textContent = siteContent.cta.button;

// section.main-content -------------------------------

const mainNewData = Object.entries(siteContent["main-content"]);

let contCount = 0;
let topContOut = "";

for (let i = 0; i < document.querySelectorAll(".top-content .text-content").length; i++) {
	document.querySelector(".top-content").children[i].children[0].textContent = mainNewData[contCount][1];
	contCount++;
	document.querySelector(".top-content").children[i].children[1].textContent = mainNewData[contCount][1];
	contCount++;
}

document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];
contCount++;

for (let i = 0; i < document.querySelectorAll(".bottom-content .text-content").length; i++) {
	document.querySelector(".bottom-content").children[i].children[0].textContent = mainNewData[contCount][1];
	contCount++;
	document.querySelector(".bottom-content").children[i].children[1].textContent = mainNewData[contCount][1];
	contCount++;
}

// section.contact -------------------------------
const contactNewData = Object.entries(siteContent["contact"]);

for (let i = 0; i < document.querySelector(".contact").children.length; i++) {
	document.querySelector(".contact").children[i].textContent = contactNewData[i][1];
	// clg(contactNewData[i][1])
}

// footer -------------------------------

document.querySelector("footer").children[0].textContent = siteContent.footer.copyright;


// Task 3 number 2 -------------------------------
// Task 3 number 2 -------------------------------
// Task 3 number 2 -------------------------------

const menuAdd1 = document.createElement("a");
menuAdd1.textContent = "Last"
document.querySelector('nav').appendChild(menuAdd1);
const menuAdd2 = document.createElement("a");
menuAdd2.textContent = "First"
document.querySelector('nav').prepend(menuAdd2);


// STRETCH -------------------------------
// STRETCH -------------------------------
// STRETCH -------------------------------

document.querySelector(".cta").setAttribute("style", "background-color: salmon;");