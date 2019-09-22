<template>
  <b-container fluid class="page-image">
    <b-row align-h="center" class="image-text">
      <b-col sm="11">
        <h2>Welcome to the website of University of Manitoba's Computer Science Students' Association!</h2>
        <p>Join us in room E1-586 and follow us on social media.</p>
        <p>
          <a href="https://umanitobacssa.slack.com/signup" class="mr-1">
            <font-awesome-icon :icon="['fab', 'slack']" size="2x" />
          </a>
          <a href="https://facebook.com/pg/uofmcssa" class="mr-1">
            <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" />
          </a>
          <a href="https://instagram.com/umanitobacssa/" class="mr-1">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
          </a>
          <a href="mailto:umanitobacssa@gmail.com">
            <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
          </a>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.page-image {
  height: calc(100vh - 76px);
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("~@/assets/home-image2.jpg");
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.image-text {
  padding: 10px;
  background: rgba(0, 0, 0, 0.3);
  /* margin-top: calc(100vh / 2.5); */
  color: whitesmoke;
  position: absolute;
  bottom: 5vh;
  width: 100%;
}
a {
  color: white;
}
a:hover {
  color: gray;
}
</style>