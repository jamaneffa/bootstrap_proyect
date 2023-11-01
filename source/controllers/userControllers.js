const userControllers = {

    login: async (req, res) => {
        try {
            return res.render('users/login');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    },
    register: async (req, res) => {
        try {
            return res.render('users/register');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    },
    record: async (req, res) => {
        try {
            return res.json({
                nombre: req.body.name,
                email: req.body.email,
                avatar: req.file ? req.file.filename : "No cargo imagen",
                Volver: "http://localhost:2020"
            });
        } 
        catch (error) { 
            console.log(error.message); 
        }
    }

}

module.exports = userControllers