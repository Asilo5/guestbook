// Implement the guest book model
import GuestBookModel from '../interfaces/GuestBookModel';
import { action } from 'easy-peasy';

const GuestBook: GuestBookModel = {
  entries: [], // set initial state of entries --> there are no guest input
  addEntry: action((state, entry ) => {
    state.entries.push(entry);
  })
};

export default GuestBook;