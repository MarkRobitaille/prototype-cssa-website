<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col sm="11" class="pt-2 pb-2 page-content">
        <b-jumbotron
          class="mt-2"
          header="Contact Us"
          fluid
        >Fill in the form below or contact us via social media.</b-jumbotron>
        <b-row>
          <b-col>
            <b-form-fieldset :disabled="formLoading">
              <b-form-group label-cols="4" label-cols-lg="2" label="First Name:">
                <b-form-input v-model="form.name" required placeholder="Enter First Name"></b-form-input>
              </b-form-group>
              <b-form-group label-cols="4" label-cols-lg="2" label="Last Name:">
                <b-form-input v-model="form.surname" required placeholder="Enter Last Name"></b-form-input>
              </b-form-group>
              <b-form-group label-cols="4" label-cols-lg="2" label="Email:">
                <b-form-input v-model="form.email" required placeholder="Enter Email"></b-form-input>
              </b-form-group>
              <b-form-group label-cols="4" label-cols-lg="2" label="Message:">
                <b-form-textarea
                  v-model="form.message"
                  required
                  placeholder="Enter Message"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
              <b-row align-h="center">
                <b-col sm="2">
                  <b-button
                    type="submit"
                    :variant="submitStatus"
                    block
                    class="mt-1 mb-1"
                    @click="onSubmit()"
                  >
                    {{submitButton}}
                    <b-spinner v-if="formLoading" class="ml-1" variant="light" small />
                  </b-button>
                </b-col>
                <b-col sm="2">
                  <b-button variant="warning" block class="mt-1 mb-1" @click="onReset()">Reset</b-button>
                </b-col>
              </b-row>
            </b-form-fieldset>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div
              v-if="submitStatus=='success'"
            >Thank you for contacting the University of Manitoba's Computer Science Students' Association.</div>
            <div
              v-else-if="submitStatus=='danger'"
            >It appears there was an error submitting the form. Please try again or contact us via social media.</div>
          </b-col>
        </b-row>
        <b-row class="mt-3">
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
      form: {
        name: "",
        surname: "",
        email: "",
        message: ""
      },
      show: true,
      formLoading: false,
      submitButton: "Submit",
      submitStatus: "primary"
    };
  },
  components: {
    Footer
  },
  methods: {
    onSubmit() {
      let vm = this;
      this.formLoading = true;
      this.axios
        .post("https://formcarry.com/s/XaTDp9NyI6I", this.form)
        .then(res => {
          if (res.data && res.data.status == "success") {
            vm.submitButton = "Submitted";
            vm.submitStatus = "success";
          } else {
            vm.submitButton = "Error";
            vm.submitStatus = "danger";
          }
          vm.formLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onReset() {
      // Reset our form values
      this.form.name = "";
      this.form.surname = "";
      this.form.email = "";
      this.form.message = "";
      this.formLoading = false;
      this.submitButton = "Submit";
      this.submitStatus = "primary";
      // Reset/clear native browser form validation
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
</style>