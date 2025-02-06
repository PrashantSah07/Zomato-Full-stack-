let body = document.querySelector('body');

let signup = document.querySelector('#singUp');
let signupPage = document.querySelector('#signup-center');
let signupCut = document.querySelector('#signup-cut');
let brightnessDim = document.querySelector('.zomato-app');

console.log(signup, signupPage, signupCut)

signup.addEventListener('click', function () {
    logInPage.style.display = 'none'
    signupPage.style.display = 'flex'
    body.style.overflow = 'hidden';
    brightnessDim.classList.add('dim');
    body.style.backgroundColor = "rgb(75 75 75)";
});

signupCut.addEventListener('click', function () {
    signupPage.style.display = 'none'
    body.style.overflow = 'auto'
    brightnessDim.classList.remove('dim')
    body.style.backgroundColor = "white";
});


let logIn = document.querySelector('#logIn');
let logInPage = document.querySelector('#login-center');
let loginCut = document.querySelector('#login-cut');

logIn.addEventListener('click', function () {
    signupPage.style.display = 'none'
    logInPage.style.display = 'flex'
    body.style.overflow = 'hidden';
    brightnessDim.classList.add('dim');
    body.style.backgroundColor = "rgb(75 75 75)";
});

loginCut.addEventListener('click', function () {
    logInPage.style.display = 'none'
    body.style.overflow = 'auto'
    brightnessDim.classList.remove('dim');
    body.style.backgroundColor = "white";
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

let loginn = document.querySelector('#login');
let signupp = document.querySelector('#signup');

loginn.addEventListener('click', function () {
    sideNavbar.style.display = 'none'
    logInPage.style.display = 'flex'
    signupPage.style.display = 'none'
    body.style.overflow = 'hidden'
    brightnessDim.classList.add('dim');
    body.style.backgroundColor = "rgb(75 75 75)";
});
signupp.addEventListener('click', function () {
    sideNavbar.style.display = 'none'
    signupPage.style.display = 'flex'
    logInPage.style.display = 'none'
    body.style.overflow = 'hidden'
    brightnessDim.classList.add('dim');
    body.style.backgroundColor = "rgb(75 75 75)";
});

let LOGIN = document.querySelector('#LOGIN');

LOGIN.addEventListener('click', function () {
    signupPage.style.display = 'none'
    logInPage.style.display = 'flex'
});