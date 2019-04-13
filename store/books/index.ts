import { ModuleTree } from 'vuex';
import { BooksModule } from '~/types';
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default<ModuleTree<BooksModule>> {
  state,
  getters,
  mutations,
  actions
}