import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import tokens from '../helpers/tokens';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    token: {
        type: String
    }
});

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    const userId = user._id;

    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            const token = tokens.generateToken(userId);
            await this.updateOne({ _id: userId }, { $set: { token }});
            return user;
        }
    }

    throw Error('Incorect credentials');
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