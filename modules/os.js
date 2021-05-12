//Operative System with Node.js :D

const os = require('os')

console.log('Bienvenido Master')

console.log('La arquitectura de nuestro sistema operativo es de ' + os.arch() + ' bits');
console.log('Nuestra plataforma es ' + os.platform());
console.log('Nuestros Cores: '+ os.cpus().length);
