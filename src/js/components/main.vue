<template>
  <main>
    <div>
      <app-main-resume></app-main-resume>
      <app-main-experience></app-main-experience>
    </div>

    <div>
      <app-main-contact></app-main-contact>
      <app-main-skills></app-main-skills>
      <app-main-education></app-main-education>
    </div>

  </main>
</template>

<script>
export default {
  name: "AppMain",
  props: {},
  components:{
    AppMainResume: require("./main-resume").default,
    AppMainExperience: require("./main-experience").default,
    AppMainContact: require("./main-contact").default,
    AppMainSkills: require("./main-skills").default,
    AppMainEducation: require("./main-education").default,
  },
  mounted: function() {},

  methods: {
    changeLocale: function(locale) {
      Util.i18n_locale(locale);
    }
  }
};
</script>

<style scoped lang="scss"></style>
