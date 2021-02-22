const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/list', function(req, res) {
    const list = [
        {
            id: 1,
            title: 'title1',
            ins_dt: Date.now(),
            upt_dt: Date.now()
        },
        {
            id: 2,
            title: 'title2',
            ins_dt: Date.now(),
            upt_dt: Date.now()
        },
        {
            id: 3,
            title: 'title3',
            ins_dt: Date.now(),
            upt_dt: Date.now()
        },
    ]
    res.json({data: list})
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