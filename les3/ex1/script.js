const colorBingo = document.getElementsByClassName ('colorBingo')[0];
const color = document.getElementsByClassName ('nameColor')[0];


let interval = setInterval ( 
    function changeColor () {
        let randomColor = Math.floor(Math.random() *256 *256 *256);
        let hex = '#'
        hex += ('000000' + randomColor.toString(16)).slice(-6)
        colorBingo.style.backgroundColor = hex
        color.textContent = hex
    }, 1000);
    }, 100);

    colorBingo.onclick = function () {
        clearInterval(interval)
    };

