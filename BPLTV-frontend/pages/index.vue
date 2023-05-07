<template>
  <div>
    <v-row dense class="mt-1">
      <v-col :cols="$vuetify.breakpoint.mdAndUp ? 9 : 12" class="columnBorder center" style="background-color: #263238; opacity: 0.8;">
        <centerSummary/>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="3" class="columnBorder right" style="background-color: #263238; opacity: 0.8;">
        <leftSummary/>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import centerSummary from '../components/oneZero/ViewPages/CenterPage.vue';
import leftSummary from '../components/oneZero/ViewPages/RightPageInfo.vue';
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
  //   width: 25vw !important;
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
    height: calc(115vh - 185px) !important;
    padding: 10px;
    margin: 0px;
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