'use strict';

var express = require('express');
var router = express.Router();

var HomeController =require('../../controllers/home');

var homeController = new HomeController();

router.get('/', homeController.index);

router.post('/',homeController.index);

module.exports = router;