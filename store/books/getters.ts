import { GetterTree } from "vuex";
import { BooksState } from "~/types";
import { createBooksDict } from "~/API/createBooksDict";
import { sortByDate } from "~/API/sortByDate";

export default<GetterTree<BooksState, any>> {
    getBooks: state => state.books.reduce(createBooksDict, {}),
    getTargetBookBorrowing: state => bookCopyId => state.booksBorrowing[bookCopyId] ? state.booksBorrowing[bookCopyId].sort(sortByDate) : []
}