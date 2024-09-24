const menuButton = document.querySelector('.menu-button');
    const menu = document.getElementById('menu');

    // Toggle menu on button click
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