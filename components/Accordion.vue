<template>
    <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="info">{{ book.title }} {{ activeIndex }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" :visible="idx === activeIndex" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                <b-card-text>{{ book.description }}</b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { Book } from "types";

@Component
export default class Accordion extends Vue {
  @Prop() book: Book
  @Prop() idx: number
  @Prop() activeIndex: number
}
</script>