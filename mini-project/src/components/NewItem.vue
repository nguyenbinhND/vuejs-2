<template>
  <div class="row">
    <form action="">
      <div class="col-sm-8 col-offset-2 col-6 col-md-offset-3 form-group">
        <label for="">you can say...</label>
        <textarea
          class="form-group"
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="item"
        ></textarea>
      </div>
      <div class="col-sm-8 col-offset-2 col-6 col-md-offset-3 form-group">
        <!-- @click.prevent: tắt load lại trang khi submit -->
        <button class="btn btn-success" @click.prevent="createNew">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  //   props: ["items"],
  data: function () {
    return {
      item: "",
    };
  },
  methods: {
    createNew() {
      this.item.length > 0
        ? this.$emit("itemAdded", this.item)
        : (this.item = "");

      this.item = "";
    },
  },
  components: {},
};
</script>

<style></style>
