let burger = document.getElementById('burger')
let nav = document.getElementById('header-navigation')
let header = document.getElementById('header-container')

burger.onclick = function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    header.classList.toggle('active')
}