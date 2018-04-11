import { getAllUsers, getUserById, getPostsByUser } from "./get.mjs";
import { deleteUser } from "./delete.mjs";
import { updateUser } from "./put.mjs";
import { signUp, signIn } from "./post.mjs";
import express from 'express';


var usersRouter = express.Router();

usersRouter.post('/signUp', signUp);
usersRouter.post('/signIn', signIn);

usersRouter.get('/', getAllUsers);
usersRouter.get('/:userId', getUserById);
usersRouter.get('/posts-of-user/:userId', getPostsByUser);

usersRouter.delete('/', deleteUser);

usersRouter.put('/', updateUser);

export default usersRouter;

