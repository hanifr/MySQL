<template>
    <div class="mt-5">
      <v-menu right offset-y>
        <template #activator="{ on }">
          <v-btn v-on="on" color="#01579B" style="display: inline-block; float: right;" class="mt-3">
            <h6>{{ selectedComponentText }}</h6>
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="component in components" :key="component.value" @click="selectedComponent = component.value">
            <v-list-item-title>{{ component.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <component :is="selectedComponent" />
    </div>
  </template>
  
  <script>
  import RawDataQuery from './RawDataQuery.vue'
  import UltrasonicRawDataQuery from './UltrasonicRawDataQuery.vue'
  
  export default {
    name: "DataQueryPage",
    components: {
      RawDataQuery,
      UltrasonicRawDataQuery
    },
    data() {
      return {
        selectedComponent: "RawDataQuery",
        components: [
          { text: "Thermal", value: "RawDataQuery" },
          { text: "Ultrasonic", value: "UltrasonicRawDataQuery" },
        ],
      };
    },
    computed: {
      selectedComponentText() {
        const component = this.components.find(c => c.value === this.selectedComponent);
        return component ? component.text : "";
      },
    },
  };
  </script>
  
  <style scoped>
  .small-text .v-menu__content {
    font-size: 12px;
  }
  </style>
  