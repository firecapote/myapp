import { changeUser } from '../../services/users.mjs';

export const updateUser =  (req, res) => {
    const userId = req.body.id_user;
    const userAge = req.body.age;
    const userName = req.body.name;

    changeUser(userId, userAge, userName)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};