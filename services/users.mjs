import { oneOrNone, findOneOrNone } from './db-requests.mjs';

export const selectAllUser = () => oneOrNone(
    `SELECT * FROM users;`
);

export const selectUserById = userId => oneOrNone(
    `SELECT * FROM users WHERE id_user = ${userId};`
);

export const selectPostsByUser = userId => oneOrNone(
    `SELECT * FROM posts WHERE id_user = ${userId};`
);

export const findUser = (userEmail) => oneOrNone(
    `SELECT id_user, email, password FROM users WHERE email = '${userEmail}';`
);

export const signUpUser = (userAge, userName, userEmail, userPassword) => oneOrNone(
    `INSERT INTO users VALUES (
        DEFAULT, '${userName}', ${userAge}, '${userEmail}', '${userPassword}'
     ) RETURNING *;`
);

export const selectHash = (userEmail) => oneOrNone(
    `SELECT password FROM users WHERE email = '${userEmail}';`
);

export const changeUser = (userId, userAge, userName) => oneOrNone(
    `UPDATE users SET age = ${userAge}, name = '${userName}' WHERE id_user = ${userId} RETURNING *;`
);

export const dropUser = (userId) => oneOrNone(
    `DELETE  FROM users WHERE id_user = ${userId};`
);

export const takeUser = (userName) => findOneOrNone(
    `SELECT id, name FROM users WHERE name = ${userName};`
);
