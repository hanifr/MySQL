<template>
  <div>
    <div class="mt-4 menuSelect">
      <v-menu
        offset-y
        bottom
        left
      >
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">
            <h6>
              {{ index === 1 ? 'General Info' : 'Data Health' }}
            </h6>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="setIndex(1)">
            <v-list-item-title class="popup-text">General Info</v-list-item-title>
          </v-list-item>
          <v-list-item @click="setIndex(2)">
            <v-list-item-title class="popup-text">
              Data Health</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div>
      <component :is="selectedComponent" />
    </div>
  </div>
</template>
<script>
import leftPageGeneralInfo from '../viewPages/leftPageGeneralInfo.vue';
import leftPageDatabaseInfo from '../viewPages/leftPageDatabaseInfo.vue';

export default {
  name: 'left-summary',
  components: {
    leftPageGeneralInfo,
    leftPageDatabaseInfo,
  },
  data() {
    return {
      index: 1,
    };
  },
  computed: {
    selectedComponent() {
      switch (this.index) {
        case 1:
          return 'leftPageGeneralInfo';
        case 2:
          return 'leftPageDatabaseInfo';
      }
    },
  },
  methods: {
    setIndex(value) {
      this.index = value;
    },
  },
};
</script>
<style scoped>
.menuSelect {
  display: flex;
  justify-content: space-around;
  font-family: Kdam Thmor Pro, sans-serif;
}
.popup-text {
  font-size: 12px;
}
</style> 