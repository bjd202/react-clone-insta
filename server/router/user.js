const express = require('express');
const router = express.Router();
const conn = require('../dbconnection')
const crypto = require('crypto')

router.post('/login', (req, res) => {
    // const inputPassword = req.body.password
    // const salt = Math.round((new Date().valueOf() * Math.random())) + "";
    // const hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    conn.query(`select * from user where username='${req.body.username}'`, (err, result) => {
        if(err){
            throw err
            res.json({'result': 'fail', 'login': false})
        }else{
            console.dir(result)
            
            const dbPassword = result[0].password
            const inputPassword = req.body.password
            const salt = result[0].salt
            const hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex")

            if(dbPassword === hashPassword){
                res.json({'user': result, 'result': 'success', 'login': true})
            }else{
                res.json({'result': 'fail', 'login': false})
            }
            
        }
    })
})

module.exports=router