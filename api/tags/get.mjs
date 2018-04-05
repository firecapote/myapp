import { selectTags, selectTagById} from '../../services/tags.mjs';

export const getAllTags = (req, res) => {
    const tagFilter = req.query.filter || '';

    selectTags(tagFilter)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            res.status(400).send(error);
            console.log(error);
        })
};

export const getTagById = (req, res) => {
    const tagId = req.params.id_tag;

    selectTagById(tagId)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};