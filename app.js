var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();
var pg = require('pg');
var ejs = require('ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var config = {
  user: 'ytkwmctmathlkj',
  host: 'ec2-54-195-246-59.eu-west-1.compute.amazonaws.com',
  ssl: true,
  database: 'd3e95ee65qefns',
  password: '82a69483519c86726e5a4a4c3d528fb478b12392f0a81d0a52d1167c11be5362',
  port: 5432,
  max: 10, // max number of connection can be open to database
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

// var pool = new pg.Pool(config);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(router);

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/addroomform', function(request, response) {
    response.render('addroomform');
});

router.post('/addroom', function(request, response) {
  var user_id = 2;
  var roomname = request.body.roomname;
  var price = request.body.price;
  var description = request.body.description;
  var queryString = `INSERT INTO rooms(user_id, roomname, price, description) VALUES ('${user_id}','${roomname}','${price}','${description}');`;
  var pool = new pg.Pool(config);

  console.log(roomname);
  console.log(price);
  console.log(description);
  console.log(queryString);

  pool.connect(function(err,client,done) {
       client.query(queryString ,function(err,result) {
          //call `done()` to release the client back to the pool
           done();
           if(err){
               console.log(err);
               response.status(400).send(err);
           } else {
           response.render('index');
         }
       });
    });
});

router.get('/pool', function(request, response){
  var pool = new pg.Pool(config);
  pool.connect(function(err,client,done) {
       client.query('SELECT * from users' ,function(err,result) {
          //call `done()` to release the client back to the pool
           done();
           if(err){
               console.log(err);
               response.status(400).send(err);
           }
           response.render('pool', { results: result.rows, name: 'this is users name'});
       });
    });
});

app.listen(4567 || process.env.PORT, () => {
    console.log('Example app listening on port 4567')
});
