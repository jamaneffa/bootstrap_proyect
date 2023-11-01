const express = require('express')
const router = express.Router()

const upload = require('../middlewares/multerProductsConfig')

const productControllers = require('../controllers/productControllers')

router.get('/list', productControllers.list)

router.get('/create', productControllers.create)
router.post('/create', upload.single('img'), productControllers.store)

module.exports = router