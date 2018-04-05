/* Replace with your SQL commands */

CREATE TABLE posts (
    id_post SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    content VARCHAR NOT NULL,
    id_user INTEGER NOT NULL REFERENCES users ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO posts VALUES (DEFAULT, 'first post',  'Many post 234', 1);