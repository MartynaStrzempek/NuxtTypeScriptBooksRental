import Vue from 'vue';
import Vuex from 'vuex';
import books from "./books";
import readers from "./readers";
import VueResource from 'vue-resource';
import VuexPersist from 'vuex-persist';
Vue.use(VueResource);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
});

const createStore = () => {
  return new Vuex.Store({
    modules: {
      books,
      readers
    },
    plugins: [vuexLocalStorage.plugin]
  });
};

export default createStore;