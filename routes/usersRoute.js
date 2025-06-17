const express = require('express')
const Controllers = require('../mvc/controllers')
const router = express.Router()

router.get('/', Controllers.requestData)

module.exports = router