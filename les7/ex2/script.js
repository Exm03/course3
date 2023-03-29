const btns = document.querySelectorAll('.btn');

const buttonClick = addEventListener('click', function (event) {
    const title = document.createElement('h1')
    title.textContent = 'Привет, пользователь!'
    event.target.before(title)
    event.target.classList.add('hiden')
});

btns.forEach(btn => {
    btn.onclick = buttonClick;
})

// document.addEventListener('click', function (event) {
//     const title = document.createElement('h1')
//     title.textContent = 'Привет, пользователь!'
//     event.target.replaceWith(title)
// });