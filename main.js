let navbar = document.getElementById('navbar');
let button = document.getElementById('buttontop')

window.onscroll = function () {
    if (scrollY >= 150) {
        navbar.style.backgroundColor = '#262626';
        navbar.style.transition = '.8s';
        button.style.transform = 'none';
    } else {
        navbar.style.backgroundColor = '';
        navbar.style.transition = '.3s';
        button.style.transform = '';
    }
}

button.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}