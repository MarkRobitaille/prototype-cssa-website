<template>
  <div id="app" class="ml-0">
    <b-navbar class="navigator" toggleable="sm" fixed="top">
      <b-navbar-brand to="/">
        <b-img class="mr-2" src="@/assets/logo-resized.png" height="50px" />UManitoba CSSA
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about" class="mt-0 mb-0 ml-0 mr-0">About</b-nav-item>
          <b-nav-item to="/events" class="mt-0 mb-0 ml-0 mr-0">Events</b-nav-item>
          <b-nav-item to="/execs" class="mt-0 mb-0 ml-0 mr-0">Execs</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/contact" class="mt-0 mb-0 ml-0 mr-0">Contact Us</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <transition name="fade" mode="out-in">
      <!-- <keep-alive> -->
      <router-view class="ml-0 mr-0 pages"></router-view>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navigator {
  background: #ffffff;
  /* height: 50px; */
}
.pages {
  background: #dadada;
  min-height: calc(100vh-76px);
  margin-top: 76px;
  position: relative;
}
.page-content {
  /* margin-top: 10px;
  margin-bottom: 10px; */
  margin: 10px;
  background: #ffffff;
}
html {
  background-color: #dadada;
}
body {
  overflow-y: scroll;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
  position: absolute;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  /* position: absolute */
}
</style>
