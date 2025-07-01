import dotenv from 'dotenv';
dotenv.config();

export const NASA_API_KEY = process.env.NASA_API_KEY;
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
export const NASA_API_BASE = 'https://api.nasa.gov';
