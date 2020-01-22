import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import { i18n } from "./dictionary/i18n";
import { Util } from "./util";

window.i18n = i18n;
window.Util = Util;
//
var Application = new Vue({
  i18n,
  el: "#application",
  components: {
    AppHeader: require("./components/header").default,
    AppMain: require("./components/main").default,
    AppFooter: require("./components/footer").default
  },
  data: {}, 
  mounted: function() {}
});
