import {getAllUsers, getUserById, getPostsByUser} from "./get.mjs";
import {deleteUser} from "./delete.mjs";
import {updateUser} from "./put.mjs";
import {addUser} from "./post.mjs";

import express from 'express';


var usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id_user', getUserById);
usersRouter.get('/posts-of-user/:id_user', getPostsByUser);

usersRouter.delete('/', deleteUser);

usersRouter.put('/', updateUser);

usersRouter.post('/', addUser);

export default usersRouter;

