/* Replace with your SQL commands */
/* Replace with your SQL commands */
CREATE TABLE post_tag (
    id_post INT REFERENCES posts ON DELETE CASCADE ON UPDATE CASCADE,
    id_tag INT REFERENCES tags ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO post_tag VALUES (1, 1);
INSERT INTO post_tag VALUES (4, 2);
INSERT INTO post_tag VALUES (1, 3);