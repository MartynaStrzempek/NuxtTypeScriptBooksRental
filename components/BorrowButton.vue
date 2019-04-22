<template>
    <button @click="borrowBook()">Borrow {{bookCopyId}}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";
import { Book } from "~/types";

@Component
export default class BorrowButton extends Vue {
    @Prop() bookCopyId: Book["id"]
    
    @Emit("borrowBook") borrowBook(): Book["id"] {
        return this.bookCopyId;
    }
}
</script>

