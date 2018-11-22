const express = require("express");
var pool = require('../pool.js');
var querystring = require('querystring');


var router = express.Router();
router.get('/testData', (req, res) => {
    var sql = `SELECT * FROM ifengtest1 WHERE i_test1_id>0 limit 1`;
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        res.send(result);

    })
})


module.exports = router;