// import { inherits } from 'util';


// let templates = {};
// templates.imgTemplate = `
// <div class="item">
//     <img class="box-pic" src={{placeholder}} alt="Beatles img" srcset="">
// </div>`;
// templates.imageTemplate = `
// <div class="image fade">
// <img class="box-pic" src={{"../IMG/album19.jpeg"}} alt="Beatles img" srcset="">
// </div>`;



(function init() {
    mobileMenu();
    // createItems();
    // loadData();
    // templateUser();
})();


function mobileMenu() {
    
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
            contentTransitionShow(CC);

        } else if(clicked === true) {
            MN.style.transform = 'translateX(-41vw)';
            clicked = false;

            contentTransitionHide(CC);   

            setTimeout(() => {
                hidingDisplay(CC);
            }, 700);
        }
    });
};

function contentTransitionShow(CC) {
    CC.style.transition = '.7s ease-in-out';
    CC.style.opacity = 1;
};

function contentTransitionHide(CC) {
    CC.style.transition = '.7s ease-in-out';
    CC.style.opacity = 0;
};

function hidingDisplay(CC) {
    CC.style.display = 'none';
};

// function loadData() {
//     fetch("./data/ex_data.json")
//         .then(res => res.json())
//         .then((data) => {
//             templatesUser(data.innerData);
//         }
//     );
// };


// function createItems() {

//     let item = document.createElement('div');
//     // item.className = item;
//     item.classList.add('item');
    
//     let img = document.createElement('img');
//     img.type = 'img';
//     img.setAttribute('src', '');
//     img.setAttribute('alt', '');

//     img.innerHTML = `<img class="box-pic" src={${code}} alt="Beatles img" srcset="">`;
//     item.appendChild(img);
    
//     const items;
//     items.forEach(item => {
        
//         item = `
//         <div class="item">
//         <img class="box-pic" src={${item}} alt={${loopItemName}} srcset="">
//         </div>
//         `;
//     });
//     LNG.appendChild(items);
// }


// function templatesUser(items) {

    // const LNG = document.querySelector('.long');

    // Array.from(something).map(item => {
    //     item.innerHTML = ``;
    // });
    
//     let items = [];
//     items.push();
    
//     items.forEach(item => {
//         img.innerHTML += templates.imgTemplate.replace("{{placeholder}}", item.name.id);
//     });
//     LNG.appendChild(items);
// };
