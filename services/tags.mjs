import { manyOrNone, oneOrNone } from './db-requests.mjs';

export const  selectTags = tagFilter => manyOrNone(
    `SELECT * FROM tags WHERE name ~ '${tagFilter}';`
);

export const selectTagById = tagId => oneOrNone(
    `SELECT * FROM tags WHERE id_tag = ${tagId};`
);

export const insertTag = tagName => oneOrNone(
    `INSERT INTO tags VALUES (DEFAULT, '${tagName}') RETURNING *;`
);

export const changeTag = (tagId, tagName) => oneOrNone(
    `UPDATE tags SET name = '${tagName}' WHERE id_tag = ${tagId} RETURNING *;`
);

export const dropTag = tagId => oneOrNone(
    `DELETE  FROM tags WHERE id_tag = ${tagId};`
);