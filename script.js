let nav = document.getElementById('nav-hover'),
    profile = document.getElementById('profile');

nav.hidden = true;
profile.addEventListener('mouseenter', () => {
    nav.style.display = 'block';
});

nav.addEventListener('mouseenter', () => {
    nav.style.display = 'block';
});

profile.addEventListener('mouseleave', () => {
    nav.style.display = 'none';
});
nav.addEventListener('mouseleave', () => {
    nav.style.display = 'none';
});