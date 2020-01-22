<template>
  <header>
    <b-row class="flags">
      <b-col cols="12">
        <a href="#" @click.stop.prevent="changeLocale('ro-RO')">
          RO
        </a>

        <span>|</span>

        <a href="#" @click.stop.prevent="changeLocale('en-UK')">
          EN
        </a>
      </b-col>
    </b-row>

    <b-row class="title">
      <b-col cols="12">
        <h1>
          <span>Ionut-Catalin BADEA</span>
          <span>Web Developer</span>
        </h1>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {},
  mounted: function() {},

  methods: {
    changeLocale: function(locale) {
      Util.i18n_locale(locale);
    }
  }
};
</script>

<style scoped lang="scss">

</style>
