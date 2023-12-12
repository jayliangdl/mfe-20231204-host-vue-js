import { createApp } from "vue";

import "./index.css";

import App_ReactComponentInVue from "./ReactComponentInVue.vue";
// import App_NextjsComponentInVue from "./NextjsComponentInVue.vue";   //Jay comment on 2023/12/12  nextjs嵌入vue还未能实现
import App_VueComponentInVue from "./VueComponentInVue.vue";

createApp(App_ReactComponentInVue).mount("#DivReactComponentInVue");
// createApp(App_NextjsComponentInVue).mount("#DivNextjsComponentInVue");   //Jay comment on 2023/12/12  nextjs嵌入vue还未能实现
createApp(App_VueComponentInVue).mount("#DivVueComponentInVue");
