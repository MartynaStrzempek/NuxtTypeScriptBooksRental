<template>
    <div>
        <span>Copy {{ id + 1 }}:</span> 
        <!-- <span v-if="isAvailable" class="available">Available to: {{ firstBorrowingDate ? firstBorrowingDate.dateFrom.slice(0, 10) : "no reservations"}}</span>  -->
        <!-- <span v-else class="rented">Rented to: {{ firstBorrowingDate.dateTo.slice(0, 10) }}</span> -->
        <borrow-button :book-copy-id="bookCopyId" @borrowBook="borrowBook" />
        <!-- todo: generate only one modal in DOM -->
        <modal :book-copy-id="bookCopyId" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Getter } from "nuxt-property-decorator";
import { Book, Borrowing } from "~/types";
import BorrowButton from "~/components/BorrowButton.vue";
import DateInput from "~/components/DateInput.vue";
import Modal from "~/components/Modal.vue";
import * as MUTATIONS from "~/store/mutationTypes";

@Component({
    components: {
        BorrowButton,
        DateInput,
        Modal
    }
})
export default class BorrowingStatus extends Vue {
    user: Book["user"] = "3";

    @Prop() id: number;
    @Prop() bookCopyId: Book["id"];

    get bookBorrowing(): Array<Borrowing> {
        return this.$store.getters["getTargetBookBorrowing"](this.bookCopyId);
    }
    // get firstBorrowingDate(): { dateFrom: Date, dateTo: Date } | null {
        // const dateFrom = this.bookBorrowing ? this.bookBorrowing.map(borrowing => borrowing.dateFrom).sort()[0] : null;
        // const dateTo = this.bookBorrowing ? this.bookBorrowing.find(borrowing => borrowing.dateFrom === dateFrom).dateTo : null;
        // return dateFrom ? { dateFrom, dateTo } : null;
    // }
    // get isAvailable(): boolean {
    //     if (this.firstBorrowingDate) {
    //         return new Date() < new Date(this.firstBorrowingDate.dateFrom)
    //     } else {
    //         return true;
    //     }
    // }

    borrowBook(bookCopyId): void {
        document.getElementById(`modal-${this.bookCopyId}`).style.display = "block";
    }

    mounted(){
        // console.log(this.bookBorrowing, this.bookCopyId);
    }
}
</script>

<style scoped lang="scss">
.available {
    color: green;
    font-weight: bold;
}
.rented {
    color: red;
    font-weight: bold;
}
</style>
