/* Replace with your SQL commands */
CREATE TABLE users (
    id_user SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    age INT NOT NULL
);


INSERT INTO users VALUES (DEFAULT, 'Nik', 30);
INSERT INTO users VALUES (DEFAULT, 'Bob', 40);

ALTER TABLE users ADD COLUMN email VARCHAR;

UPDATE users SET email = 'nik@mail.com' WHERE id_user = 1;
UPDATE users SET email = 'bob@mail.com' WHERE id_user = 2;