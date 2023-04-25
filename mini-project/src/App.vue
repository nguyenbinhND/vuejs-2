<template>
  <div id="app">
    <appHeader :maxItem="maxItem" :itemCount="items.length"></appHeader>
    <div class="newItem">
      <appNewItem @itemAdded="addItem"></appNewItem>
    </div>
    <appItemLayout :items="items" @itemRemove="removeItem"></appItemLayout>
  </div>
</template>

<script>
import ItemLayout from "./components/ItemLayout.vue";
import NewItem from "./components/NewItem.vue";
import Header from "./components/Header.vue";
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
      if (this.items.length >= this.maxItem) return;
      this.items.push(item);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
  components: {
    appItemLayout: ItemLayout,
    appNewItem: NewItem,
    appHeader: Header,
  },
};
</script>

<style scoped>
#app {
  width: 100%;
}
.newItem {
  display: flex;
  justify-content: center;
}
</style>
