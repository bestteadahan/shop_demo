const express = require('express');
const router = express.Router();
const db = require('./awsdb')

/* GET users listing. */
router.post('/', function (req, res) {
    let plist = req.body.productId
        // datas = []
    console.log(plist)

    db.getProductInfo(plist)
        .then(data => {
            // console.log(data)
            res.json(data)
        })
        .catch(err => console.log(err))

    // // plist.forEach((productId, index) => {
    //     db.getProductInfo(productId)
    //         .then(data => {
    //             // datas.push(data)
    //             res.json(data)
    //         })
    //         .catch(err => console.log(err))

    //     // if ((index + 1) == plist.length) {
    //     //     console.log(datas)
    //     // }
    // })

    // while (datas.length = plist.length) {
    // console.log(datas)
    // res.json(datas)
    //     break;
    // }
});

module.exports = router;