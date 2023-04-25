<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
      <div class="card-body item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.card-body {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #666666;
}
.item {
  cursor: pointer;
}
.item:hover {
  background-color: #ffe2e2;
}
</style>
