import { dropPost } from '../../services/posts.mjs';

export const deletePost = (req, res) => {
    const postId = req.body.id_post;

    dropPost(postId)
        .then(function (data) {
            res.status(200).send("Delete completed");
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};