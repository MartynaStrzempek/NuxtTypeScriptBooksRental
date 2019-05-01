<template>
    <div>
        <ul>
            <li v-for="(reservation, idx) in reservationList" :key="idx">
                {{ reservation.dateFrom }} - {{ reservation.dateTo }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { Borrowing } from "~/types";

@Component
export default class ReservationList extends Vue {
    @Prop() reservationList: Array<Borrowing>;
}
</script>

<style lang="scss">
ul {
    list-style: none;
}
</style>

