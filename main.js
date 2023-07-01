const showMenu = document.getElementById('show-menu')
const closeMenu = document.getElementById('close-menu')
const navLinks = document.querySelector('.nav-links')

showMenu.addEventListener('click', ()=>{
    navLinks.style.right = '0'
})

closeMenu.addEventListener('click', ()=>{
    navLinks.style.right = '-400px'
})



