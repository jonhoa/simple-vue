import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// eslint-disable-next-line prettier/prettier
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";
createApp(App).use(router).mount("#app");
