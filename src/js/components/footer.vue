<template>
  <footer>
    <ul>
      <!-- share on facebook  -->
      <li>
        <div
          class="fb-share-button"
          data-href="https://retrocib.github.io/"
          data-layout="icon_link"
          data-size="large"
        >
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fretrocib.github.io%2F&amp;src=sdkpreparse"
            class="fb-xfbml-parse-ignore"
            >Distribuie</a
          >
        </div>

        
      </li>


      <li>
          <div
          class="fb-like"
          data-href="https://retrocib.github.io"
          data-width=""
          data-layout="button_count"
          data-action="like"
          data-size="small"
          data-share="true"
        ></div>
      </li>
    </ul>
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

<style scoped lang="scss"></style>
