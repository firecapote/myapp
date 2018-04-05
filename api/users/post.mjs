import { insertUser } from '../../services/users.mjs';

export const addUser = (req, res) => {
    const userAge = req.body.age;
    const userName = req.body.name;

    insertUser(userAge, userName)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
};