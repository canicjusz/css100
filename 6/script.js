var searchIcon = document.querySelector('.top__search')
var searchBox = document.querySelector('.top__search-box')
var hamburger = document.querySelector('.top__hamburger')
var side = document.querySelector('.side')
var main = document.querySelector('.main')
var i = 0

searchIcon.addEventListener('click', ()=>{
    searchBox.classList.toggle('top__search-box--visible')
})

hamburger.addEventListener('click', ()=>{
    console.log('x')
    main.classList.toggle('main--slide')
    side.classList.toggle('side--visible')
})

function FadePostsIn(){
    i++
    console.log(`.post-${i}`)
    document.querySelector(`.post-${i}`).classList.add('post--fade-in')
    if(i<3)setTimeout(FadePostsIn,300)
}
setTimeout(FadePostsIn,300)