const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(4567, () => {
    console.log('Example app listening on port 4567')
});