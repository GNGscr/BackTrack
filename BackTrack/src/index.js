(function init() {
    mobileMenu();
}());


function mobileMenu() {
    
    const HM = document.querySelector('.hamburger-menu');
    const MN = document.querySelector('.mobile-nav');
    const CC = document.querySelector('.content-cover');

    let clicked = false;
    
    HM.addEventListener('click', () => {
    
        MN.style.transition = '500ms ease-in-out';
        CC.style.transition = '.7s ease-in-out';
    
        if(clicked === false) {
            MN.style.transform = 'translateX(41vw)'; 
            clicked = true;
            CC.style.display = 'flex';
            contentTransitionShow(CC);

        } else if(clicked === true) {
            MN.style.transform = 'translateX(-41vw)';
            clicked = false;
            contentTransitionHide(CC);   
        }
    });
};

function contentTransitionShow(CC) {
    CC.style.opacity = 1;
};

function contentTransitionHide(CC) {
    CC.style.opacity = 0;
    
    setTimeout(() => {
        hidingDisplay(CC);
    }, 700);
};

function hidingDisplay(content) {
    content.style.display = 'none';
};
