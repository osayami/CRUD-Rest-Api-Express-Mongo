const express = require('express');
const router = express.Router();

router.use('/user' , require('../controllers/user.controller'))

module.exports = router;
