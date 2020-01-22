<template>
  <section id="skills">
    <h2>{{ $t("skills.title") }}</h2>
    <article>
      <ul>
        <li v-for="skill in $t('skills.content')">
          {{ skill.title }} ( {{ skill.level }} )
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "AppMainSkills",
  props: {},
  mounted: function() {},

  methods: {}
};
</script>

<style scoped lang="scss"></style>
