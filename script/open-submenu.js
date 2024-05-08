const submenuBtn = document.querySelector('.submenu');
const backDropMenu = document.querySelector('.submenu__list');
const headerContainer = document.querySelector('.header__container');
const headerMenu = document.querySelector('.header__menu');
console.log(submenuBtn, backDropMenu, headerContainer, headerMenu)

submenuBtn.addEventListener('mouseover', () => {
    backDropMenu.style.display = 'flex';
    // backDropMenu.style.bottom = '-270px';
    headerContainer.style.borderRadius = '20px 20px 0 0';
})

headerMenu.addEventListener('mouseleave', () => {
    backDropMenu.style.display = 'none';
    headerContainer.style.borderRadius = '20px 20px 0 0';
    // backDropMenu.style.bottom = '0';
})