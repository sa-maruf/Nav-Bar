// navbar 
let mobMenuBtn = document.getElementById('mob-menu-btn');
let mobMenu = document.getElementById('mob-menu');

mobMenuBtn.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
});

// search bar 
let searchIcon=document.getElementById('search-icon');
let searchMain=document.getElementById('search-main');

searchIcon.addEventListener('click', ()=>{
    searchMain.classList.toggle('open')
})