import { dropUser } from '../../services/users.mjs';

export const deleteUser =  (req, res) => {
    const userId = req.body.id_user;

    dropUser(userId)
        .then(function (data) {
            res.status(200).send("Delete completed");
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};