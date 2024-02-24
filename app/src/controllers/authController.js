import hashing from '../helpers/hashing';
import User from '../models/User';

const signup = async (req, res) => {
    const { email, password } = req.body;

    try{
        const hashedPassword = await hashing.hash_password(password);
        // Create token
        const user = await User.create({ email, password: hashedPassword });
        res.status(201).json({ message: "Account registered", user });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.login(email, password);
        // Create token
        res.status(200).json({ message: "Account logged in", user });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}


const auth = { signup, login };
export default auth;