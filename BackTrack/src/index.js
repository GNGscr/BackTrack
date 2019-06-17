(function() {
    mobileMenu();
}());

function mobileMenu() {

    const HM = document.querySelector('.hamburger-menu');
    const MN = document.querySelector('.mobile-nav');
    const CC = document.querySelector('.content-cover');

    let clicked = false;

    let Arr = [];
    Arr.push(HM, CC);

    Arr.forEach(item => item.addEventListener('click', () => {

        MN.style.transition = '500ms ease-in-out';
        CC.style.transition = '.5s ease-in-out';

        if (clicked === false) {
            MN.classList.add('show');
            CC.style.display = 'flex';
            setTimeout(() => {
                CC.style.opacity = 1;
                clicked = true;  
            }, 0);
        } else {
            MN.classList.remove('show');
            CC.style.opacity = 0;
            setTimeout(() => {
                CC.style.display = 'none';
                clicked = false;
            }, 500);
        }
    }));
};
