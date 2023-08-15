import "./assets/main.css";
import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import Navbar from "@/components/Navbar.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('Navbar', Navbar);

app.mount("#app");
