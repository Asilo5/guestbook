// describes what will be inside of a guest book entry

export default interface GuestBookEntry {
  id: number;
  name: string;
  content: string;
  submitted?: string;
};
