const express = require('express');
const router = express.Router();
const conn = require('../dbconnection')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/list', function(req, res) {
    conn.query('select * from board', (err, rows) => {
        if(err){
            console.error(err)
        }else{
            console.dir(rows)
            res.json({'data': rows})
        }
    })
});

router.get('/read/:id', function(req, res) {
  
});

router.get('/insert', function(req, res) {
  
});

router.get('/update/:id', function(req, res) {
  
});

router.get('/delete/:id', function(req, res) {
  
});

module.exports = router;