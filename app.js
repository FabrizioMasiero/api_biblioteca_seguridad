const express = require('express');
const errorHandler = require('./middleware/error');

const { auth } = require('express-oauth2-jwt-bearer');

const autenticacion = auth({
    audience: 'http://127.0.0.1:3000/api/libros',
    issuerBaseURL: 'https://dev-za5vqerlilksmiin.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});



const app = express();
app.use(express.json());

//Router libro

const routeLibro = require('./routes/libros');


app.use('/libros', autenticacion, routeLibro);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Iniciando servidor en el puerto 3000");
});
