import express from 'express';
import passport from 'passport';
import router from './api/index.mjs';
import bodyParser from 'body-parser';
import { login } from './security/strategy.mjs';

const app = express();

app.use(bodyParser.json());

app.use(passport.initialize());

login(passport);

app.use(router);

app.listen(3000, () => console.log('The best APP in the UNIVERSE listening on port 3000!'));