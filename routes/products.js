const express = require('express');
const router = express.Router();
const db = require('./awsdb')

/* GET users listing. */
router.get('/:id', function (req, res) {
    let providerId = req.params.id,
        products, providerInfo,
        customerId = req.headers.pid

    if (customerId === undefined) {
        customerId = '12345678'
    }

    db.getAllProducts(providerId)
        .then(rows => {
            products = rows
            return db.getProviderInfo(providerId)
        })
        .then(rows => res.render('products', {
            products: products,
            providerInfo: rows,
            providerId: providerId,
            customerId: customerId
        }))
});

module.exports = router;