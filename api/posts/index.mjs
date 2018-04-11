import { getAllPosts, getPostById } from "./get.mjs";
import { deletePost } from "./delete.mjs";
import { updatePost } from "./put.mjs";
import { addPost } from "./post.mjs";
import express from 'express';

var postsRouter = express.Router();

postsRouter.get('/', getAllPosts);
postsRouter.get('/:postId', getPostById);

postsRouter.delete('/', deletePost);

postsRouter.put('/', updatePost);

postsRouter.post('/', addPost);

export default postsRouter;

