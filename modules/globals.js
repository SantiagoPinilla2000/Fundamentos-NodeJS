let i = 0;
let intervalo = setInterval(function () {
    console.log('Numero: ' + i)
    if (i === 3) {
        clearInterval(intervalo)
    }
    i++
}, 2000)