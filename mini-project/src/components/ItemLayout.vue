<template>
  <div class="row">
    <appItem
      v-for="(item, index) in items"
      :key="item.id"
      @click.native="removeItem(index)"
      >{{ item }}
    </appItem>
  </div>
</template>

<script>
import Items from "./Item.vue";
export default {
  props: ["items"],
  methods: {
    removeItem(index) {
      this.$emit("itemRemove", index);
    },
  },
  components: {
    appItem: Items,
  },
};
</script>

<style scoped></style>
