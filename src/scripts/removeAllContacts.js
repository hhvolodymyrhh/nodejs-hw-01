import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
  try {
     await writeContacts([]);
        console.log(`Успішно`);
  } catch (err) {
        console.error('Помилка ', err);
}

};

removeAllContacts();
