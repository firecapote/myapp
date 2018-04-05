import {getAllTags, getTagById} from "./get.mjs";
import {deleteTag} from "./delete.mjs";
import {updateTag} from "./put.mjs";
import {addTag} from "./post.mjs";

import express from 'express';


var tagsRouter = express.Router();

tagsRouter.get('/', getAllTags);
tagsRouter.get('/:id_tag', getTagById);

tagsRouter.delete('/', deleteTag);

tagsRouter.put('/', updateTag);

tagsRouter.post('/', addTag);

export default tagsRouter;

