<template>
    <div>
      <v-row dense class="mt-1">
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="2" class="columnBorder left" style="background-color: #263238; opacity: 0.8;">
          <leftSummary/>
        </v-col>
  
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? 10 : 12" class="columnBorder center" style="background-color: #263238; opacity: 0.8;">
          <centerSummary/>
        </v-col>
      </v-row>
    </div>
  </template>
  

<script>
  import centerSummary from '../components/TuahV2/viewPages/centerPage.vue';
  import leftSummary from '../components/TuahV2/viewPages/leftPage.vue';
  export default {
    name: 'Grid',
    // layout: 'dashboard',
    components: {
      centerSummary,
      leftSummary,
    //   rightSummary
    },
    data() {
    return {
      index: 1,
    };
  },
  }
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import '~assets/scss/mixins.scss';
.left {
      // width: 25vw !important;
      height: calc(115vh - 185px) !important;
      padding: 10px;
      // margin: 10px 2px 0px 12px;
    }
.center {
      // width: 50vw !important;
      height: calc(115vh - 185px) !important;
      padding: 10px;
      margin: 0px 0px;
    }
.right {
      // width: 25vw !important;
      height: calc(112vh - 185px) !important;
      padding: 10px;
      margin: 0px;
    }
.time {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4vh;
    }
.map-cont {
      @include frame-border;
      padding: 10px;
      margin: 10px 0.3vw;
      height: calc(91vh - 65px) !important;
    }
.compact {
      padding: 0;
      margin: 0 0 5px 0;
      font-size: 15px;
      // font-weight: bold;
    }
.menuSelect {
      display: flex; 
      justify-content: space-around;
      font-family: Kdam Thmor Pro, sans-serif;
      font-size: large;
}
.clock {
      color: white;
      font-size: 15px;
      // font-family: Ma Shan Zheng, sans-serif;
      font-family: Righteous, sans-serif;
      font-weight: 800;
      letter-spacing: 1px;
    }
.columnBorder {
    border: 1px solid rgb(13, 185, 238); 
    padding: 10px;
    border-radius: 5px;
}
.v-btn {
border: 1px solid rgb(13, 185, 238);
color: #00E5FF !important;
text-shadow: 1px 1px rgb(21, 15, 15);
}
</style>