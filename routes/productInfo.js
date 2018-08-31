const express = require('express');
const router = express.Router();
const db = require('./awsdb')

/* GET users listing. */
router.post('/', function (req, res) {
    let plist = req.body.productId
    console.log(plist)

    db.getProductInfo(plist)
        .then(data => {
            res.json(data)
        })
        .catch(err => console.log(err))

});

module.exports = router;