const signup = async (req, res) => {
    const { email, password } = req.body;

    try{

    }
    catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}

