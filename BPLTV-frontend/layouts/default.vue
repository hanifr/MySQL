<template>
  <v-app dark>
    <v-app-bar fixed app class="top-header" height="46px">
      <div class="mt-2">
        <a href="https://www.eagleattech.com/">
        <button><img :src="brandLogo" width="110px" height="85px" /></button>
        </a>
      </div>
      <!-- <v-toolbar-title v-text="title" class="title-main" /> -->
      <v-spacer />
      <Timex/>
      
    </v-app-bar>
    <v-main>
      <div style="margin-left: 2vw; margin-right: 2vw">
        <nuxt />
      </div>
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
import Timex from "../components/Utils/rtc.vue";
import Footer from "../components/Footer.vue";
import { mapState, mapMutations } from "vuex";

import mqtt from "mqtt";

export default {
  data() {
    return {
      fixed: false,
    };
  },
  components: {
    Timex,
    Footer
  },
  methods: {},
  computed: {
    ...mapState({
      brandLogo: (state) => state.brandLogo,
      // stations: (state) => state.stations,
    }),
    // ...mapGetters(["loggedInUser", "isAuthenticated"]),
  },

  mounted: function () {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = null;
  },
};
</script>

<style>
* {
  font-family: "Orbitron", sans-serif;
  letter-spacing: 1px;
}
html {
  /* overflow-y: hidden; */
  overflow-y: scroll;
}
.v-application::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: transparent;
  background-image: url(~/assets/pattern.png);
  background-size: 4.6875rem;
  background-repeat: repeat;
  background-attachment: initial;
}
.v-application {
  background-color: #273136;
  z-index: 2;
}
.title-main {
  font-size: 1rem;
  color: white;
  padding-left: 20px;
  text-transform: uppercase;
}
.v-main__wrap::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -5;
  /* background: linear-gradient(180deg, rgba(51, 76, 89, 0.9) 0, #0d101b 100%); */
}
.v-main__wrap::after {
  content: "";
  position: fixed;
  top: 0;
  height: 100%;
  left: 0;
  right: 0;
  z-index: -10;
  background-color: #273136;
  background-image: linear-gradient(
    180deg,
    rgba(50, 70, 80, 0.9) 0,
    #0d101b 100%
  );
  background-image: url("/DATC_B2.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: initial;
  height: 100%;
  transition: background 0.2s linear;
  background-size: cover;
}
.top-header {
  background-color: transparent !important ;
}
.title-main {
  font-size: 1rem;
  color: white;
  padding-left: 20px;
  text-transform: uppercase;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: rgb(204, 221, 221);
}
/* SideBar */
.side-bar {
  max-height: 100% !important;
  background: #271f40 !important;
  color: #f0f4e6 !important;
  max-height: 100% !important;
}
.brand-name {
  display: flex;
  justify-content: center;
  color: white;
}
.hr-brand {
  margin: 15px 40px 20px 40px;
}
.v-list-item {
  padding: 15px 0 15px 15px;
}
.v-list-item .v-list-item__title {
  color: #f0f2f0 !important;
}
i.v-icon.v-icon {
  color: #f0f2f0;
  font-size: 1.5rem;
  padding-left: 20px;
}
/* List item text, background and icon */
.v-list-item--active .v-list-item__title {
  color: #64e0e4 !important;
}
.v-list-item--active {
  background: #2b2246 !important;
}
.v-list-item--active .v-list-item__action {
  color: #64d3e4 !important;
}
/* End of List item text, background and icon */
/* Triangle */
.box {
  position: relative;
}
.box:after {
  position: absolute;
  bottom: 15%;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-right: 25px solid rgb(224, 224, 224);
}
.box:after {
  right: 0;
}
/* End of Triangle */
/* End of SideBar */

/* logout */
.logout {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 300px;
}

.hr {
  margin: 0 20px;
  border-top: 1px solid rgb(189, 199, 199);
}

.btn-div {
  display: flex;
  justify-content: flex-end;
}

.logout-btn {
  width: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
}

/* layer */

.layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  z-index: 999;
}

.v-btn--outlined .v-btn__content .v-icon,
.v-btn--round .v-btn__content .v-icon {
  color: red;
}

.header {
  padding: 20px 0;
}

/* .v-main__wrap{
  background: rgb(224,224,224)!important;

} */

@media only screen and (min-width: 960px) {
  .container {
    width: 94%;
  }
}
</style>
