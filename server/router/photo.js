const express = require('express');
const router = express.Router();
const conn = require('../dbconnection')
const multer = require('multer');
const upload = multer({dest: 'upload/'})

router.post('/insert', upload.array('file'), (req, res) => {
    console.dir(req.body)
    console.dir(req.files)

    const photo_query = `insert into photo
        (
            title,
            content,
            ins_dt,
            upt_dt,
            ins_user,
            upt_user
        )
        values 
        (
            '${req.body.title}',
            '${req.body.content}',
            now(),
            now(),
            '${req.body.username}',
            '${req.body.username}'
        )
    `

    conn.query(photo_query, (err, result) => {
        if(err){
            throw err
        }else {
            if(req.files.length > 0){
                req.files.map((f, index) => {
                    const file_query = `insert into photo_file
                        (
                            filename,
                            originalname,
                            size,
                            mimetype,
                            destination,
                            photo_id
                        )
                        values
                        (
                            '${f.filename}',
                            '${f.originalname}',
                            '${f.size}',
                            '${f.mimetype}',
                            '${f.destination}',
                            '${result.insertId}'
                        )
                    `

                    conn.query(file_query, (err, result) => {
                        if(err){
                            res.json({'result': 'fail'})
                            throw err
                        }else{
                            
                        }
                    })
                })

                res.json({'result': 'success'})
            }else{
                res.json({'result': 'success'})
            }
        }
    })
})

module.exports = router