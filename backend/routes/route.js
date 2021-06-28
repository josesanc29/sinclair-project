var express = require('express');
var fs = require('fs')
var path = '/downloads/fuse.txt';
var route = express();

var mensajes = [{
    text: ''
}];

const logs = [{
        id: 1,
        path: './asas/fdfs',
        log: 'dasdasdas'
    },
    {
        id: 2,
        path: './fgrt/qreet',
        log: 'log weqw 35'
    },
    {
        id: 2,
        path: './fgrt/qreet',
        log: 'log weqw 35'
    }
];


// app.post('/:text', (req, res) => {
//     res.send('[POST]Saludos desde express');
//     var message = req.params.txt;
//     // var message = req.query.txt;
//     console.log('llega algo de frontend?? ', message);
//     fs.writeFile('fuse.txt', message, function(err) {
//         if (err) {
//             return res.status(500).json({
//                 ok: false,
//                 err: 'error'
//             });
//         }
//         return res.status(200).json({
//                 ok: true,
//                 res: 'Se ha grabado correctamente'
//             })
//             // console.log(`message > fuse.txt`);
//     });

// })
route.get('/', (req, res, next) => {
    console.log(req);
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });

});

route.get('/logs', (req, res) => {
    res.status(200).json({
        ok: true,
        logs: logs,
        mensaje: 'Recibo el listado de comentarios logs'
    });
})
route.post('/mensaje', (req, res) => {
    mensaje = req.params.mensaje;
    if (!mensaje) {
        return res.status(404).json({
            ok: false,
            error: 'No hay mensaje'
        });
    }
    return res.status(200).json({
        ok: true,
        mensajeOk: 'recibido',
        mensaje: mensaje
    });
});

module.exports = route;