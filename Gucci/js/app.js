'use strict'


const bg = document.querySelector('.gucci__bg')   
const monkey = document.querySelector('.gucci__monkey')   
const horse = document.querySelector('.gucci__horse')
const img = document.querySelector('.gucci__images')


img.addEventListener('mousemove', (e)=>{
    // console.log(e);
    // console.log(e.offsetX);
    // console.log(e.clientX);
    // console.log(e.clientX);



    // MIERDA ----> va a tirones
    // monkey.style.top = "5px"

    // monkey.style.top = `${e.offsetY}px`
    // monkey.style.left = `${e.offsetX}px`


    // MOVEMOS RESPECTO A LA PANTALLA


    // monkey.style.top = `${e.clientY}px`
    // monkey.style.left = `${e.clientX}px`
    // monkey.style.top = `${e.pageY}px`
    // monkey.style.left = `${e.pageX}px`
    //  translateY(${e.pageX}) translateX(${e.pageX})



    monkey.style.transform = `translateY(${e.pageY}px) translateX(${e.pageX}px)`



})










            // cuadrado.style.transform = `rotateY(${ (e.offsetX - anchoCon)/vel }deg) rotateX(${ (e.offsetY - altoCon) /vel }deg)`


/* 
    const contenedor = document.querySelectorAll('.contenedor')

    contenedor.forEach( (cadaContenedor , i )=>{
        let anchoCon = contenedor[i].offsetWidth / 2
        let altoCon  = contenedor[i].offsetHeight / 2
        let vel = 2

        contenedor[i].addEventListener('mousemove',( e )=>{
            console.log( e )
            let cuadrado = e.target.firstElementChild
        })

        contenedor[i].addEventListener('mouseout',( e )=>{
            let cuadrado = e.target.firstElementChild
            cuadrado.style.transform = `rotateY(0deg) rotateX(0deg)`
        })
    }) 

*/