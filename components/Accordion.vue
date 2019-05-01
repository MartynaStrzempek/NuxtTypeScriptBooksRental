<template>
    <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button :id="setButtonId()" block href="#" variant="info" @click="toggleAccordion">{{ bookTitle }}</b-button>
        </b-card-header>
        <b-collapse :id="setCollapseId()" :visible="visibility" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text class="details">
                    <p class="title">Amount:</p>
                    <p class="text">{{ bookAmount }}</p>
                    <hr>
                    <p class="title">Description:</p>
                    <p class="text">{{ bookDescription }}</p>
                    <hr>
                    <p class="title">Rate:</p>
                    <p class="text">*</p>
                    <hr>
                    <borrowings :book-copies="bookCopies" />
                </b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "nuxt-property-decorator";
import { Book } from "types";
import Borrowings from "~/components/Borrowings.vue";

@Component({
    components: {
        Borrowings
    }
})
export default class Accordion extends Vue {
  visibility: boolean = false;

  @Prop() book: [string, Array<Book>];
  @Prop() idx: number;

  get bookTitle(): string {
      return this.book[0];
  }
  get bookAmount(): number {
      return this.book[1].length;
  }
  get bookDescription(): string {
      return this.book[1][0].description;
  }
  get bookCopies(): Array<Book> {
      return this.book[1];
  }

  toggleAccordion(): void {
    this.visibility = !this.visibility
  }
  setButtonId(): string {
    return `b-button-${this.idx + 1}`;
  }
  setCollapseId(): string {
    return `accordion-${this.idx + 1}`;
  }
  mounted() {
    const targetButtonAccordion = document.getElementById(`b-button-${this.idx + 1}`);
    if (targetButtonAccordion) targetButtonAccordion.setAttribute(`v-b-toggle.accordion-${this.idx + 1}`, "");
  }
}
</script>

<style scoped lang="scss">
.details {
    .title {
        font-size: 110%;
        font-weight: bold; 
    }
    .text {
        font-size: 90%;
    }
}
</style>
