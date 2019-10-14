var hams = document.querySelector('.ham-container').children
var hamburger = document.querySelector('.ham-container')
var j = 0
hamburger.addEventListener('click', _=>{
    for(let i = 0; i < hams.length; i++){
        hams[i].parentNode.replaceChild(hams[i].cloneNode(), hams[i])
        if(j%2==0){
            hams[i].classList.add(`off${i+1}`)
            hams[i].classList.remove(`on${i+1}`)
        }else{
            hams[i].classList.remove(`off${i+1}`)
            hams[i].classList.add(`on${i+1}`)
        }
    }
    j++
})