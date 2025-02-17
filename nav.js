const menuButton = document.querySelector('.menu-button');
const menu = document.getElementById('menu');
const serviceMenu = document.querySelectorAll('.sub-link');

console.log(serviceMenu);
// Toggle main menu on button click
menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Hide menu when clicking outside
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Hide menu on window resize
window.addEventListener('resize', () => {
    menu.classList.remove('active');
});

serviceMenu.forEach((link)=>{
    link.addEventListener('click', (event)=>{
        if(window.innerWidth <= 768){
            event.preventDefault();
            const submenu = link.nextElementSibling;
            submenu.classList.toggle('active');
        }
    });
});
