<template>
  <section class="mt-1">
    <v-footer v-if="$vuetify.breakpoint.smAndUp"
      :absolute="!fixed"
      app
      class="footer-color"
      ><v-row>
        <v-col cols="4">
          <img width="90" src="EAGLE.png" class="pl-6">
        </v-col>
        <v-col cols="4" class="flex-center">
          <span class="footer-text">&copy; {{ new Date().getFullYear() }} product of An UiTM Start Up Company</span>
          <!-- <img width="90" src="EAGLE.png" class="pl-6" /> -->
        </v-col>
        <v-col cols="4" class="flex-logo">
          <img width="90" src="https://raw.githubusercontent.com/hanifr/logos/master/SEAICrev%205%20Kusanagi%20rev%202%20no%20line.png" class="pl-1 mr-2">
        </v-col>
      </v-row>
    </v-footer>

    <v-footer v-else
      :absolute="!fixed"
      app
      class="footer-color"
      ><v-row>
        <v-col cols="4">
          <img width="90" src="EAGLE.png" class="pl-6">
        </v-col>
        <v-col cols="8" class="flex-center">
          <span class="footer-text">&copy; {{ new Date().getFullYear() }} product of An UiTM Start Up Company</span>
          <!-- <img width="90" src="EAGLE.png" class="pl-6" /> -->
        </v-col>
        <!-- <v-col cols="4" class="flex-logo">
          <img width="90" src="https://raw.githubusercontent.com/hanifr/logos/master/SEAICrev%205%20Kusanagi%20rev%202%20no%20line.png" class="pl-1 mr-2">
        </v-col> -->
      </v-row>
    </v-footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
    };
  },
};
</script>

<style scoped>
.footer-color {
  border-top: rgb(22, 83, 71) solid 1px !important;
  background: rgb(239, 243, 198) !important;
  opacity: 0.5;
  display: flex;
  /* justify-content: flex-end; */
  font-size: 0.8rem;
  /* height: 90px; */
  /* padding-left: 200px; */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-logo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.footer-text{
  justify-content: center;
  padding-bottom: 2px;
  color:whitesmoke !important;
  text-shadow: 1px 2px black;
  font-size:small;
}
</style>
