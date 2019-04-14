<template>
    <div>
        <borrowing-status 
            v-for="(bookCopy, idx) in bookCopies" 
            :key="idx"
            :id="idx"
            :book-copy-id="bookCopy.id" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { Book } from "~/types";
import BorrowingStatus from "~/components/BorrowingStatus.vue";

@Component({
    components: {
        BorrowingStatus
    }
})
export default class Borrowings extends Vue {
    @Prop() bookCopies: Array<Book>

}
</script>

