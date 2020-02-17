var express = require("express");
var router = express.Router();
var project = require('../controllers/project');

router.post("/", project.createProject);

module.exports = router;