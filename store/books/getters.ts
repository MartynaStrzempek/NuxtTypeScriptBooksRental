import { GetterTree } from 'vuex';
import { BooksState } from '~/types';

export default<GetterTree<BooksState, any>> {
    getBooks: state => state.books
}