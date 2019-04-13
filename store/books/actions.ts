import axios from 'axios';
import { ActionTree } from 'vuex';
import { BooksState } from "~/types";

export default<ActionTree<BooksState, any>> {
  async getBooks({ commit }) {
    try {
      const response = await axios.get('http://bootcamp.opole.pl/books/my-books/87f4');
      commit("getBooks", response.data.books)
    } catch(error) {
      console.log(error)
    }
  }
}