let navbar = document.getElementById('navbar');

window.onscroll = function() {
    if (scrollY >= 150) {
        navbar.style.backgroundColor = '#262626';
        navbar.style.transition = '.8s';
    } else {
        navbar.style.backgroundColor = '';
        navbar.style.transition = '.3s';
    }
}