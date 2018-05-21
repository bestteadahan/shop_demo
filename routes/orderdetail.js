const express = require('express');
const router = express.Router();
const db = require('./awsdb')

/* GET users listing. */
router.get('/', function (req, res) {

    let orderId = req.query.oid,
        pid = req.query.pid
    db.getOrderdetail(orderId)
        .then(rows => {
            let details = rows[0],
                order = rows[1][0]
            // console.log(details)
            details.forEach(row => row.pictures = row.pictures.split(';')[0]);
            res.render('orderdetail', { products: details, order: order, pid: pid })
        })
})

module.exports = router;
