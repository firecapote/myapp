import { insertTag } from '../../services/tags.mjs';

export const addTag = (req, res) => {
    const tagName = req.body.name;

    insertTag(tagName)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};