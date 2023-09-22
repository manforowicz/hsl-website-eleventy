var header = document.getElementById('navbar');
header.classList.remove("navbar-scrolled");

document.addEventListener('scroll', function (e) {
    if (window.scrollY > 0) {
        header.classList.add("navbar-scrolled");
    } else {
        header.classList.remove("navbar-scrolled");
    }
});
