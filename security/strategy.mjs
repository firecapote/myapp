import localStrategy from 'passport-local';
import { findUser } from "../services/users.mjs";
import { checkPassword } from "./bcrypt.mjs";
import _ from 'lodash';

export function login(passport) {
    passport.use(new localStrategy.Strategy({
            usernameField: 'email',
            session: false
        },
        (email, password, done) => {
            findUser(email)
                .then((data) => {
                    const user = _.head(data);

                    if (!user) {
                        return done(null, false, {message: 'Incorrect email.'});
                    }
                    if (!checkPassword(password, user.password)) {
                        return done(null, false, {message: 'Incorrect password.'});
                    } else {
                        return done(null, user);
                    }
                })
                .catch((error) => {
                    return done(error);
                });
        })
    );
};
