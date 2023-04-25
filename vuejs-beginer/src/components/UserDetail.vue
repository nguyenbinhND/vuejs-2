<template>
  <div class="component">
    <h3>Information User Details</h3>
    <p>List Details</p>
    <p>MyName: {{ customName }}</p>
    <p>MyAge: {{ userAge }}</p>
    <button @click="reset()">Reset</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  //   props: [],

  props: {
    customName: String,
    reset: Function,
    userAge: Number,
  },
  created() {
    eventBus.$on("editWasAge", (age) => {
      // eslint-disable-next-line vue/no-mutating-props
      this.userAge = age;
    });
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
