window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    
    for (let i = 0; i < reveals.length; i++) {

        const windowHeight = window.innerHeight; // get window height
        const revealTop = reveals[i].getBoundingClientRect().top; //get section top
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}