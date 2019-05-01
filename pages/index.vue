<template>
  <section>
    <book-list />
  </section>
</template>

<script lang="ts">
import { Action, Component, Vue } from "nuxt-property-decorator"
import BookList from "~/components/BookList.vue";
import axios from "axios";

@Component({
  components: {
    BookList
  }
})
export default class extends Vue {
  @Action getBooks: void
}
</script>

<style scoped>

</style>
