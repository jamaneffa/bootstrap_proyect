const mainControllers = {

    index: async (req, res) => {
        try {
            return res.render('main/index');
        } 
        catch (error) { 
            console.log(error.message); 
        }
    }
}

module.exports = mainControllers
