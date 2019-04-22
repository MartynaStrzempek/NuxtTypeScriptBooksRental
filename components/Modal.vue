<template>
    <div :id="`modal-${bookCopyId}`" class="rental-modal hidden">
        <div class="body">
            <h4 class="title">Choose date to rent a book</h4>
            <span class="date-text-wrapper">
                <h5 class="text">From</h5>
                <date-input :date.sync="dateFrom" class="date-input"/>
            </span>
            <span class="date-text-wrapper">
                <h5 class="text">To</h5>
                <date-input :date.sync="dateTo" class="date-input"/>
            </span>
            <span class="buttons">
                <b-button @click="hideModal" class="button">Close</b-button>
                <b-button @click="borrowBook" class="button">Borrow</b-button>
            </span>
        </div>
    </div> 
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import DateInput from "~/components/DateInput.vue";
import { Book } from "~/types";
import * as MUTATIONS from "~/store/mutationTypes";

@Component({
    components: {
        DateInput
    }
})
export default class Modal extends Vue {
    user: number = 3;
    dateFrom: string = "";
    dateTo: string = "";

    @Prop() bookCopyId: Book["id"];

    hideModal(): void {
        document.getElementById(`modal-${this.bookCopyId}`).style.display = "none";
    }
    borrowBook(): void {
        const { user, bookCopyId, dateFrom, dateTo } = this;
        this.$store.commit(MUTATIONS.BORROW_BOOK, { dateFrom, dateTo, user, bookCopyId })
        this.hideModal();
    }
}
</script>

<style lang="scss">
.rental-modal {
    width: 600px;
    background-color: #fafafa;
    box-shadow: lightgray 2px 2px 20px;
    border-radius: 5px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -300px;
    .body {
        margin: 20px 0;
        .title {
            border-top: 1px solid lightgray;
            border-bottom: 1px solid lightgray;
            padding: 10px 40px;
            margin-bottom: 20px;
        }
        .date-text-wrapper {
            width: 60%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px; 
            .text {
                padding: 0 40px;
            }
            .date-input {
                width: 60%;
            }
        }
        .buttons {
            float: right;
            margin: 0 40px;
            .button {
                margin-left: 20px;
                margin-bottom: 20px;
            }
        }
    }
}
.hidden {
    display: none;
}
</style>
