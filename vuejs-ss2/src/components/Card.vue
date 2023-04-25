<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <h2>{{ cardWord }}</h2>
    <slot name="title"> </slot>
    <slot name="content"></slot>
    <!-- <slot></slot> -->
  </div>
</template>

<script>
export default {
  el: "#card",
  props: ["cardWord"],
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
h2 {
  color: red;
}
.hello {
  color: red;
}
</style>
