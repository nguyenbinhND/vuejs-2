<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>My Age: {{ userAge }}</p>
    <!-- <button @click="editAge()">ChangeMe</button> -->
    <button @click="editAge">ChangeMe</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  props: {
    userAge: Number,
    // editAge: Function,
  },
  methods: {
    editAge() {
      // eslint-disable-next-line vue/no-mutating-props
      this.userAge = 30;
      // eslint-disable-next-line vue/no-mutating-props
      //   (this.userAge = 30), this.$emit("editAge", this.userAge);
      //   eventBus.$emit("editWasAge", this.userAge);
      eventBus.changeAge(this.userAge);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
