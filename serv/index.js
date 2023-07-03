var express = require('express');
var app = express();

app.listen(51002)

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/md/:id', (req, res) => {
    let send = {
        code: 1,
        msg: 'markdown',
        data: {
            id: req.params.id,
            date: '2023-7-3 15:59',
            md: ''
        }
    }
    res.send(send)
})