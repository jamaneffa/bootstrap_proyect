const express = require('express')
const router = express.Router()

const userControllers = require('../controllers/userControllers')

router.get('/login', userControllers.login)

router.get('/register', userControllers.register)
router.post('/register', userControllers.record)

module.exports = router