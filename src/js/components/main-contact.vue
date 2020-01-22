<template>
  <section id="contact">
    <h2>{{ $t("contact.title") }}</h2>
    <article>
      
      <ul>
        <li v-for="email in $t('contact.content.emails')">
         <i class="fa fa-envelope"></i> {{ email }}
        </li>
      </ul>
    </article>
    <article>
      <ul>
        <li v-for="phone in $t('contact.content.phones')">
          <i class="fa fa-phone"></i> {{ phone }}
        </li>
      </ul>
    </article>
    <article>
      <ul>
        <li v-for="addres in $t('contact.content.address')">
          <i class="fa fa-address-card"></i> {{ addres }}
        </li>
      </ul>
    </article>
    <article>
      <ul>
        <li v-for="social in $t('contact.content.socials')">
          <a :href="social.link">
            <i class="" :class="[social.icon]"></i>

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
