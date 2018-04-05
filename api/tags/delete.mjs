import { dropTag } from '../../services/tags.mjs';

export const deleteTag =  (req, res) => {
    const tagId = req.body.id_tag;

    dropTag(tagId)
        .then(function (data) {
            res.status(200).send("Delete completed");
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};