'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/location', require('./location'));
router.use('/image', require('./image'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
