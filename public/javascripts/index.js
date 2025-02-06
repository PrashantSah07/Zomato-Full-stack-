let body = document.querySelector('body');
let signup = document.querySelector('#sign-up');
let signupPage = document.querySelector('#signup-center');
let signupCut = document.querySelector('#signup-cut');
let headerBrightnessDim = document.querySelector('.header');
let mainBrightnessDim = document.querySelector('.main');

signup.addEventListener('click', function () {
    loginPage.style.display = 'none'
    signupPage.style.display = 'flex'
    body.style.overflow = 'hidden';
    headerBrightnessDim.classList.add('dim')
    mainBrightnessDim.classList.add('dim')
});

signupCut.addEventListener('click', function () {
    signupPage.style.display = 'none'
    body.style.overflow = 'auto'
    headerBrightnessDim.classList.remove('dim')
    mainBrightnessDim.classList.remove('dim')
})


let login = document.querySelector('#log-in');
let loginPage = document.querySelector('#login-center');
let loginCut = document.querySelector('#login-cut');

login.addEventListener('click', function () {
    signupPage.style.display = 'none'
    loginPage.style.display = 'flex'
    body.style.overflow = 'hidden';
    headerBrightnessDim.classList.add('dim')
    mainBrightnessDim.classList.add('dim')
})

loginCut.addEventListener('click', function () {
    loginPage.style.display = 'none'
    body.style.overflow = 'auto'
    headerBrightnessDim.classList.remove('dim')
    mainBrightnessDim.classList.remove('dim')
})

let loginn = document.querySelector('#login');
let signupp = document.querySelector('#signup');

loginn.addEventListener('click', function () {
    sideNavbar.style.display = 'none'
    loginPage.style.display = 'flex'
    signupPage.style.display = 'none'
    body.style.overflow = 'hidden';
    headerBrightnessDim.classList.add('dim')
    mainBrightnessDim.classList.add('dim')
})
signupp.addEventListener('click', function () {
    sideNavbar.style.display = 'none'
    signupPage.style.display = 'flex'
    loginPage.style.display = 'none'
    body.style.overflow = 'hidden';
    headerBrightnessDim.classList.add('dim');
    mainBrightnessDim.classList.add('dim');
})

let seeMore = document.querySelector('.see-more');
let seeMoreP = document.querySelector('.see-more').firstElementChild;
let allLocations = document.querySelectorAll('.hide-location');

let isON = false;
seeMore.addEventListener('click', function () {
    if (!isON) {
        allLocations.forEach(function (e) {
            e.style.display = 'flex'
            seeMoreP.innerHTML = 'See less'
        })
    }
    else {
        allLocations.forEach(function (e) {
            e.style.display = 'none'
            seeMoreP.innerHTML = 'See More'
        })
    }
    isON = !isON;
});


let isON2 = false;
let cuisine = document.querySelector('#cuisine');
let cuisineSVG = document.querySelector('#cuisine').firstElementChild;
let cuisines = document.querySelector('.cuisines');
cuisine.addEventListener('click', function () {
    if (!isON2) {
        cuisines.style.display = 'flex'
        cuisineSVG.style.transform = 'rotate(-180deg)'
    }
    else {
        cuisines.style.display = 'none'
        cuisineSVG.style.transform = 'rotate(0deg)'
    }
    isON2 = !isON2
})


let isON3 = false;
let restaurant = document.querySelector('#restaurant');
let restaurantSVG = document.querySelector('#restaurant').firstElementChild;
let restaurants = document.querySelector('.restaurants');
restaurant.addEventListener('click', function () {
    if (!isON3) {
        restaurants.style.display = 'flex'
        restaurantSVG.style.transform = 'rotate(-180deg)'
    }
    else {
        restaurants.style.display = 'none'
        restaurantSVG.style.transform = 'rotate(0deg)'
    }
    isON3 = !isON3
})

let isON4 = false;
let restaurantChain = document.querySelector('#restaurantChains');
let restaurantChainSVG = document.querySelector('#restaurantChains').firstElementChild;
let restaurantChains = document.querySelector('.restaurant-chains');
restaurantChain.addEventListener('click', function () {
    if (!isON4) {
        restaurantChains.style.display = 'grid'
        restaurantChainSVG.style.transform = 'rotate(-180deg)'
    }
    else {
        restaurantChains.style.display = 'none'
        restaurantChainSVG.style.transform = 'rotate(0deg)'
    }
    isON4 = !isON4
})


let isON5 = false;
let allCities = document.querySelector('#allCities');
let allCitiesSVG = document.querySelector('#allCities').firstElementChild;
let allcities = document.querySelector('.all-cities');
allCities.addEventListener('click', function () {
    if (!isON5) {
        allcities.style.display = 'grid'
        allCitiesSVG.style.transform = 'rotate(-180deg)'
    }
    else {
        allcities.style.display = 'none'
        allCitiesSVG.style.transform = 'rotate(0deg)'
    }
    isON5 = !isON5
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

let isOn6 = false;

let sideNavbarBtn = document.querySelector('#sideNavbar');
let sideNavbar = document.querySelector('.side-Navbar');
sideNavbarBtn.addEventListener('click', function () {
    sideNavbar.style.display = 'flex'
    sideNavbar.style.transform = 'translateX(0%)'
    body.style.overflow = 'hidden'
});

let sideNavbarCut = document.querySelector('#sideNavbarCut');
sideNavbarCut.addEventListener('click', function () {
    sideNavbar.style.transform = 'translateX(-100%)'
    body.style.overflow = 'auto'
});


let LOGIN = document.querySelector('#LOGIN');

LOGIN.addEventListener('click', function () {
    signupPage.style.display = 'none'
    loginPage.style.display = 'flex'
});