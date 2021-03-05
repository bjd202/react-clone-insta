const express = require('express');
const router = express.Router();
const conn = require('../dbconnection')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.post('/list', function(req, res) {
    conn.query('select * from board order by id desc', (err, rows) => {
        if(err){
            throw err
        }else{
            console.dir(rows)
            res.json({'data': rows})
        }
    })
});

router.post('/read', function(req, res) {
    conn.query(`select * from board where id='${req.body.id}'`, (err, result) => {
        if(err){
            res.json({'result': 'fail'})
            throw err
        }else{
            console.log(result)
            res.json({'data': result, 'result': 'success'})
        }
    })
});

router.post('/insert', function(req, res) {
    conn.query(`insert into board (title, content, ins_dt, upt_dt, ins_user, upt_user) values ('${req.body.title}', '${req.body.content}', now(), now(), '${req.body.username}', '${req.body.username}')`, (err, result) => {
        if(err){
            res.json({'result': 'fail'})
            throw err
        }else{
            console.log(result)
            res.json({'result': 'success'})
        }
    })
});

router.post('/update', function(req, res) {
    conn.query(`update board set title='${req.body.title}', content='${req.body.content}', upt_dt=now(), upt_user='update_user' where id='${req.body.id}'`, (err, result) => {
        if(err){
            res.json({'result': 'fail'})
            throw err
        }else{
            console.log(result)
            res.json({'result': 'success'})
        }
    })
});

router.post('/delete', function(req, res) {
    conn.query(`delete from board where id='${req.body.id}'`, (err, result) => {
        if(err){
            res.json({'result': 'fail'})
            throw err
        }else{
            console.log(result)
            res.json({'result': 'success'})
        }
    })
});

module.exports = router;