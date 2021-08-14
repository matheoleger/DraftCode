// const settings = require('electron-settings')

let buttonStart = document.querySelector('.new-dp')

buttonStart.addEventListener('click', () => {
    console.log("jai cliqué")

    let startPage = document.querySelector('.start-element')
    let navbarPage = document.querySelector('.navbar-element')

    // startPage.style.display = "none";
    // navbarPage.style.display = "";

    startPage.classList.remove("is-shown")
    navbarPage.classList.add("is-shown")
})