const input = document.querySelector('input')
const inputList = document.querySelector('.list_input')
const list = document.querySelector('.list')
const p = document.querySelectorAll('p')

document.addEventListener('DOMContentLoaded', function () {
    input.addEventListener('keydown', function(event) {
        console.log(event)
        if ((event.keyCode == 37) || (event.keyCode == 39)) {
            let oldChild = list.removeChild(list.firstElementChild);
            input.value = oldChild.textContent
        }
        // if (event.keyCode == 39) {
        //     list.removeChild()
            
        // }
    })
})
