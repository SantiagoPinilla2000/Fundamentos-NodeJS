const express = require('express');
const app = express();
app.get('/API', (request, response) =>{
    response.status(200).send('API con camilito')
});

app.listen(3000, () =>{
    console.log('Servidos corriendo en puerto 3000')
})