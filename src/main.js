import Vue from "vue";
import App from "./App.vue";

import Story from "socstory/src/Story.vue";

Vue.config.productionTip = false;
Vue.component("story", Story);

new Vue({
  render: h => h(App)
}).$mount("#app");
