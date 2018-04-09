import express from 'express';
import passport from 'passport';
import router from './api/index.mjs';
import bodyParser from 'body-parser';
import { initPassport } from './security/index.mjs';

const app = express();

app.use(bodyParser.json());

app.use(passport.initialize());

initPassport(passport);

app.use(router);

app.listen(3000, () => console.log('Example app listening on port 3000!'));