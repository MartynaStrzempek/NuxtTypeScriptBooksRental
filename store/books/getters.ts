import { GetterTree } from 'vuex';
import { BooksState } from '~/types';
import { createUniqueBooksWithAmount } from '~/api/createUniqueBooksWithAmount';

export default<GetterTree<BooksState, any>> {
    getBooks: state => state.books.reduce(createUniqueBooksWithAmount, [])
}