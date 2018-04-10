import { getAllTags, getTagById } from "./get.mjs";
import { deleteTag } from "./delete.mjs";
import { updateTag } from "./put.mjs";
import { addTag } from "./post.mjs";
import { decodedToken } from "../../security/jwt.mjs";
import express from 'express';


var tagsRouter = express.Router();


tagsRouter.use((req, res, next) => {
    const token = req.headers.authorization;

    decodedToken(token, req, res, next);
});

tagsRouter.get('/', getAllTags);
tagsRouter.get('/:tagId', getTagById);

tagsRouter.delete('/', deleteTag);

tagsRouter.put('/', updateTag);

tagsRouter.post('/', addTag);

export default tagsRouter;

