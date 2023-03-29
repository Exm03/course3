const title = document.querySelector('.title');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (event) {
    title.classList.remove('hiden')
    event.target.classList.add('hiden')
});