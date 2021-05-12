function saludoUsuario(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            console.log('Ejecutando...');
            resolve(nombre);
        }, 1000);
    });
};

function hablarUsuario(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Vamos a aprender Node.js (OMG, esto va a ser epico papus)');
            /* resolve(nombre); */
            reject('Ha ocurrido un error');
        }, 1000);
    });
}

function mensajeUsuario() {
    console.log(':D');
}

function adiosUsuario(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Adios ' + nombre);
            resolve(nombre);
        }, 3000);
    });
};

function conversacion(nombre, veces, callbackConversacion) {
    if (veces > 0) {
        hablarUsuario(function () {
            conversacion(nombre, --veces, callbackConversacion);
        })
    } else {
        adiosUsuario(nombre, callbackConversacion);
    }
}

console.log('Iniciando proceso...')
saludoUsuario('Santiago')
    .then(hablarUsuario)
    .then(hablarUsuario)
    .then(adiosUsuario)
    .then((nombre) => {
        console.log('Proceso finalizado.')
        
    })
    .catch(error => {
        console.error('Ha habido un error:')
        console.error(error)
    })