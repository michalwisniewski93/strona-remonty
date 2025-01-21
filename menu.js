const menuIcon = document.querySelector('.menuIco')
const menuUl = document.querySelector('section.menu ul')


menuIcon.addEventListener('touchstart', () => {
    console.log('klik');
    menuUl.classList.toggle('show')
})
