import { manyOrNone, oneOrNone } from './db-requests.mjs';

export const selectAllUser = () => manyOrNone(
    `SELECT * FROM users;`
);

export const selectUserById = userId => oneOrNone(
    `SELECT * FROM users WHERE id_user = ${userId};`
);

export const selectPostsByUser = userId => manyOrNone(
    `SELECT * FROM posts WHERE id_user = ${userId};`
);

export const findUser = (userEmail) => manyOrNone(
    `SELECT id_user, email, password FROM users WHERE email = '${userEmail}';`
);

export const signUpUser = (userAge, userName, userEmail, userPassword) => oneOrNone(
    `INSERT INTO users VALUES (
        DEFAULT, '${userName}', ${userAge}, '${userEmail}', '${userPassword}'
     ) RETURNING *;`
);

export const changeUser = (userId, userAge, userName) => oneOrNone(
    `UPDATE users SET age = ${userAge}, name = '${userName}' WHERE id_user = ${userId} RETURNING *;`
);

export const dropUser = (userId) => oneOrNone(
    `DELETE  FROM users WHERE id_user = ${userId};`
);