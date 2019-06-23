(function() {
    mobileMenu();
}());

function mobileMenu() {

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const contentCover = document.querySelector('.content-cover');

    let clicked = false;

    let Arr = [];
    Arr.push(hamburgerMenu, contentCover);

    Arr.forEach(item => item.addEventListener('click', () => {

        mobileNav.style.transition = '500ms ease-in-out';
        contentCover.style.transition = '500ms ease-in-out';

        if (clicked === false) {
            mobileNav.classList.add('show');
            contentCover.style.display = 'flex';
            setTimeout(() => {
                contentCover.style.opacity = 1;
                clicked = true;  
            }, 0);
        } else {
            mobileNav.classList.remove('show');
            contentCover.style.opacity = 0;
            setTimeout(() => {
                contentCover.style.display = 'none';
                clicked = false;
            }, 500);
        }
    }));
};
