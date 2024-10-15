const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
newrelic = require('newrelic') ;


app.get('/', (req, res) => {

    newrelic.noticeError(new Error('Este es un log personalizado en la ruta principal'));
  
    res.send('Hola, New Relic está monitoreando esta aplicación.');
  });

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
