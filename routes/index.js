'use strict';

var express = require('express');
var router = express.Router();
var HomeController =require('../controller/home-controller');

var homeController = new HomeController();
router.get('/', homeController.index);

router.post('/',homeController.index);

module.exports = router;
