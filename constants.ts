import 'dotenv/config';

export const PORT = process.env.PORT || 5000;
export const DB_CONNECTION = process.env.DB_CONNECTION
export const DB_NAME = process.env.DB_NAME
export const JWT_SECRET = process.env.JWT_SECRET
export const PASSWORD_HASH_ROUND = process.env.PASSWORD_HASH_ROUND

