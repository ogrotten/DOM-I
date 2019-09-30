const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

function clg (x){console.log(x);}

// nav -------------------------------
const nav = Array.from(document.querySelectorAll('nav a'));

const navNew = Object.entries(siteContent.nav);
// I realize that `object.entries` doesn't guarantee order,
// but it works in this assignment.

for (let i = 0; i < nav.length; i++) {
  const e = nav[i];
  e.setAttribute("class", navNew[i][0]);
  e.textContent = navNew[i][1];
  // clg(navNew[i]);
  
  // clg(e);
}

// section.cta -------------------------------
document.getElementById("cta-img").src= siteContent.cta["img-src"];
document.querySelector(".cta h1").textContent = siteContent.cta.h1;
document.querySelector(".cta button").textContent = siteContent.cta.button;

// section.main-content -------------------------------

const main_top_text = Array.from(document.querySelectorAll('.top-content .text-content'));
const main_bottom = Array.from(document.querySelectorAll('.bottom-content .text-content'));
const mainNewData = Object.entries(siteContent["main-content"]);

let contCount = 0;
let topContOut = "";


for (let i = 0; i < document.querySelectorAll('.top-content .text-content').length; i++) {
  document.querySelector('.top-content').children[i].children[0].textContent = mainNewData[contCount][1]
  contCount++
  document.querySelector('.top-content').children[i].children[1].textContent = mainNewData[contCount][1]
  contCount++
}




// // clg(main_top_text[0])
// clg(mainNewData)
// // clg(Array.from(document.getElementsByClassName("text-content")).length)

// for (let i = 0; i < document.getElementsByClassName("text-content").length; i++) {
//   const e = document.getElementsByClassName("text-content")[i];
//   // e.querySelector("h4").textContent = mainNewData[i][0];
//   clg(mainNewData[i][0]);
// }


// // Array.from(document.getElementsByClassName("text-content")).forEach(e => {
// //   let out = e
// // });