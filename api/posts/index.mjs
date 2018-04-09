import { getAllPosts, getPostById } from "./get.mjs";
import { deletePost } from "./delete.mjs";
import { updatePost } from "./put.mjs";
import { addPost } from "./post.mjs";
import { decodedToken } from "../../security/jwt.mjs";
import express from 'express';

var postsRouter = express.Router();

postsRouter.use((req, res, next) => {
    const token = req.headers.authorization;

    decodedToken(token, req, res, next);
});

postsRouter.get('/', getAllPosts);
postsRouter.get('/:id_post', getPostById);

postsRouter.delete('/', deletePost);

postsRouter.put('/', updatePost);

postsRouter.post('/', addPost);

export default postsRouter;

