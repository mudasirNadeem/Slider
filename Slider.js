var left = document.querySelector('.left');
var right = document.querySelector('.right');
var slider = document.querySelector('.slider');
var sliderNumber = 1;
var image = document.querySelectorAll('.images'); // Assuming `images` is an array containing image data
var imageLength = image.length;
right.addEventListener('click', () => {
    if (imageLength > sliderNumber) {
        slider.style.transform = `translateX(-${sliderNumber * 450}px)`;
        sliderNumber++;
    } else {
        slider.style.transform = `translateX(0px)`;
        sliderNumber = 1;
    }
});
left.addEventListener("click" , () => {
    if (sliderNumber > 1) {
        slider.style.transform = `translateX(-${(sliderNumber-2) * 450}px)`;
        sliderNumber--;
    } else {
        slider.style.transform = `translateX(-${(imageLength -1 ) * 450}px)`;
        sliderNumber = imageLength;
    }
});