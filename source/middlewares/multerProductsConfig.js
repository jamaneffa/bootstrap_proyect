const multer = require('multer')

const {extname, resolve} = require('path')
const fs = require('fs')

const storage = multer.diskStorage ({

    destination : function (req, file, cb) { 
        let folder  = resolve(__dirname,'../../assets/img/products')
        if(!fs.existsSync(folder)) {
            fs.mkdirSync(folder)		
        }
        return cb(null, folder); 
    }, 

    filename : function (req, file, cb) {
        const filename = 'product-' + Date.now() + extname(file.originalname)
        return cb(null, filename)
    } 
})

const upload = multer({ storage })

module.exports = upload