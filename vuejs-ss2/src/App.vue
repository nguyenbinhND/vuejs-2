<template>
  <div id="App">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button
            class="btn btn-outline-danger"
            @click="selectedComponent = 'appCard'"
          >
            Card
          </button>
          <button
            class="btn btn-outline-danger"
            @click="selectedComponent = 'appContact'"
          >
            Contact
          </button>
          <button
            class="btn btn-outline-danger"
            @click="selectedComponent = 'appAbout'"
          >
            About
          </button>
        </div>

        <p>{{ selectedComponent }}</p>
      </div>
      <div class="row">
        <div class="col xs-12">
          <!-- <appCard cardWord="cat">
            <template v-slot:content>
              <p class="hello">hello my friend</p>
            </template>
          </appCard> -->

          <!-- khi chuyển sang component khác thì lifecycle được bảo toàn
          k bị refesh lại component -->
          <kep-alive>
            <!-- nếu có giá trị component trả về nó sẽ chạy đến component  -->
            <component :is="selectedComponent"></component>
          </kep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";
export default {
  name: "App",
  data: function () {
    return {
      cardTitle: "white Cat hehe",
      selectedComponent: "appCard",
    };
  },
  components: {
    appCard: Card,
    appContact: Contact,
    appAbout: About,
  },
  // methods: {
  //   selectedComponent() {},
  // },
};
</script>

<style scoped></style>
