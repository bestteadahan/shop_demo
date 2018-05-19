const express = require('express');
const router = express.Router();
const db = require('./awsdb')

/* GET users listing. */
router.get('/', function (req, res) {

    let customerId = req.headers.pid,
        providerType = 1 // 1: stores; 2: service

    if (customerId === undefined) {
        customerId = '12345678'
    }

    db.getAllProviders(providerType)
        .then(rows => res.render('stores', { stores: rows, customerId: customerId }))
});

module.exports = router;
