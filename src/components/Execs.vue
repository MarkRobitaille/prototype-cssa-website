<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col sm="11" class="pt-2 pb-2 page-content">
        <b-jumbotron
          class="mt-2"
          header="Execs"
          fluid
        >Meet the people elected to run the Computer Science Students' Association.</b-jumbotron>
        <b-row align-h="center">
          <b-col sm="12">
            <b-card-group deck>
              <b-card
                img-src="@/assets/ahmed.jpg"
                title="Ahmed Kidwai"
                header="President"
                img-top
                class="mb-2 text-left"
              >
                <b-card-text>Here is some sample text talking about Ahmed. Lots of text about how he's the President and thus has the authority to fire off the non-existant CS nukes. Truly powerful.</b-card-text>
              </b-card>
              <b-card
                img-src="@/assets/emanuel.jpg"
                title="Emanuel Wiens"
                header="Vice-President (Lounge Affairs)"
                img-top
                class="mb-2 text-left"
              >
                <b-card-text>Here is some sample text talking about Emanuel. Lots of text about how he's the Vice-President and knows everyone.</b-card-text>
              </b-card>
              <b-card
                img-src="@/assets/stephanie.jpg"
                title="Stephanie Chacon-Vega"
                header="Vice-President (Accounting)"
                img-top
                class="mb-2 text-left"
              >
                <b-card-text>Here is some sample text talking about Stephanie. Lots of text about how she's the Vice-President and super smart.</b-card-text>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
        <b-row align-h="center">
          <b-col sm="8">
            <b-card-group deck>
              <b-card
                img-src="@/assets/john.jpg"
                title="John Manning"
                header="Vice-President (Public Relations)"
                img-top
                class="mb-2 text-left"
              >
                <b-card-text>Here is some sample text talking about John. Lots of text about how he's the Vice-President and how he's a PR superstar.</b-card-text>
              </b-card>
              <b-card
                img-src="@/assets/mark.jpg"
                title="Mark Robitaille"
                header="Vice-President (Social Media)"
                img-top
                class="mb-2 text-left"
              >
                <b-card-text>Here is some sample text talking about Mark. Lots of text about how he's the Vice-President and how he doesn't believe that all 4 of us can be Vice-Presidents since it doesn't make sense.</b-card-text>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
        <b-row class="mt-4">
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
  name: "Execs",
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