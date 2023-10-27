const userControllers = {

    login: async (req, res) => {
        try {
            return res.render('../views/users/login.ejs');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    },
    register: async (req, res) => {
        try {
            return res.render('../views/users/register.ejs');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    },
    record: async (req, res) => {
        try {
            return res.json(req.body);
        } 
        catch (error) { 
            console.log(error.message); 
        }
    }

}

module.exports = userControllers