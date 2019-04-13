import { MutationTree } from 'vuex';
import { BooksState } from '~/types';

export default<MutationTree<BooksState>> {
  getBooks(state, books) {
    state.books = books;
  }
}