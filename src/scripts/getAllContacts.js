import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
  return await readContacts();
};

const contacts = await getAllContacts();
console.log(contacts);
