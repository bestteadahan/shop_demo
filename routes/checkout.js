const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4')
const db = require('./awsdb')

/* GET home page. */
router.post('/', (req, res) => {
    let orderData = JSON.parse(req.body.order),
        orderId = uuid(),
        order = {
            orderId: orderId,
            customerId: req.body.customerId,
            providerId: req.body.providerId,
            status: 1,
            totalprice: req.body.totalprice
        }
    // console.log(order)

    db.insertNewOrder(order)
        .then(msg => console.log(msg))
        .catch(err => console.log(err))

    Object.keys(orderData).forEach(productId => {
        let orderdetail = {
            orderId: orderId,
            productId: productId,
            qty: orderData[productId].qty,
            subtotal: orderData[productId].subtotal
        }
        // console.log(orderdetail)
        db.insertOrderdetail(orderdetail)
            .then(msg => console.log(msg))
            .catch(err => console.log(err))
    })

    res.send(true);
});

module.exports = router;
