import express from 'express';
import router from './api/index.mjs';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use(router);

app.listen(3000, () => console.log('Example app listening on port 3000!'));