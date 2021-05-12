const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error('No pude crear el archivo', err);
        } else {
            cb('Archivo creado exitosamente');
        }
    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, (err) => {

    })
}

escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)
leer(__dirname + '/archivo.txt', console.log)
borrar(__dirname + '/archivo2.txt', console.log)