const dropdown = document.querySelector(".dropdown");
const checkout = document.querySelector(".checkout");
const slideImages = document.querySelectorAll('.slide')
const slideshow = document.querySelector('.slideshow')
const slideBtnLeft = document.querySelector('#slide-left')
const slideBtnRight = document.querySelector('#slide-right')

let current = 0

checkout.addEventListener("click", () => {
    if(dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden")
    } else {
        dropdown.classList.add("hidden")
    }
})

//Clear alla slides
function reset(){
    for (let i = 0; i < slideImages.length; i++) {
        slideImages[i].style.display = 'none'
    }
}

//startar slide
function startSlide(){
    reset()
    slideImages[0].style.display = 'block'
}

function slideLeft(){
    reset()
    slideImages[current - 1].style.display = 'block'
    current--
}

function slideRight(){
    reset()
    slideImages[current + 1].style.display = 'block'
    current++
}

slideBtnLeft.addEventListener('click',()=>{
    if(current === 0){
        current = slideImages.length
    }
    slideLeft()
})

slideBtnRight.addEventListener('click',()=>{
    if(current === slideImages.length - 1){
        current = -1
    }
    slideRight()
})

startSlide()