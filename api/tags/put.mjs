import { changeTag } from '../../services/tags.mjs';

export const updateTag =  (req, res) => {
    const tagId = req.body.id_tag;
    const tagName = req.body.name;

    changeTag(tagId, tagName)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};