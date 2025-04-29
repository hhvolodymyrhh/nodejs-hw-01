import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
      // дані в JSON-рядок
    let data = JSON.stringify(updatedContacts);


      await fs.writeFile(PATH_DB, data, 'utf8');
      console.log('Данні успішно записані у файл');

  } catch (err) {
    console.error('Помилка запису у файл', err);
  }
};

