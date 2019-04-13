<template>
    <b-card no-body class="mb-1" @click="toggleAccordion">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button :id="setButtonId()" block href="#" variant="info">{{ book.book.title }}</b-button>
        </b-card-header>
        <b-collapse :id="setCollapseId()" :visible="visibility" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text class="details">
                    <p class="title">Amount:</p>
                    <p class="text">{{ book.amount }}</p>
                    <hr>
                    <p class="title">Description:</p>
                    <p class="text">{{ book.book.description }}</p>
                    <hr>
                    <p class="title">Rate:</p>
                    <p class="text">*</p>
                    <hr>
                    <p class="title" v-if="true">Available to:</p>
                    <p class="title" v-else>Rented to:</p>
                </b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "nuxt-property-decorator";
import { UniqueBook } from "types";

@Component
export default class Accordion extends Vue {
  visibility: boolean = false;

  @Prop() book: UniqueBook
  @Prop() idx: number

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
    document.getElementById(`b-button-${this.idx + 1}`).setAttribute(`v-b-toggle.accordion-${this.idx + 1}`, "");
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
