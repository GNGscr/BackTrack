const HM = document.querySelector('.hamburger-menu');
const MN = document.querySelector('.mobile-nav');
const CC = document.querySelector('.content-cover');

let clicked = false;

HM.addEventListener('click', () => {

    MN.style.transition = '500ms ease-in-out';

    if(clicked === false) {
        MN.style.transform = 'translateX(41vw)'; 
        clicked = true;
        CC.style.display = 'flex';
    } else if(clicked === true) {
        MN.style.transform = 'translateX(-41vw)';
        clicked = false;
        CC.style.display = 'none';
    }
});