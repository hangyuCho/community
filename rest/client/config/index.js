export const isProd = process.env.NODE_ENV === 'production';

export const baseURL = isProd
  ? 'http://api.tamastudy.com/api'
  : 'http://localhost:5000/api';
export const secondURL = isProd
  ? 'http://api.tamastudy.com/api'
  : 'http://localhost:5000/api';
