/* Replace with your SQL commands */
CREATE TABLE tags (
    id_tag SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

INSERT INTO tags VALUES (DEFAULT, 'live');
INSERT INTO tags VALUES (DEFAULT, 'live forest');
INSERT INTO tags VALUES (DEFAULT, 'liveforest');