var hams = document.querySelector('.ham-container').children
var hamburger = document.querySelector('.ham-container')

hamburger.addEventListener('click', _=>{
    for(let i = 0; i < hams.length; i++){
        hams[i].parentNode.replaceChild(hams[i].cloneNode(), hams[i])
        hams[i].classList.toggle(`off${i+1}`)
        hams[i].classList.toggle(`on${i+1}`)
    }
})