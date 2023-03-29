const input = document.querySelector('input')
const badSymbols = /[ауоыиэяюёе]/gi;

document.addEventListener('DOMContentLoaded', function () {
    input.addEventListener('input', function() {
        input.value = input.value.replace ( badSymbols, '');
    })
})
