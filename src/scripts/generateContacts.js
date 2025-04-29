import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  try {
    const existingContact = await readContacts();

    const contacts = existingContact || [];

    const newContacts = [];
    for (let i = 0; i < number; i++){
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...contacts, ...newContacts];

    await writeContacts(updatedContacts);
    console.log(`Успішно додано ${number} нових контактів!`);

  } catch (err) {
    console.error('Помилка при генерації контактів!', err);
  }
};

generateContacts(5);

