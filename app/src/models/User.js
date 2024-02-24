import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import pkg from 'validator';
import tokens from '../helpers/tokens.js';

const { isEmail } = pkg;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        require: [true, 'Please enter an password']
    },
    token: {
        type: String
    }
});

// Pre hook for signing up
userSchema.pre('save', async function (next) {
   const token = tokens.generateToken(this._id);
   this.token = token;
   next();
});

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    const userId = user._id;

    // If user exists
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        // If password is correct
        if (auth) {
            const token = tokens.generateToken(userId);
            await this.updateOne({ _id: userId }, { $set: { token }});
            return user;
        }
    }

    throw Error('Incorrect credentials');
}

userSchema.statics.logout = async function (userId) {
    try {
        await this.updateOne({ _id: userId }, { $set: { token: '' }});
    }
    catch (err) {
        throw new Error('Logout failed');
    }
}

const User = mongoose.model('User', userSchema);

export default User;