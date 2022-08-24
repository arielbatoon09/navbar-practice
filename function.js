const mobile_toggle = document.getElementById('mobile-toggle');
const nav_hide = document.getElementById('nav-hide');
const nav_collapse = document.getElementById('nav-collapse');


mobile_toggle.addEventListener('click', () => {
    nav_hide.classList.toggle('nav-hide');
    nav_collapse.classList.toggle('nav-collapse');
})