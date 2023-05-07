<template>
  <div class="d-none d-md-flex">
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" :cols="card.cols">
        <v-card class="right elevation-12 border-rounded card-color">
          <v-row>
            <v-col cols="5" class="left">
              <v-icon :class="card.icon" :color="card.class" size="50">
              </v-icon>
            </v-col>
            <v-col cols="7" class="inner">
              <v-card-subtitle class="font card-desc"
                >{{ card.description }}
              </v-card-subtitle>
              <v-card-title class="font display-1">{{
                card.data
              }}</v-card-title>
            </v-col>
          </v-row>
          <hr class="hr" />
          <v-row>
            <v-col class="flex-card">
              <v-icon class="mdi mdi-refresh" size="15" color="grey"></v-icon>
              <v-card-subtitle class="card-subtitle">{{
                duration
              }}</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// noinspection NpmUsedModulesInstalled
import { mapState } from "vuex";
export default {
  data() {
    return {
      //   cards:[
      //   {
      //   description: "Stations",
      //   icon: "mdi mdi-map-marker-radius icon",
      //   number: "4",
      //   cols: 4,
      //   class: "primary",
      //   data:4}
      //   ,
      //   {
      //   description: "Online",
      //   icon: "mdi mdi-checkbox-multiple-marked icon",
      //   number: "4",
      //   cols: 4,
      //   class: "success",
      //   data:4
      //   },
      //   {
      //   description: "Warnings",
      //   icon: "mdi mdi-alert-rhombus-outline icon",
      //   number: 0,
      //   cols: 4,
      //   class: "error",
      //   data:0
      //   }
      // ],
    };
  },

  props: ["cards"],
  computed: {
    ...mapState({
      duration: (state) => state.duration,
    }),
  },
};
</script>

<style scoped>
.icon {
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  flex-wrap: wrap;
}

.font {
  font-size: 1.2em;
  color: white;
}

.right {
  border-radius: 8px;
  background: #eef8f8;
}

.inner {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.left {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.hr {
  margin: 0 20px;
  border-top: 1px solid rgb(189, 199, 199);
}

.display-1 {
  padding-top: 5px;
  padding-right: 30px;
}

.v-card__subtitle {
  padding: 10px;
}

.card-subtitle {
  padding-left: 20px;
}

.flex-card {
  display: flex;
  padding: 0;
  padding-top: 12px;
  padding-left: 10px;
}

.col-7 {
  padding: 0;
}

.card-desc {
  padding-top: 20px;
  padding-right: 30px;
}

.card-color {
  /* background: rgb(240,244,230); */
  background: rgba(0, 0, 0, 0.5) !important;
  /* background: rgb(238, 248, 248) !important; */
  border-radius: 8px !important;
}
</style>
