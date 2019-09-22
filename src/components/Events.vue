<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col sm="11" class="pt-2 pb-2 page-content">
        <b-jumbotron
          class="mt-2"
          header="Events"
          fluid
        >Meet new people and learn new things at one of our events.</b-jumbotron>
        <b-row align-h="center">
          <b-col sm="12">
            <b-carousel
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#dadada"
              img-width="1024"
              img-height="480"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide img-src="@/assets/events-slide-1.jpg"></b-carousel-slide>
              <!-- caption="Meet New People" -->
              <b-carousel-slide img-src="@/assets/events-slide-2.jpg"></b-carousel-slide>
              <!-- caption="Learn New Things" -->
              <b-carousel-slide img-src="@/assets/events-slide-3.jpg"></b-carousel-slide>
              <!-- caption="Make New Friends" -->
            </b-carousel>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col>
            <h2>Upcoming Events</h2>
          </b-col>
        </b-row>
        <b-row align-h="center" class="mt-2 text-left">
          <b-col sm="4">
            <b-card
              title="Game Jam"
              header="Date: November 8th-10th, 2019"
              footer="Location: EITC E2-XXX"
            >
              <b-card-text>Are you interested in making games? Join us on the first weekend of reading week to take part in CSSA's first game jam. Find a group or work independently to create a game! Beginners encouraged to come!</b-card-text>
            </b-card>
          </b-col>
          <b-col sm="4">
            <b-card
              title="Programming Contest"
              header="Date: Winter 2020"
              footer="Location: To Be Decided"
            >
              <b-card-text>Join us on our annual programming contest! Solve problems independently, with difficulty ranging from easy to hard. All students welcome!</b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>
            <p>Events that are done more regularly are announced on our Slack. Follow us on social media to be up to date on new and upcoming events!</p>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col>
            <h2>Past Events</h2>
          </b-col>
        </b-row>
        <b-row align-h="center" class="mt-2 text-left">
          <b-col sm="4">
            <b-card
              title="CS Mixer"
              header="Date: September 20th, 2019"
              footer="Location: EITC E2-609"
            >
              <b-card-text>Meet and mingle with other students interested in Computer Science. Organized in collaboration by CSSA, .devClub, UM WICS, and MISA. Brought to you by our sponsor, SkipTheDishes!</b-card-text>
            </b-card>
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
  name: "Events",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  components: {
    Footer
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
</style>