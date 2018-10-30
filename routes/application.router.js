const express = require('express');
const router = express.Router();
const controller = require('../database/controllers/controller');

router.route('/')
    .post(controller.createApplication)

router.route('/:id')
    .get(controller.findAllApplications)

module.exports = router;