function saludoUsuario(nombre, callbackHola) {
    setTimeout(function (){
        console.log('Hola ' + nombre);
        console.log('Ejecutando...');
        callbackHola(nombre);
    }, 1000);
};

function mensajeUsuario () {
    console.log(':D');
}

function adiosUsuario(nombre, callbackAdios){
    setTimeout (function () {
        console.log('Adios ' + nombre);
        callbackAdios();
    }, 1000);
};

console.log('Iniciando proceso...');
saludoUsuario('Santiago Pinilla', function (nombre){
    adiosUsuario(nombre, function(){
        console.log('Proceso finalizado.');
        mensajeUsuario();
    });
});