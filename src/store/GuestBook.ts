// Implement the guest book model
import GuestBookModel from '../interfaces/GuestBookModel';
import { action, thunk } from 'easy-peasy';

const GuestBook: GuestBookModel = {
  entries: [], // set initial state of entries --> there are no guest input
  setEntries: action((state, entries) => {
     state.entries = entries;
  }),
  addEntry: action((state, entry ) => {
    entry.id = Date.now();
    entry.submitted = new Date();
    state.entries.unshift(entry);
  }),
  getEntries: thunk(async (state) => {
     const response = await fetch('http://localhost:3001/entries');
     const entries = await response.json; 
     state.setEntries(entries);
  }),
};

export default GuestBook;