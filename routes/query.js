const express = require('express');
const router = express.Router();
const db = require('./awsdb')

/* GET users listing. */
router.get('/', function (req, res) {

    let customerId = req.headers.pid

    if (customerId === undefined) {
        customerId = '12345678'
    }

    db.getOrders(customerId)
        .then(rows => res.render('query', { orders: rows }))
});

module.exports = router;
