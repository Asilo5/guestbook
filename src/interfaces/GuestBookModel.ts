import GuestBookEntry from './GuestBookEntry'; 
import { Action, Thunk } from 'easy-peasy';

// An array of Guest Book Entry
export default interface GuestBookModel {
    entries: GuestBookEntry[];
    setEntries: Action<GuestBookModel, GuestBookEntry[]>;
    addEntry:  Action<GuestBookModel, GuestBookEntry>; // 👈 declaring our action, has two parameters, one the model and other the entry
    getEntries: Thunk<GuestBookModel>
};