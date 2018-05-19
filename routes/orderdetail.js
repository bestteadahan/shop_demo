const express = require('express');
const router = express.Router();
const db = require('./awsdb')

/* GET users listing. */
router.get('/:id', function (req, res) {

    let orderId = req.params.id
    db.getOrderdetail(orderId)
        .then(rows => {
            let details = rows[0],
                order = rows[1][0]
            // console.log(details)
            details.forEach(row => row.pictures = row.pictures.split(';')[0]);
            res.render('orderdetail', { products: details, order: order })
        })
})

module.exports = router;
