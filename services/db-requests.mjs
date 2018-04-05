import pgp from "pg-promise";
export var db = pgp()("postgres://postgres:85236987@localhost:5432/appdb");

export const oneOrNone = db.any;
export const findOneOrNone = db.query;