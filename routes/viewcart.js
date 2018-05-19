var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', (req, res) => {
//     console.log(req)
//     res.render('viewcart');
// });

/* POST users listing. */
router.post('/', (req, res) => {
    // console.log(req.body)
    let providerId = req.body.providerId
    res.render('viewcart', { providerId: providerId });
});

module.exports = router;
