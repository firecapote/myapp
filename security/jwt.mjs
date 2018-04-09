import jwt from 'jsonwebtoken';

const secretKey = process.env.USERDOMAIN;

export function createToken(user){
    return jwt.sign({ username: user.name, useremail: user.email}, secretKey);
}

export function decodedToken(token, req, res, next){
    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(200).send({success: false, message: 'Failed to authenticate token.'});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}