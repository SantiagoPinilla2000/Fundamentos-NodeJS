async function saludoUsuario(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Ejecutando...');
        });
        setTimeout(function(){
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 3000)
    });
};

async function hablarUsuario(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Vamos a aprender Node.js (OMG, esto va a ser epico papus)');
            /* resolve(nombre); */
            resolve('Ha ocurrido un error');
        }, 1000);
    });
}

async function mensajeUsuario() {
    console.log(':D');
}

async function adiosUsuario(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Adios ' + nombre);
            resolve();
        }, 3000);
    });
};

async function main(){
    let nombre = await saludoUsuario('Santiago');
    await hablarUsuario();
    await adiosUsuario(nombre);
}

main();