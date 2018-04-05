import { selectUserById, selectPostsByUser, selectAllUser } from '../../services/users.mjs';

export const getAllUsers = (req, res) => {
    selectAllUser()
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};

export const getUserById = (req, res) => {
    const userId = req.params.id_user;

    selectUserById(userId)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};

export const getPostsByUser = (req, res) => {
    const userId = req.params.id_user;

    selectPostsByUser(userId)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};
