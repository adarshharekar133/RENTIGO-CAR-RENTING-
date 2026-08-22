const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

const carGrid = document.getElementById('famousCar');
const viewMoreBtn = document.getElementById('viewMoreBtn');

viewMoreBtn.addEventListener('click', () => {
    const showingAll = carGrid.classList.toggle('show-all');
    viewMoreBtn.classList.toggle('expanded', showingAll);
    viewMoreBtn.setAttribute('aria-expanded', String(showingAll));
    viewMoreBtn.innerHTML = showingAll
        ? 'View Less <i class="fa-solid fa-chevron-down"></i>'
        : 'View More <i class="fa-solid fa-chevron-down"></i>';
});

navbar.querySelectorAll('.ul1 a').forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});
