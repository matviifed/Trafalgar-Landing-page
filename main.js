let burger = document.getElementById('burger')
let header = document.getElementById('header')
let header_container = document.getElementById('header-container')

function isClicked() {
    header.classList.toggle('active')
    if (header.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }
}

burger.addEventListener('click', isClicked, false)
window.addEventListener('scroll', trackScroll);

function trackScroll() {
    let scroll = window.pageYOffset;
    if (scroll > 100) {
        header.style.position = 'sticky'
        header.style.boxShadow = '8px 10px 20px black'
        header.style.backgroundColor = 'rgb(255, 255, 255, 1)'
        header.style.opacity = '1'
    } else if (scroll < 100) {
        header.style.boxShadow = 'none'
    }
}