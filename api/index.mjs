import usersRouter from './users/index.mjs';
import postsRouter from './posts/index.mjs';
import tagsRouter from './tags/index.mjs';
import express from 'express';

var apiRouter = express.Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/posts', postsRouter);
apiRouter.use('/tags', tagsRouter);

export default apiRouter;
