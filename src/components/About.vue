<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col sm="11" class="pt-2 pb-2 page-content">
        <b-jumbotron
          class="mt-2"
          header="About"
          fluid
        >Learn who were are and what we do.</b-jumbotron>
        <b-row align-h="center">
          <b-col sm="10">
            <p>The Computer Science Students' Association (CSSA) is welcome to all students and is founded on the needs of Computer Science students. 
              We provide students with a safe place to study, converse, and relax. Our group allows the voices of students to be heard by our department at their meetings. 
              We also coordinate events for students to participate in on a regular basis.</p>
            <p>Our lounge is located in EITC E1-586, we'd love to see you there.</p>
            <p>You can read our constitution <a href="https://communitylink.umanitoba.ca/organization/CompSci/documents/view/18774">here</a>.</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" class="mb-4">
           <b-img src="@/assets/about-image.jpg" fluid></b-img> 
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <Footer></Footer>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    Footer
  }
};
</script>

<style scoped>
</style>