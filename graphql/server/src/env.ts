import dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.PORT || '';
export const COOKIE_SECRET = process.env.COOKIE_SECRET || '';
export const NODE_ENV = process.env.NODE_ENV || '';
