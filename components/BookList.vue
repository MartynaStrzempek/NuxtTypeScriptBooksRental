<template>
  <div class="accordion-container">
    <accordion 
      v-for="(book, idx) in getBooks" 
      :key="idx" 
      :book="book"
      :idx="idx" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Getter } from "nuxt-property-decorator";
import Accordion from "~/components/Accordion.vue";
import { Book } from "types";

@Component({
  components: {
    Accordion  
  }
})
export default class BookList extends Vue {
  @Getter getBooks: Array<Book>
}
</script>

<style scoped>
.accordion-container {
  width: 50vw;
  margin: 100px auto;
}
</style>
