import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
  try {
    const existingContact = await readContacts();

    const contacts = existingContact || [];

    let newContacts = createFakeContact();

    const updatedContacts = [...contacts, newContacts];

    await writeContacts(updatedContacts);
    console.log(`Успішно додано`);
  } catch (err) {
    console.error('Помилка при генерації контактів!', err);
  }
};

addOneContact();
