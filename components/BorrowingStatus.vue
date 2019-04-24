<template>
    <div>
        <span class="wrapper">
            <span>
                <span>Copy {{ id + 1 }}:</span> 
                <span v-if="isAvailable" class="available">Available</span> 
                <span v-else class="rented">Rented</span>
            </span>
            <borrow-button :book-copy-id="bookCopyId" @borrowBook="borrowBook" />
        </span>
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

    get presentDate(): string {
        return new Date().toISOString().slice(0, 10);
    }
    get bookBorrowing(): Array<Borrowing> {
        return this.$store.getters["getTargetBookBorrowing"](this.bookCopyId);
    }
    get isAvailable(): boolean {
        return this.bookBorrowing
            ? !this.bookBorrowing.some(date => this.presentDate >= date.dateFrom && this.presentDate <= date.dateTo)
            : true;
    }

    borrowBook(bookCopyId): void {
        document.getElementById(`modal-${this.bookCopyId}`).style.display = "block";
    }

    mounted(){
        this.bookBorrowing.map(el => console.log(el.dateFrom, " - ", el.dateTo, " - ", this.bookCopyId))
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    .available {
        color: green;
        font-weight: bold;
    }
    .rented {
        color: red;
        font-weight: bold;
    }
}
</style>
