const productControllers = {

    list: async (req, res) => {
        try {
            return res.render('../views/products/list.ejs');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    },

    create: async (req, res) => {
        try {
            return res.render('../views/products/create.ejs');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    },

    store: async (req, res) => {
        try {
            console.log(req.file)
            return res.json({
                nombre: req.body.name,
                archivo: req.file.fieldname,
                Volver: "http://localhost:2020"
            });
        } 
        catch (error) { 
            console.log(error.message); 
        }
    }

}

module.exports = productControllers