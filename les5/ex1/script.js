const main = document.querySelector('.main');
const body = document.querySelector('body');
const preloader = document.createElement('span');
const imgUrl = 'https://images.unsplash.com/photo-1529669851596-ba9a5549af95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80';

function spiner () {
    preloader.classList.add('loader');
    main.appendChild(preloader);
    function copyClipboard(url) {
        return navigator.clipboard.writeText(url);
      }
    body.addEventListener('click', function() { 
        copyClipboard(imgUrl); 
      });
}
document.addEventListener("DOMContentLoaded", spiner);


const img = document.createElement('img');
img.classList.add('hide');
img.src = imgUrl;
main.appendChild(img);


window.onload = function name() {
    preloader.remove();
    img.classList.remove('hide');
    img.classList.add('img');
}

