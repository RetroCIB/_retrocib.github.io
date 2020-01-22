<template>
  <section id="contact">
    <h2>{{ $t("contact.title") }}</h2>
    <article>
      <ul>
        <li v-for="email in $t('contact.content.emails')">
          {{ email }}
        </li>
      </ul>
    </article>
    <article>
      <ul>
        <li v-for="phone in $t('contact.content.phones')">
          {{ phone }}
        </li>
      </ul>
    </article>
    <article>
      <ul>
        <li v-for="addres in $t('contact.content.address')">
          {{ addres }}
        </li>
      </ul>
    </article>
    <article>
      <ul>
        <li v-for="social in $t('contact.content.socials')">
          <a :href="social.link">
            {{ social.title }}
          </a>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "AppMainContact",
  props: {},
  mounted: function() {},

  methods: {}
};
</script>

<style scoped lang="scss"></style>
