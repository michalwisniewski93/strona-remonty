const menuIcon = document.querySelector('.menuIco')
const menuUl = document.querySelector('section.menu ul')


menuIcon.addEventListener('click', () => {
    console.log('klik');
    menuUl.classList.toggle('show')
})
