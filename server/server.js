require('./config/config');

const express = require('express');
const app = express();
const bodyParse = require('body-parser');

// pase application/x-www-urlencoded
app.use(bodyParse.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParse.json());

app.get('/', function(req, res) {
    res.json('hello word');
});

app.get('/usuario', function(req, res) {
    res.json('GET usuarios');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined)
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    res.json({
        body
    });
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('DELETE usuarios');
});


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`escuchando por el puerto ${port } `);
});