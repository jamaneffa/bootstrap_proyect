const userControllers = {

    login: async (req, res) => {
        try {
            return res.render('../views/users/login.ejs');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    }

}

module.exports = userControllers