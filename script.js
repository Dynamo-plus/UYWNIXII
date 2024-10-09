
let currentSlide = 0;
let startX = 0;
let isDragging = false;

const slides = document.querySelector('.slides')
const totalSlides = document.querySelectorAll('.slide').length;

slides.addEventListener('touchstart', handleTouchStart);
slides.addEventListener('touchmove', handleTouchMove);
slides.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(event){
    startX = event.touches[0].clientX;
    isDragging = true;
}

function handleTouchMove(event){
    if (!isDragging) return;

    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;
    slides.style.transform = `translateX(${(icurrentSlide * 100) + (deltaX / window.innerWidth) * 100}%)`;
}

function handleTouchEnd(event){
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - startX;
    isDragging = false;

    if (Math.abs(deltaX) > 50){
        if(deltaX > 0){
            prevSlide();
        } else{
            nextSlide();
        }
    } else {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;    
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;    
}