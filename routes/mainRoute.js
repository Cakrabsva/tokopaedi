const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {res.send('<h1>Home<h1/>')})
router.use("/Users", require('./usersRoute'))

module.exports = router