const express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname+'/index.html');
});

app.listen(3000);