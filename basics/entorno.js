let nombre = process.env.NOMBRE || 'Stranger';
let web = process.env.WEB || 'No tengo web';

console.log('Welcome ' + nombre);
console.log('Mi web es ' + web);