<template>
  <main>
    <b-row>
      <b-col cols="12" md="8">
        <app-main-resume></app-main-resume>
        <app-main-experience></app-main-experience>
        <app-main-education></app-main-education>
      </b-col>

      <b-col cols="12" md="4">
        <app-main-contact></app-main-contact>
        <app-main-skills></app-main-skills>
      </b-col>
    </b-row>
  </main>
</template>

<script>
export default {
  name: "AppMain",
  props: {},
  components: {
    AppMainResume: require("./main-resume").default,
    AppMainExperience: require("./main-experience").default,
    AppMainContact: require("./main-contact").default,
    AppMainSkills: require("./main-skills").default,
    AppMainEducation: require("./main-education").default
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
