const mainControllers = {

    index: async (req, res) => {
        try {
            return res.render('../views/main/index.ejs');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    }

}

module.exports = mainControllers
