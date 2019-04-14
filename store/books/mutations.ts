import { MutationTree } from 'vuex';
import { BooksState } from '~/types';

export default<MutationTree<BooksState>> {
  getBooks(state, books) {
    state.books = books;
  },
  borrowBook(state, { bookCopyId, dateFrom, dateTo, user }) {
    state.booksBorrowing[bookCopyId] 
      ? state.booksBorrowing[bookCopyId].push({ dateFrom, dateTo, user }) 
      : state.booksBorrowing[bookCopyId] = [{ dateFrom, dateTo, user }]

    // state.booksBorrowing = {};
  }
}