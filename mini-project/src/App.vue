<template>
  <div id="app">
    <appNewItem @itemAdded="addItem"></appNewItem>
    <appItemLayout :items="items" @itemRemove="removeItem"></appItemLayout>
  </div>
</template>

<script>
import ItemLayout from "./components/ItemLayout.vue";
import NewItem from "./components/NewItem.vue";
export default {
  name: "App",
  data: function () {
    return {
      items: [],
      maxItem: 10,
    };
  },
  methods: {
    addItem(item) {
      this.items.push(item);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
  components: {
    appItemLayout: ItemLayout,
    appNewItem: NewItem,
  },
};
</script>

<style scoped>
#app {
}
</style>
