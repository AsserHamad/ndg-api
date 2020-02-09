var express = require("express");
var router = express.Router();
var test = require('../controllers/test');

router.get("/", test.testFunction);

module.exports = router;