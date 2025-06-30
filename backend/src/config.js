import dotenv from 'dotenv';
dotenv.config(); // .env dosyasını bir kez burada yükle

export const NASA_API_KEY = process.env.NASA_API_KEY;
export const NASA_API_BASE = 'https://api.nasa.gov';
