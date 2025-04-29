import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
  const dataContacts = await readContacts();

  return dataContacts.length;
};

console.log(await countContacts());
