const addIntputButton = document.querySelector('.input__add');
const anotherInputButton = document.querySelector('.input__another');
const backButton = document.querySelector('.back');
const parent = document.querySelector('.main');


addIntputButton.onclick = function() {
    const input = document.createElement("input");
    input.type = "text";
    input.value = "";
    input.className = "inp";
    parent.prepend(input);
};

backButton.onclick = function please() {
    const inputEl = document.querySelectorAll('.inp')
    let counter = 0;
    inputEl.forEach(element => {
        if (element.value === 'пожалуйста') {
            counter++
        }
        if (counter === 3) {
            alert ('все работает')
        }
    });
}









//  Второй вариант реализации
// const addIntputButton = document.querySelector('.input__add');
// const anotherInputButton = document.querySelector('.input__another');
// const backButton = document.querySelector('.back');
// const parent = document.querySelector('.main');
// let inputEl = document.querySelectorAll('.inp')


// addIntputButton.onclick = function() {
//     const input = document.createElement("input");
//     input.type = "text";
//     input.value = "";
//     input.className = "inp";
//     parent.prepend(input);
//     inputEl = document.querySelectorAll('.inp')
//     howManyInp();
// }


// function howManyInp () {
//     if (inputEl.length >= 3 ) {
//         please();
//     }
// }

// function please() {
    
//     let counter = 0;
//     inputEl.forEach((element) => {
//         if (inputEl.length >= 3 && element.value === 'пожалуйста') {
//             counter++;
            
//         }
//     });

//     if (counter >= 3) {
//         backButton.disabled = false;
//     } else {
//         backButton.disabled = true;
//     }
// };


// backButton.onclick = function () {
// inputEl.forEach((element) => {
//     element.addEventListener('input', () => {
//         please();
//     })
// })



// alert ('Все работает. Ура!')
// };
