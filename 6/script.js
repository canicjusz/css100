var searchIcon = document.querySelector('.top__search')
var searchBox = document.querySelector('.top__search-box')
var hamburger = document.querySelector('.top__hamburger')
var side = document.querySelector('.side')
var main = document.querySelector('.main')

searchIcon.addEventListener('click', ()=>{
    searchBox.classList.toggle('top__search-box--visible')
})

hamburger.addEventListener('click', ()=>{
    console.log('x')
    main.classList.toggle('main--slide')
    side.classList.toggle('side--visible')
})