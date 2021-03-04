const express = require('express');
const router = express.Router();
const conn = require('../dbconnection')


router.post('/list', (req, res) => {
    conn.query(`select * from board_reply where board_id='${req.body.board_id}'`, (err, result) => {
        if(err){
            res.json({'result': 'fail'})
            throw err
        }else{
            console.log(result)
            res.json({'data': result})
        }
    })
})

router.post('/insert', (req, res) => {
    conn.query(`insert into board_reply (board_id, content, ins_dt, upt_dt, ins_user, upt_user) values ('${req.body.board_id}', '${req.body.content}', now(), now(), '${req.body.username}', '${req.body.username}')`, (err, result) => {
        if(err){
            res.json({'result': 'fail'})
            throw err
        }else{
            console.log(result)
            // res.json({'data': result, 'result': 'success'})
            conn.query(`select * from board_reply where id='${result.insertId}'`, (err, result) => {
                if(err){
                    res.json({'result': 'fail'})
                    throw err
                }else{
                    console.log(result)
                    res.json({'data': result})
                }
            })
        }
    })
})

router.post('/delete', (req, res) => {
    conn.query(`delete from board_reply where id=${req.body.id}`, (err, result) => {
        if(err){
            res.json({'result': 'fail'})
            throw err
        }else{
            console.log(result)
            res.json({'result': 'success'})
        }
    })
})

module.exports = router