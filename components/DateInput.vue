<template>
  <b-form-input type="date" @change="onDateInputChange"></b-form-input>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator";

@Component
export default class DateInput extends Vue {
  @Prop() date: string;

  @Emit("update:date") onDateInputChange(date) {
    return date;
  }
}
</script>

<style scoped lang="scss">

</style>
