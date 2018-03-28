var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();



// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
//
// const client = new Client({
//   connectionString: connectionString,
// })
// client.connect()
//
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })



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
       client.query('SELECT * from GetAllStudent()' ,function(err,result) {
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
});

// router.get('/pool', function(req, res){
//   const { Pool, Client } = require('pg');
//   const connectionString = 'postgres://ytkwmctmathlkj:82a69483519c86726e5a4a4c3d528fb478b12392f0a81d0a52d1167c11be5362@ec2-54-195-246-59.eu-west-1.compute.amazonaws.com:5432/d3e95ee65qefns'
//
//   const pool = new Pool({
//     connectionString: connectionString,
//   });
//
//   pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })
//
//   const client = new Client({
//     connectionString: connectionString,
//   })
//   client.connect()
//
//   client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
//   })
//
//   // pool.query('SELECT * FROM users', [1])
//   //   .then(res => console.log('user_id:', res.rows[0]))
//   //   .catch(e => setImmediate(() => { throw e }));
//
//     // res.render('pool');
//   });
//
// // });
//
// // router.get('/pool', function (req, res) {
// //     pool.connect(function(err,client,done) {
// //        if(err){
// //            console.log("not able to get connection "+ err);
// //            res.status(400).send(err);
// //        }
// //        pool.query('SELECT * from GetAllStudent()' ,function(err,result) {
// //           //call `done()` to release the client back to the pool
// //            done();
// //            if(err){
// //                console.log(err);
// //                res.status(400).send(err);
// //            }
// //            res.status(200).send(result.rows);
// //        });
// //     });
// //     // res.render('pool');
// // });




app.listen(4567, () => {
    console.log('Example app listening on port 4567')
});
