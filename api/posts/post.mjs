import { insertPost,  insertTagOfPost } from '../../services/posts.mjs';
import _ from 'lodash';

export const addPost = (req, res) => {
    const userId = req.body.id_user;
    const postTitle = req.body.title;
    const postContent = req.body.content;
    const allTags = req.body.arrayTags;

    insertPost(postTitle, postContent, userId)
        .then(function (data) {
            const postId = _.head(data).id_post;

            insertTagOfPost(postId, allTags)
                .then(function (data) {
                    const newId = _.head(data).id_post;
                    res.status(200).send(`Insert post by id: ${newId} completed`);
                })
                .catch(function (error) {
                    res.status(400).send(error);
                })
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};