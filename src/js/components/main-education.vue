<template>
  <section id="education">
    <h2>{{ $t("education.title") }}</h2>
    <article>
      <ul>
        <li v-for="education in $t('education.content')">
          <h3>
            <a
              :href="education.link"
              v-if="education.link && education.link.length"
            >
              <span>
                {{ education.course }}
              </span>
            </a>
            <span v-else>
              {{ education.course }}
            </span>
          </h3>
          <h5>{{ education.school }}</h5>
          <h6>
            <span>{{ education.timeline.from }}</span>
            -
            <span>{{ education.timeline.to }}</span>
          </h6>
          <ul v-if="education.competences && education.competences.length">
            <li v-for="competence in education.competences">
              <i>{{ competence }}</i>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "AppMainEducation",
  props: {},
  mounted: function() {},

  methods: {}
};
</script>

<style scoped lang="scss"></style>
