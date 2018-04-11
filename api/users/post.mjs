import { findUser, signUpUser } from '../../services/users.mjs';
import { passwordToSave } from "../../security/bcrypt.mjs";
import { createToken } from "../../security/jwt.mjs";
import { validEmail } from "../../security/valid.mjs";
import passport from 'passport';

export const signUp = (req, res) => {
    const userAge = req.body.age;
    const userName = req.body.name;
    const userEmail = req.body.email;
    let userPassword = req.body.password;

    findUser(userEmail)
        .then(function (data) {
            if(validEmail(userEmail) === null){
                res.status(200).send('Incorrect email');
            }else if(data.length !== 0){
                res.status(200).send('This email is already taken');
            }else{
                userPassword = passwordToSave(userPassword);

                signUpUser(userAge, userName, userEmail, userPassword)
                    .then(function (data) {
                        res.status(200).send(`User create!!!`);
                    })
                    .catch(function (error) {
                        res.status(400).send(error);
                    })
            }
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};

export const signIn = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err) }
        if (!user) {
            return res.status(401).send({ error: info });
        }

        const token = createToken(user);
        res.status(200).send({ token : token });
    })(req, res, next);
};