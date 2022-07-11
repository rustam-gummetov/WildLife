function scrollToElement(id) {
    const el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}

const form = document.getElementById('form-container__donate');
const formContainer = document.getElementById('form-container');
const page = document.getElementById('page');
const donate = document.getElementById('btn-donate');
const body = document.querySelector('body');
body.addEventListener('click', e => {
    formContainer.classList.remove('form-open');
    page.classList.remove('page-none');
    body.style.overflow = 'scroll';
})

window.addEventListener('click', e => {
    const target = e.target;
    if (target === donate) {
        formContainer.classList.add('form-open');
        page.classList.add('page-none')
        body.style.overflow = 'hidden';
        form.scrollIntoView({block: "center", inline: "center"});
    }
})

const sliderCards = document.getElementById('slider').getElementsByTagName('div');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
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

// if (window.screen.width > 1024) {
//     console.log('> 1024')
//     for (sliderCard of sliderCards) {
//         sliderCard.style.display = 'block';
//     }
// }