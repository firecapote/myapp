import { verifyToken } from "./jwt.mjs";
import { checkPublicRout } from "./routs.mjs";

export const verifyUserAuthorization = (req, res, next) => {
    const token = req.headers.authorization || req.headers.Authorization;

    if(token){
        const resultVerifyToken = verifyToken(token);

        if(!resultVerifyToken){
            res.status(403).send({
                success: false,
                message: 'Failed to authenticate token.'
            });
        }else {
            res.local = resultVerifyToken;
            next();
        }
    }else {
        if(checkPublicRout(req.path)){
            next();
        } else {
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        }
    }
};
