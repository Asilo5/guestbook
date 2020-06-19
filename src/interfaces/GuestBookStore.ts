// Describe how we can interact with the store || Manages these GuestBook entry types

import { GuestBookModel } from './GuestBookModel';

export interface GuestBookStore {
  guestbook: GuestBookModel;
};