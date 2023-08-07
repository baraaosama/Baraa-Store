import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(store).use(router).mount("#app");
