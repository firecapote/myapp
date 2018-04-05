import { changePost } from '../../services/posts.mjs';

export const updatePost = (req, res) => {
    const postId = req.body.id_post;
    const postTitle = req.body.title;
    const postContent = req.body.content;

    changePost(postId, postTitle, postContent)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};