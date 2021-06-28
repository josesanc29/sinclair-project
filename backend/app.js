// Requires
var bodyParser = require('body-parser');
var express = require('express');

// Inicializar variables
var app = express();

//CORS: resolver problemas de Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// app.use(bodyParser.json({ limit: '16mb' }));
// app.use(bodyParser.urlencoded({ limit: '16mb', extended: true }));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Importar rutas
var route = require('./routes/route.js');

// Rutas
app.use('/', route);
// app.use('/mensajes', appRoutes);

// levantar backend con un listener para saber que esta OK
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});