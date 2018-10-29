const express = require('express');
const router = express.Router();
const controller = require('../database/controllers/controller');

router.route('/')
    .post(controller.createApplication)

module.exports = router;