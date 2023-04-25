import Vue from "vue";
import ContactCp from "./ContactCp.vue";
// import DataContact from "./DataContact.vue";
import App from "./App.vue";

Vue.config.productionTip = false;
// import component global
Vue.component("contact-component", ContactCp);

//khởi tạo eventBus để truyền giá trị giữa các component k thông qua Component cha
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("editWasAge", age);
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
