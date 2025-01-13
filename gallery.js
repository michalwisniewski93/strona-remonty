const photos = [
    {id: 0, link: './images/gallery/01.jpg'},
    {id: 1, link: './images/gallery/02.jpg'},
    {id: 2, link: './images/gallery/03.jpg'},
    {id: 3, link: './images/gallery/04.jpeg'},
    {id: 4, link: './images/gallery/05.jpeg'},
    {id: 5, link: './images/gallery/06.jpg'},
    {id: 6, link: './images/gallery/07.jpg'},
    {id: 7, link: './images/gallery/08.jpg'},
    {id: 8, link: './images/gallery/09.jpg'},
    {id: 9, link: './images/gallery/10.jpg'},
    {id: 10, link: './images/gallery/11.jpg'},
    {id: 11, link: './images/gallery/12.jpg'},
    {id: 12, link: './images/gallery/13.jpg'},
    {id: 13, link: './images/gallery/14.jpg'},
    {id: 14, link: './images/gallery/15.jpg'},
    {id: 15, link: './images/gallery/16.jpg'},
    {id: 16, link: './images/gallery/17.jpg'},
    {id: 17, link: './images/gallery/18.jpg'},
    {id: 18, link: './images/gallery/19.jpeg'},
    {id: 19, link: './images/gallery/20.jpeg'},
    {id: 20, link: './images/gallery/21.jpeg'},
    {id: 21, link: './images/gallery/22.jpg'},
    {id: 22, link: './images/gallery/23.webp'},
    {id: 23, link: './images/gallery/24.png'}
]

const galleryPhoto = document.querySelector('.galleryPhoto img')
let  index = 0
galleryPhoto.src = photos[index].link

const leftIconGallery = document.querySelector('.leftIconGallery')
const rightIconGallery = document.querySelector('.rightIconGallery')


leftIconGallery.addEventListener('click', () => {
    index--
    console.log(index);
    if(index >= 0){
        galleryPhoto.src = photos[index].link
    }
    if(index <= 0){
        index = 0
    }
   
})
rightIconGallery.addEventListener('click', () => {
    index++
    console.log(index);
    if(index <= photos.length-1){
        galleryPhoto.src = photos[index].link
    }
    if(index >= photos.length-1){
        index = photos.length-1
    }
   
})

