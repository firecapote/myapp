import { getAllUsers, getUserById, getPostsByUser } from "./get.mjs";
import { deleteUser } from "./delete.mjs";
import { updateUser } from "./put.mjs";
import { signUp, signIn } from "./post.mjs";
import { decodedToken } from "../../security/jwt.mjs";
import express from 'express';


var usersRouter = express.Router();

usersRouter.post('/signup', signUp);
usersRouter.post('/signin', signIn);

usersRouter.use((req, res, next) => {
    const token = req.headers.authorization;

    decodedToken(token, req, res, next);
});

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id_user', getUserById);
usersRouter.get('/posts-of-user/:id_user', getPostsByUser);

usersRouter.delete('/', deleteUser);

usersRouter.put('/', updateUser);

export default usersRouter;

