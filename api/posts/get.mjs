import { selectAllPosts, selectPostById } from '../../services/posts.mjs';

export const getAllPosts = (req, res) => {
    selectAllPosts()
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            console.log(error)
            res.status(400).send(error);
        })
};

export const getPostById = (req, res) => {
    const postId = req.params.id_post;

    selectPostById(postId)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};