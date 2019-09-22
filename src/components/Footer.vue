<template>
  <b-container fluid>
    <a href="https://umanitobacssa.slack.com/signup" class="mr-4">
      <font-awesome-icon :icon="['fab', 'slack']" size="2x" />
    </a>
    <a href="https://facebook.com/pg/uofmcssa" class="mr-4">
      <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" />
    </a>
    <a href="https://instagram.com/umanitobacssa/" class="mr-4">
      <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
    </a>
    <a href="mailto:umanitobacssa@gmail.com">
      <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
    </a>
  </b-container>
</template>

<script>
export default {
  name: "Footer",
  props: {
    variant: {
      type: String,
      required: false
    }
  },
  computed: {
    "--color": function() {
      let styleString;
      if (this.variant && this.variant == "light") {
        styleString = "white";
      } else {
        styleString = "black";
      }
      return styleString;
    }
  }
};
</script>

<style scoped>
a {
  color: var(--color);
}
a:hover {
  color: gray;
}
</style>