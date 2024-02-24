import hashing from '../helpers/hashing.js';
import User from '../models/User.js';

const signup = async (req, res) => {
    const { email, password } = req.body;

    try{
        const hashedPassword = await hashing.hash_password(password);
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
        res.status(200).json({ message: "Successfully logged in", user });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}

const logout = async (req, res) => {
    const { userId } = req.body;

    try {
        const user = await User.logout(userId);
        res.status(200).json({ message: "Successfully logged out", user })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}


const auth = { signup, login, logout };
export default auth;