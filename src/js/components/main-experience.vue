<template>
  <section id="experience">
    <h2>{{ $t("experience.title") }}</h2>
    <article v-for="experience in $t('experience.content')">
      <h3>{{ experience.position }}</h3>
      <h5>{{ experience.employer }}</h5>
      <h6>
        <span>{{ experience.timeline.from }}</span>
        -
        <span>{{ experience.timeline.to }}</span>
      </h6>
      <ul>
        <li v-for="description in experience.description">
          {{ description }}
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "AppMainExperience",
  props: {},
  mounted: function() {},

  methods: {}
};
</script>

<style scoped lang="scss"></style>
