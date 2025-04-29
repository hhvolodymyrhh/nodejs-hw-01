import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Отримуємо коректний __dirname в ES-модулі
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Формуємо шлях до файлу `src/db/db.json`
export const PATH_DB = path.join(__dirname, '..', 'db', 'db.json');
