var left = document.querySelector('.left');
var right = document.querySelector('.right');
var slider = document.querySelector('.slider');
var sliderNumber = 1;
var images = document.querySelectorAll('.images');
var length = images.length;
right.addEventListener('click', ()=>{
   sliderNumber < length ? nextSlider() : firstSlider();
})
const nextSlider = () =>{
    slider.style.transform = `translateX(-${sliderNumber*400}px)`;
    sliderNumber++;
} 
const firstSlider = () => {
    slider.style.transform = `translateX(0px)`;
    sliderNumber = 1;
}

// *** Left Slider *** ///

const prevSlider = ()=>{
    slider.style.transform = `translateX(-${(sliderNumber-2 )*400}px)`;
    sliderNumber--;
} 

const lastSlider = ()=> {
    slider.style.transform = `translateX(-${(length-1 )*400}px)`;
    sliderNumber = length;
}

left.addEventListener('click', ()=>{
    sliderNumber > 1 ? prevSlider() : lastSlider();
 })