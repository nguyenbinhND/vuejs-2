<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-user></app-user>
      </div>
    </div>
  </div>
</template>

<script>
import UserComponent from "./components/UserComponent.vue";

export default {
  components: {
    appUser: UserComponent,
  },
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
