const imgUrl = 'https://cdn.botanichka.ru/wp-content/uploads/2021/10/bessherstnyie-koshki-sfinksyi-i-ne-tolko-07.jpg';
const img = document.getElementById('img');
const btn = document.getElementById('btn');


btn.onclick=() => {
    img.src = imgUrl;
    btn.classList.add('hide');
    img.classList.add('img')
}
