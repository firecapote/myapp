import { oneOrNone } from './db-requests.mjs';

export const selectAllPosts = () => oneOrNone(
    `SELECT p.id_post, p.title, p.content, p.id_user, array_agg(t.id_tag) as allTags
     FROM posts p
     INNER JOIN post_tag pt
     USING (id_post)
     INNER JOIN tags t
     USING (id_tag)
     GROUP BY p.id_post;`
);

export const selectPostById = postId => oneOrNone(
    `SELECT p.id_post, p.title, p.content, p.id_user, array_agg(t.id_tag) as allTags
     FROM posts p
     INNER JOIN post_tag pt
     USING (id_post)
     INNER JOIN tags t
     USING (id_tag)
     GROUP BY p.id_post
     HAVING p.id_post = ${postId};`
);

export const insertPost = (postTitle, postContent, userId, allTags) => oneOrNone(
    `INSERT INTO posts VALUES (DEFAULT, '${postTitle}', '${postContent}', ${userId}) RETURNING id_post;`
);

export const insertTagOfPost = (postId, allTags) => oneOrNone(
    `INSERT INTO post_tag (id_post, id_tag) SELECT ${postId}, unnest(array[${allTags}]) RETURNING id_post;`
);

export const changePost = (postId, postTitle, postContent) => oneOrNone(
    `UPDATE posts SET title = '${postTitle}', content = '${postContent}' WHERE id_post = ${postId} RETURNING *;`
);

export const dropPost = (postId) => oneOrNone(
    `DELETE  FROM posts WHERE id_post = ${postId};`
);