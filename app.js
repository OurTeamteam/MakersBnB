var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(router);

router.get('/', function(req, res) {
    res.render('index');
});

app.listen(4567, () => {
    console.log('Example app listening on port 4567')
});