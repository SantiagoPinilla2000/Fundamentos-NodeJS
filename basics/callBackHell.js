function saludoUsuario(nombre, callbackHola) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        console.log('Ejecutando...');
        callbackHola(nombre);
    }, 1000);
};

function hablarUsuario(callbackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla bla bla arequipe bla bla bla bla...');
        callbackHablar();
    });
}

function mensajeUsuario() {
    console.log(':D');
}

function adiosUsuario(nombre, callbackAdios) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        callbackAdios();
    }, 5000);
};

function conversacion (nombre, veces, callbackConversacion) {
    if (veces > 0) {
        hablarUsuario(function (){
            conversacion (nombre, --veces, callbackConversacion);
        })
    }   else{
        adiosUsuario (nombre, callbackConversacion);
    }
}

console.log('Iniciando proceso...');
saludoUsuario ('Santiago Pinilla', function (nombre){
    conversacion (nombre, 3, function(){
        console.log('Proceso finalizado');
    })
})