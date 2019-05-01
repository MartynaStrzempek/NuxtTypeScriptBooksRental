<template>
    <div :id="`modal-${bookCopyId}`" class="rental-modal hidden">
        <div class="body">
            <h4 class="title">Choose date to rent a book</h4>
            <span class="date-text-wrapper">
                <h5 class="text">From</h5>
                <date-input :date.sync="dateFrom" class="date-input"/>
            </span>
            <p v-if="!isDateAvailable(dateFrom)" class="warning-text">The date is not available</p>
            <span class="date-text-wrapper">
                <h5 class="text">To</h5>
                <date-input :date.sync="dateTo" class="date-input"/>
            </span>
            <p v-if="!isDateAvailable(dateTo)" class="warning-text">The date is not available</p>
            <span class="buttons">
                <span>
                    <b-button
                      v-if="presentAndFutureReservations.length > 0"
                      @click="isReservationListVisible = !isReservationListVisible">
                        Show reservations
                    </b-button>
                </span>
                <span>
                    <b-button variant="danger" @click="hideModal" class="button">Close</b-button>
                    <b-button
                      @click="borrowBook"
                      class="button"
                      :class="{ disabled: !canBorrow }">
                        Borrow
                    </b-button>
                </span>
            </span>
            <reservation-list v-if="isReservationListVisible" :reservation-list="presentAndFutureReservations" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Getter } from "nuxt-property-decorator"
import DateInput from "~/components/DateInput.vue";
import ReservationList from "~/components/ReservationList.vue";
import { Book, Borrowing } from "~/types";
import * as MUTATIONS from "~/store/mutationTypes";

@Component({
    components: {
        DateInput,
        ReservationList
    }
})
export default class Modal extends Vue {
    user: number = 3;
    dateFrom: string = "";
    dateTo: string = "";
    isReservationListVisible: boolean = false;

    @Prop() bookCopyId: Book["id"];

    get presentDate(): string {
        return new Date().toISOString().slice(0, 10);
    }
    get bookBorrowing(): Array<Borrowing> {
        return this.$store.getters["getTargetBookBorrowing"](this.bookCopyId);
    }
    get presentAndFutureReservations(): Array<Borrowing> {
        return this.bookBorrowing.filter(reservation => {
          return !(this.presentDate > reservation.dateFrom && this.presentDate > reservation.dateTo)
        })
    }
    get canBorrow(): boolean {
      return this.isDateAvailable(this.dateFrom) && this.isDateAvailable(this.dateTo) && this.dateFrom !== "" && this.dateTo !== "";
    }

    isDateAvailable(targetDate: string): boolean {
      if (targetDate !== "") {
        return targetDate >= this.presentDate &&
          !this.bookBorrowing.some(reservation => targetDate >= reservation.dateFrom && targetDate <= reservation.dateTo)
      }
      return true;
    }
    hideModal(): void {
      const targetModal = document.getElementById(`modal-${this.bookCopyId}`);
      if (targetModal) targetModal.style.display = "none";
      this.isReservationListVisible = false;
    }
    borrowBook(): void {
        if (this.canBorrow) {
          const { user, bookCopyId, dateFrom, dateTo } = this;
          this.$store.commit(MUTATIONS.BORROW_BOOK, { dateFrom, dateTo, user, bookCopyId });
          this.hideModal();
        }
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
        .warning-text {
            color: red;
            padding-left: 40px;
        }
        .buttons {
            display: flex;
            justify-content: space-between;
            margin: 0 40px;
            .button {
                margin-left: 20px;
                margin-bottom: 20px;
            }
            .disabled {
                cursor: default;
                opacity: 0.5;
            }
        }
    }
}
.hidden {
    display: none;
}
</style>
