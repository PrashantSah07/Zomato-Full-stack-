let scrollCount = 0;

window.addEventListener("wheel", function (event) {
    let navbar = document.querySelector(".navbar");
    let zomatoImg = document.querySelector('#zomatoImg');
    let needHelp = document.querySelector('#needHelp');
    let loginBtn = document.querySelector('#login')
    let sideNavbar = document.querySelector('#sideNavbar');

    if (event.deltaY > 0) {
        scrollCount++;
    } else {
        scrollCount--;
    }

    if (scrollCount >= 1) {
        navbar.style.background = 'white';
        zomatoImg.style.zIndex = '1'
        needHelp.style.color = 'rgb(37 111 239)'
        navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        navbar.style.border = 'none'
        loginBtn.style.border = '1.5px solid black'
        sideNavbar.style.color = 'black'
    } else if (scrollCount <= 0) {
        navbar.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.4919467787114846) 0%, rgba(255, 255, 255, 0) 100%)";
        zomatoImg.style.zIndex = '0'
        needHelp.style.color = 'black'
        navbar.style.boxShadow = "none";
        navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.581)";
        loginBtn.style.border = '1.5px solid white'
        sideNavbar.style.color = 'white'
        scrollCount = 0;
    }
});


let ques1 = document.querySelector('#Ques1');
let svg = document.querySelector('#Ques1').firstElementChild;
let hide1 = document.querySelectorAll('.hide')[0]

let isOn = false;
ques1.addEventListener('click', function () {
    if (!isOn) {
        hide1.style.display = 'flex'
        svg.style.transform = 'rotate(180deg)'
    } else {
        hide1.style.display = 'none'
        svg.style.transform = 'rotate(0deg)'
    }
    isOn = !isOn;
});

let ques2 = document.querySelector('#Ques2');
let svg2 = document.querySelector('#Ques2').firstElementChild;
let hide2 = document.querySelectorAll('.hide')[1]

let isOn2 = false;
ques2.addEventListener('click', function () {
    if (!isOn2) {
        hide2.style.display = 'flex'
        svg2.style.transform = 'rotate(180deg)'
    } else {
        hide2.style.display = 'none'
        svg2.style.transform = 'rotate(0deg)'
    }
    isOn2 = !isOn2;
});

let ques3 = document.querySelector('#Ques3');
let svg3 = document.querySelector('#Ques3').firstElementChild;
let hide3 = document.querySelectorAll('.hide')[2]

let isOn3 = false;
ques3.addEventListener('click', function () {
    if (!isOn3) {
        hide3.style.display = 'flex'
        svg3.style.transform = 'rotate(180deg)'
    } else {
        hide3.style.display = 'none'
        svg3.style.transform = 'rotate(0deg)'
    }
    isOn3 = !isOn3;
});

let ques4 = document.querySelector('#Ques4');
let svg4 = document.querySelector('#Ques4').firstElementChild;
let hide4 = document.querySelectorAll('.hide')[3]

let isOn4 = false;
ques4.addEventListener('click', function () {
    if (!isOn4) {
        hide4.style.display = 'flex'
        svg4.style.transform = 'rotate(180deg)'
    } else {
        hide4.style.display = 'none'
        svg4.style.transform = 'rotate(0deg)'
    }
    isOn4 = !isOn4;
});

let ques5 = document.querySelector('#Ques5');
let svg5 = document.querySelector('#Ques5').firstElementChild;
let hide5 = document.querySelectorAll('.hide')[4]

let isOn5 = false;
ques5.addEventListener('click', function () {
    if (!isOn5) {
        hide5.style.display = 'flex'
        svg5.style.transform = 'rotate(180deg)'
    } else {
        hide5.style.display = 'none'
        svg5.style.transform = 'rotate(0deg)'
    }
    isOn5 = !isOn5;
});

let ques6 = document.querySelector('#Ques6');
let svg6 = document.querySelector('#Ques6').firstElementChild;
let hide6 = document.querySelectorAll('.hide')[5]

let isOn6 = false;
ques6.addEventListener('click', function () {
    if (!isOn6) {
        hide6.style.display = 'flex'
        svg6.style.transform = 'rotate(180deg)'
    } else {
        hide6.style.display = 'none'
        svg6.style.transform = 'rotate(0deg)'
    }
    isOn6 = !isOn6;
});


let login = document.querySelector('#login');
let loginPage = document.querySelector('#login-center');
let loginCut = document.querySelector('#login-cut');
let body = document.querySelector('body');
let headerDim = document.querySelector('.header')
let partnerWithZomato = document.querySelector('.partnerWithZomato');
let sucessStory = document.querySelector('.sucessStory');

login.addEventListener('click', function () {
    loginPage.style.display = 'flex'
    body.style.overflow = 'hidden';
    headerDim.classList.add('brightnessDim');
    sucessStory.classList.add('brightnessDim')
    body.style.background = 'rgb(0 0 0 / 69%)'
});

loginCut.addEventListener('click', function () {
    loginPage.style.display = 'none'
    body.style.overflow = 'auto'
    headerDim.classList.remove('brightnessDim');
    sucessStory.classList.remove('brightnessDim')
    body.style.background = 'white'
});


let sideNavbar = document.querySelector('#sideNavbar');
let sideNavbarBox = document.querySelector('.sideNavbar');
let sideNavbarCut = document.querySelector('#sideNavbarCut');

sideNavbar.addEventListener('click', function () {
    sideNavbarBox.style.display = 'flex'
    body.style.overflow = 'hidden';
    loginPage.style.display = 'none'
    headerDim.classList.add('brightnessDim');
    sucessStory.classList.add('brightnessDim')
    body.style.background = 'rgb(0 0 0 / 69%)'
});
sideNavbarCut.addEventListener('click', function () {
    sideNavbarBox.style.display = 'none'
    body.style.overflow = 'auto'
    headerDim.classList.remove('brightnessDim');
    sucessStory.classList.remove('brightnessDim')
    body.style.background = 'white'
});

let loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', function () {
    loginPage.style.display = 'flex'
    sideNavbarBox.style.display = 'none'
});
