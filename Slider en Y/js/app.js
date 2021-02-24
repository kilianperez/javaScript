'use strict'

// const img        = document.querySelectorAll('.img')
// const li         = document.querySelectorAll('.li')
// const siguiente  = document.querySelector('.siguiente')
// const anterior   = document.querySelector('.anterior')

// let posicion = 0



const contenedor = document.querySelector('.contenedor')

let ctrl__circle    = document.querySelectorAll('.li')
let slider__img     = document.querySelectorAll('.img')
let slider__izq     = document.querySelector('.siguiente')
let slider__der     = document.querySelector('.anterior')

let posicion        = 0
let num_slider      = 3
console.log(ctrl__circle);
console.log(slider__img);



ctrl__circle.forEach(function (ctrl__circleItem, i) {
    ctrl__circleItem.addEventListener('click', function () {  
        posicion = i  
        pasarFoto()
        console.log(posicion);
    })
});



slider__izq.addEventListener('click', function () {
    posicion++

    if (posicion>=num_slider) {
        posicion = 0
    }
    console.log(posicion);
    pasarFoto()
})


slider__der.addEventListener('click', function () {

    if (posicion<=0) {
        posicion = 3    
    }

    posicion--
    pasarFoto()
})



function pasarFoto(){
    contenedor.style.transform = `translateX(${ posicion * -33.33 }%)`
    ctrl__circle.forEach(function (ctrl__circleItem, i) {
        ctrl__circle[i].classList.remove('ver')
        slider__img[i].classList.remove('ver')
    });
    ctrl__circle[posicion].classList.add('ver')
    slider__img[posicion].classList.add('ver')

}