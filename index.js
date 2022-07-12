function scrollToElement(id) {
    const el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}

const form = document.getElementById('popap__form');
const formContainer = document.getElementById('popap');
const donate = document.getElementById('survival__btn');
const body = document.querySelector('body');
body.addEventListener('click', e => {
    formContainer.classList.remove('form-open');
    body.style.overflow = 'scroll';
})

window.addEventListener('click', e => {
    const target = e.target;
    if (target === donate) {
        formContainer.classList.add('form-open');
        body.style.overflow = 'hidden';
        form.scrollIntoView({block: "center", inline: "center"});
    }
})

const sliderCards = document.getElementById('articles__slider').getElementsByTagName('div');
const arrowLeft = document.getElementById('articles__slider__left');
const arrowRight = document.getElementById('articles__slider__right');
let i = 0;

arrowLeft.addEventListener('click', () => {
    if (window.screen.width <= 1024) {
        sliderCards[i].style.display = 'none';
        i--;
        if (i < 0) {
            i = 2;
        }
        sliderCards[i].style.display = 'block';
    }
})

arrowRight.addEventListener('click', () => {
    if (window.screen.width <= 1024) {
        sliderCards[i].style.display = 'none';
        i++;
        if (i > 2) {
            i = 0;
        }
        sliderCards[i].style.display = 'block';
    }
})