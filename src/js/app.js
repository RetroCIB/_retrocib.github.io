import Vue from "vue";
import { i18n } from "./i18n";
import { Util } from "./util";

window.i18n = i18n;
window.Util = Util;
//
var Application = new Vue({
  i18n,
  el: "#application",
  components: {
    AppHeader: require("./components/header").default,
    AppMain: require("./components/main").default
  },
  data: {},
  mounted: function() {}
});
