'use strict'

// cuando hago hago mouseover sobre char__li[i]
//     añado clase ver a char__img[i]

//     cuando no hago hago mouseover sobre la clase char__li
//         quito clase ver a TODOS los char__img


let char__li    = document.querySelectorAll('.char__li')
let char__img   = document.querySelectorAll('.char__img')


    char__li.forEach(function (char__liItem, i) {
        char__li[i].addEventListener('mouseover', function () {
        char__li.forEach(function (char__liItem, i) {
            char__img[i].classList.remove('ver')
            
        });
        char__img[i].classList.add('ver')
        console.log(char__img[i]);

        })
        char__li[i].addEventListener('mouseout', function () {

            char__li.forEach(function (char__liItem, i) {
                char__img[i].classList.remove('ver')
                
            });

        })
        
    });

    // char__li.forEach(function (char__liItem, i) {
    //     char__img[i].classList.remove('ver') 
    // });







