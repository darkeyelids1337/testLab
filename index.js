const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const menuExit = document.querySelector('.menu-exit');
burgerMenu.addEventListener('click', () => {
    if(menu.style.display === 'none'){
        menu.style.display = 'flex'
    }
    else{
        menu.style.display = 'none'
    }
})
menuExit.addEventListener('click', () => {
    menu.style.display = 'none';
})