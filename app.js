var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();
var pg = require('pg');

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

var pool = new pg.Pool(config);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(router);

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/pool', function(req, res){
  pool.connect(function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       }
       client.query('SELECT * from users' ,function(err,result) {
          //call `done()` to release the client back to the pool
           done();
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result.rows);
       });
    });
});

app.listen(process.env.PORT || 4567, () => {
    console.log('Example app listening on port 4567')
});
