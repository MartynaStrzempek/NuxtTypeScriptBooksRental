import { Book, Borrowing, Rate } from "~/types";
import { GetterTree, ActionTree, MutationTree } from "vuex";

export interface BooksState {
  books: Array<Book>,
  booksBorrowing: Array<Borrowing>,
  booksRates: Array<Rate>
}

export interface BooksModule {
  state: BooksState,
  getters: GetterTree<BooksState, any>
  actions: ActionTree<BooksState, any>
  mutations: MutationTree<BooksState>
}
