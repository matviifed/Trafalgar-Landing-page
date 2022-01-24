let btn = document.getElementById('button')
let nav = document.getElementById('nav')
let header = document.getElementById('header')
btn.onclick = function() {
    btn.classList.toggle('change')
    nav.classList.toggle('active')
    header.classList.toggle('clicked')
}