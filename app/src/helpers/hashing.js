import bcrypt from 'bcrypt';

const hash_password = async (password) => {
    const salt = await bcrypt.genSalt();
    const res = await bcrypt.hash(password, salt);    
    return res;
}

const hashing = { hash_password };
export default hashing;