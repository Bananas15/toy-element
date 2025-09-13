import { createApp } from "vue";
import App from "./App.vue";
import ToyElement from "toy-element";
import "toy-element/dist/index.css";

console.log(ToyElement);

createApp(App).use(ToyElement).mount("#app");

// git测试