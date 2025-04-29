import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
try {
  const existingContact = await readContacts();

  if (existingContact.length === 0) {
    return;
  }

    const contacts = existingContact.length - 1;

    let newContacts = existingContact.slice(0, contacts);

    const updatedContacts = [...newContacts];

    await writeContacts(updatedContacts);
    console.log(`Успішно видалено!`);

  } catch (err) {
    console.error('Помилка! ', err);
}
};

removeLastContact();
