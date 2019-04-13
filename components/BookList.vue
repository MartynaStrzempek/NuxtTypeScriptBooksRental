<template>
  <div class="accordion-container">
    <accordion 
      v-for="(book, idx) in getBooks" 
      :key="idx" 
      :book="book"
      :idx="idx"
      :active-index="activeIndex"
      @click="toggleAccordion(idx)" />
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
  activeIndex: number = null;

  @Getter getBooks: Array<Book>

  toggleAccordion(idx) {
    console.log("toggle", idx)
    this.activeIndex = idx;
  }
}
</script>

<style scoped>
.accordion-container {
  width: 50vw;
  margin: 100px auto;
}
</style>
