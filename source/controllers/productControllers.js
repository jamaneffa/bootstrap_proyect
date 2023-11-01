const productControllers = {

    list: async (req, res) => {
        try {
            return res.render('products/list.ejs');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    },

    create: async (req, res) => {
        try {
            return res.render('products/create.ejs');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    },

    store: async (req, res) => {
        try {
            return res.json({
                nombre: req.body.name,
                archivo: req.file.filename,
                Volver: "http://localhost:2020"
            });
        } 
        catch (error) { 
            console.log(error.message); 
        }
    }

}

module.exports = productControllers