<template>
    <b-card no-body class="mb-1" @click="toggleAccordion">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button :id="setButtonId()" block href="#" variant="info">{{ book.title }} {{ activeIndex }}</b-button>
        </b-card-header>
        <b-collapse :id="setCollapseId()" :visible="visibility" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                <b-card-text>{{ book.description }}</b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "nuxt-property-decorator";
import { Book } from "types";

@Component
export default class Accordion extends Vue {
  visibility: boolean = false;
  
  @Prop() book: Book
  @Prop() idx: number

  toggleAccordion() {
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