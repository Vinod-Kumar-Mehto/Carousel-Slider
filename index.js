const carouselSlide = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider img")
const numbers = document.querySelectorAll(".number div")
    

// Buttons

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
let counter = 1;
const imgSize = sliderImages[0].offsetWidth
carouselSlide.style.transform = 'translateX('+ (-imgSize * counter)+ 'px)';
numbers[0].style.backgroundColor = "white";
 let interverl = setInterval(function(){
    next()
 }, 4000)   


function next(){
    if(counter >= sliderImages.length - 1) return;
    carouselSlide.style.transition = "all 0.8s ease-in-out";
    counter++
    carouselSlide.style.transform = 'translateX('+ (-imgSize * counter)+ 'px)'


}



function prev(){
    if(counter <= 0) return;
    carouselSlide.style.transition = "all 0.8s ease-in-out";
    counter--
    carouselSlide.style.transform = 'translateX('+ (-imgSize * counter)+ 'px)'
    

}





carouselSlide.addEventListener("transitionend", function(){
    if(sliderImages[counter].id === "lastImage"){
        carouselSlide.style.transition = "none";
        console.log(counter)
        counter = sliderImages.length -2
        carouselSlide.style.transform = 'translateX('+ (-imgSize * counter)+ 'px)'
        
    }else if(sliderImages[counter].id === "firstImage"){
        console.log(counter)
        carouselSlide.style.transition = "none";
        counter = sliderImages.length - counter
        carouselSlide.style.transform = 'translateX('+ (-imgSize * counter)+ 'px)'

    }
})
carouselSlide.addEventListener("transitionend", function(){
    numbers.forEach((current) =>{
        if(current.innerHTML == counter){

            current.style.backgroundColor = "white";
        }else{
            current.style.backgroundColor ="transparent"
        }

    } )

})

nextBtn.addEventListener("click", function(){
    next()
})
prevBtn.addEventListener("click", function(){
    prev() 

})

