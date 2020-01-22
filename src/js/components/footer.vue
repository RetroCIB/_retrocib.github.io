<template>
  <footer>
    <div
      class="fb-comments"
      data-href="https://retrocib.github.io/"
      data-width="100%"
      data-numposts="5"
    ></div>

    <div
      class="fb-like"
      data-href="https://retrocib.github.io"
      data-width=""
      data-layout="button_count"
      data-action="like"
      data-size="small"
      data-share="true"
    ></div>

  </footer>
</template>

<script>
export default {
  name: "AppFooter",
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
    .fb-comments{
        iframe{
            ._5lm5._2pi3._3-8y{
                display:none !important;
            }
        }
    }
</style>
