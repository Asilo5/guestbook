// Implement the guest book model
import GuestBookModel from '../interfaces/GuestBookModel';
import { action } from 'easy-peasy';

const GuestBook: GuestBookModel = {
  entries: [], // set initial state of entries --> there are no guest input
  addEntry: action((state, entry ) => {
    entry.id = Date.now();
    entry.submitted = new Date();
    state.entries.unshift(entry);
  })
};

export default GuestBook;