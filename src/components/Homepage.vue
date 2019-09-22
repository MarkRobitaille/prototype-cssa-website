<template>
  <b-container fluid class="page-image">
    <b-row align-h="center" class="image-text">
      <b-col sm="11">
        <h2>Welcome to the website of University of Manitoba's Computer Science Students' Association!</h2>
        <p>Join us in room E1-586 and follow us on social media.</p>
        <Footer variant="light"></Footer>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "Homepage",
  data() {
    return {};
  },
  components: {
    Footer
  }
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
</style>