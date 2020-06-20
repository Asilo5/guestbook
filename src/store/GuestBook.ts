// Implement the guest book model
import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
  entries: [{
      name: 'Consuelo',
      content: 'Hello World',
      submitted: new Date()
  }] // set initial state of entries --> there are no guest input
};

export default GuestBook;