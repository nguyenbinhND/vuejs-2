<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome Developer! I'm {{ name }}</p>
    <button @click="changeName">Change Myname</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :customName="name"
          :reset="reset"
          :userAge="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @editAge="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function () {
    return {
      name: " sky lee",
      age: 20,
    };
  },
  methods: {
    changeName() {
      this.name = " nguyen binh";
    },
    reset() {
      this.name = " sky lee";
    },
    // editAge() {
    //   this.age = 30;
    // },
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
