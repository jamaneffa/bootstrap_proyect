const express = require('express')
const router = express.Router()

const upload = require('../middlewares/multerUsersConfig')

const userControllers = require('../controllers/userControllers')

router.get('/login', userControllers.login)

router.get('/register', userControllers.register)
router.post('/register', upload.single('avatar'),userControllers.record)

module.exports = router