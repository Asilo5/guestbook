// Implement the guest book model
import GuestBookModel from '../interfaces/GuestBookModel';
import { action, thunk, computed } from 'easy-peasy';

const GuestBook: GuestBookModel = {

  entries: [], // set initial state of entries --> there are no guest input

  setEntries: action((state, entries) => {
    state.entries = entries;
  }),

  reverseEntries: computed((state) => state.entries.slice().reverse()),

  addEntry: action((state, entry) => {
    state.entries.push(entry);
  }),

  createEntry: thunk(async (state, entry ) => {
    const response = await fetch('http://localhost:3001/entries', {
       method: 'POST',
       headers: {
         'content-type' : 'application/json'
       },
       body: JSON.stringify(entry)
    });

    const result = await response.json(); 
    state.addEntry(result);
  }),

  getEntries: thunk(async (state) => {
     const response = await fetch('http://localhost:3001/entries');
     const entries = await response.json(); 
     state.setEntries(entries);
  }),
};

export default GuestBook;