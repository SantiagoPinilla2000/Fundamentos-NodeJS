console.log('Hola Mundo');

let i = 0
console.log('Contando hasta el infitinito...');
setInterval(function () {
    console.log(i);
    i++;
       //Provocar Error
    /* if (i === 6) {
        var a = i + z;
    }; */
}, 1000);