import { GetterTree } from 'vuex';
import { BooksState } from '~/types';
import { createBooksDict } from '~/API/createBooksDict';

export default<GetterTree<BooksState, any>> {
    getBooks: state => state.books.reduce(createBooksDict, {}),
    getTargetBookBorrowing: state => bookCopyId => state.booksBorrowing[bookCopyId]
}