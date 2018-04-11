import jwt from 'jsonwebtoken';

const secretKey = process.env.USERDOMAIN;

export function createToken(user){
    return jwt.sign({ username: user.name, useremail: user.email }, secretKey);
}

export function verifyToken(token){
    try {
        return jwt.verify(token, secretKey);
    } catch(err){
        return false;
    }
}