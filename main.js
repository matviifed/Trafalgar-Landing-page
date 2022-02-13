let burger = document.getElementById('burger')
let header = document.getElementById('header')

function isClicked() {
    header.classList.toggle('active')
    if (header.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }
}

burger.addEventListener('click', isClicked, false)