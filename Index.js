var left = document.querySelector('.left');
var right = document.querySelector('.right');
var slider = document.querySelector('.slider');
var sliderNumber = 1;
var images = document.querySelectorAll('.images');
var length = images.length;

var bottomElement = document.querySelector('.bottom');
 for(var i = 0 ; i < length ; i++){
    var divElement = document.createElement('div')
    divElement.className = 'button';
    bottomElement.appendChild(divElement)
 }
 var buttonsElement = document.querySelectorAll('.button');
 buttonsElement[0].style.backgroundColor = 'white';
    const restBg = () =>{
        buttonsElement.forEach((button) =>{
            button.style.backgroundColor = 'transparent'
        })
    }
buttonsElement.forEach((button, i) => {
    button.addEventListener('click', () => {
        restBg();
        slider.style.transform = `translateX(-${i * 400}px)`;
        // sliderNumber = i + 1;
        button.style.backgroundColor = 'white';
    });
});

right.addEventListener('click', ()=>{
   sliderNumber < length ? nextSlider() : firstSlider();
   chengeColor();
})
const chengeColor =  () =>{
    restBg();
    buttonsElement[sliderNumber - 1].style.backgroundColor = 'white' ;
}
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
   chengeColor();

 })

 