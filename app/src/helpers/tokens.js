import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: 30*24*60*60 // Thirty Days
    });
}

const tokens = { generateToken }
export default tokens;