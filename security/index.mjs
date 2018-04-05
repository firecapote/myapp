import passport from 'passport';
const LocalStrategy = import('passport-local').Strategy;
import { takeUser } from "../services/users.mjs";

passport.use(new LocalStrategy((userName, email, done) => {
    User.findOne(takeUser(userName), function (err, user) {
           if (err) { return done(err); }
           if (!user) {
               return done(null, false, { message: 'Incorrect username.' });
           }
           if (email !== user.email ) {
               return done(null, false)
           }
           return done(null, user);
       });
}));