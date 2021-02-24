'use strict'

/* 
    cuando hago click en ctrl__circle[i] 
        elimino de TODOS  .ver de slider__img
        elimino de TODOS .ver de ctrl__circle

        añado .ver slider__img
        añado .ver ctrl__circle
 */

let ctrl__circle    = document.querySelectorAll('.ctrl__circle') 
let slider__img     = document.querySelectorAll('.slider__img') 
let slider__izq     = document.querySelector('.slider__izq')
let slider__der     = document.querySelector('.slider__der')
let posicion        = 0
let num_slider      = 3
console.log(ctrl__circle);
console.log(slider__img);

ctrl__circle.forEach(function (ctrl__circleItem, i) {
    ctrl__circleItem.addEventListener('click', function () {  
        posicion = i    
        pasarSlider()
    })
});
slider__der.addEventListener('click', function () {
    posicion++

    if (posicion>=num_slider) {
        posicion = 0
    }
    console.log(posicion);
    pasarSlider()
})
slider__izq.addEventListener('click', function () {
    if (posicion<=0) {
        posicion = 3    
    }
    posicion--
    pasarSlider()
})

function pasarSlider() {
    ctrl__circle.forEach(function (ctrl__circleItem, i) {
        ctrl__circle[i].classList.remove('ver')
        slider__img[i].classList.remove('ver')
    });
    ctrl__circle[posicion].classList.add('ver')
    slider__img[posicion].classList.add('ver')
}