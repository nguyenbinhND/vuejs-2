<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        :style="{ width: (itemCount / maxItem) * 100 + '%' }"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span>{{ itemCount }}/{{ maxItem }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["itemCount", "maxItem"],
  data: function () {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped></style>
