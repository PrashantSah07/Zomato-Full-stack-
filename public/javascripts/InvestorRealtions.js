let scrollCount = 0;

window.addEventListener("wheel", function (event) {
    let navbar = document.querySelector(".navbar");
    let zomatioImg = this.document.querySelector('.black-img');
    let home = document.querySelector('#home');
    let investorRelations = document.querySelector('.investor-relations')

    if (event.deltaY > 0) {
        scrollCount++;
    } else {
        scrollCount--;
    }

    if (scrollCount >= 2) {
        navbar.style.background = "white";
        navbar.style.color = "black";
        zomatioImg.style.zIndex = '2';
        home.style.color = 'rgb(226, 55, 68)'
        investorRelations.style.borderColor = 'black';
    } else if (scrollCount <= 0) {
        navbar.style.background = "rgb(226, 55, 68)";
        navbar.style.color = "white";
        zomatioImg.style.zIndex = '0';
        home.style.color = 'white'
        investorRelations.style.borderColor = 'white';
        scrollCount = 0;
    }
});


let lang = document.querySelector('#lang');
let setCountry = document.querySelector('.setCountry');

lang.addEventListener('click', function () {
    setLang.style.display = 'none'
    setCountry.style.display = 'flex'
});

setCountry.addEventListener('mouseleave', function () {
    setCountry.style.display = 'none'
});


let countryLang = document.querySelector('#countryLang');
let setLang = document.querySelector('.setLang')

countryLang.addEventListener('click', function () {
    setCountry.style.display = 'none'
    setLang.style.display = 'flex'
});

setLang.addEventListener('mouseleave', function () {
    setLang.style.display = 'none'
});

let sideNavbar = document.querySelector('#sideNavbar');
let sideNavbarBox = document.querySelector('.side-Navbar');
let body = document.querySelector('body');
let sideNavbarCut = document.querySelector('#sideNavbarCut');
sideNavbar.addEventListener('click', function () {
    sideNavbarBox.style.transform = 'translateX(0%)'
    body.style.overflow = 'hidden'
});

sideNavbarCut.addEventListener('click', function () {
    sideNavbarBox.style.transform = 'translateX(-100%)'
    body.style.overflow = 'auto'
});