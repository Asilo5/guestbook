import GuestBookEntry from './GuestBookEntry'; 
import { Action } from 'easy-peasy';

// An array of Guest Book Entry
export default interface GuestBookModel {
    entries: GuestBookEntry[];
    addEntry:  Action<GuestBookModel, GuestBookEntry>; // 👈 declaring our action 
                                                       // has two parameters, one the model and other the entry
};