<template>
  <section>
    <button @click="getBooks">Get Books</button>
    <book-list />
  </section>
</template>

<script lang="ts">
import { Action, Component, Vue } from "nuxt-property-decorator"
// import { State } from "vuex-class"
import BookList from "~/components/BookList.vue";

@Component({
  components: {
    BookList
  }
})
export default class extends Vue {
  @Action getBooks
}
</script>

<style scoped>

</style>
