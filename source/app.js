const express = require('express')
const app = express()

const {resolve} = require('path')

const port = 2020
app.listen(port, () => console.log (`Starting Server in http://localhost:${port}`))

app.use(express.static(resolve(__dirname, '../assets')))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.set('view engine','ejs')
app.set('views', resolve(__dirname, 'views'));

const method = require('method-override')
app.use(method('_method'))

app.use('/', require('./routers/mainRoutes'))
app.use('/products', require('./routers/productRoutes'))
app.use('/users', require('./routers/userRoutes'))

app.use((req,res,next) => {
    res.status(404).render('./main/notFound.ejs');
})
    