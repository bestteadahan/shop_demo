const express = require('express');
const router = express.Router();
const db = require('./awsdb')

/* GET users listing. */
router.get('/', function (req, res) {

    let pid = req.headers.pid

    if (pid === undefined) {
        pid = req.query.pid
    }

    if (pid === undefined) {
        pid = '12345678'
    }

    db.getOrders(pid)
        .then(rows => res.render('query', { orders: rows, pid: pid }))
});

module.exports = router;
