<template>
  <div class="">
    <h1>Data Contact Component</h1>
    <p>My address: {{ address }}</p>
    <button @click="changPhone">Click</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      address: "cau giay- ha noi",
    };
  },
  methods: {
    changPhone() {
      this.address = " 093723727";
    },
  },
};
</script>

<style></style>
