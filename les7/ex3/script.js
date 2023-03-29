const btns = document.querySelectorAll('.btn');
let btnOpac = '1'

const buttonClick = addEventListener('click', function (event) {
   btnOpac = btnOpac/2
   if (btnOpac < 0.1) {
    alert ('Менее тусклую кнопку не видно')
   }
   if (btnOpac > 0.1) {
    event.target.style.opacity = btnOpac
   }
   
});

btns.forEach(btn => {
    btn.onclick = buttonClick;
})
