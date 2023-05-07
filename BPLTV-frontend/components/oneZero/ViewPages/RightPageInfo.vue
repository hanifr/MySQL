<template>
  <v-card class="temperature-humidity">
    <v-card-title class="headline">
      <h6>Thermal Conformity Info</h6>
    </v-card-title>
    <v-card-subtitle style="color:#00b3ea">
      This guide provides information on thermal comfort levels for people, as well as temperature and moisture comfort levels for trees in soil. This information is provided to help maintain a comfortable indoor temperature for general and warehouse settings, and to help ensure optimal growth and health for trees planted in soil.
    </v-card-subtitle>
      <v-select
      v-model="selectedComponent"
      :items="components"
      label="Select a Description"
      solo
      hide-details
      style="--v-select-field-text-color: #00b3ea; color: #00b3ea"
    >
      <template #prepend>
        <v-icon>mdi-menu</v-icon>
      </template>
    </v-select>
    <component :is="selectedComponent" />
  </v-card>
</template>

<script>
import ThermalStatusInfo from './ThermalStatusInfo.vue'
import ThermalWarehouseInfo from './ThermalWarehouseInfo.vue'
import ThermalSoilInfo from './ThermalSoilInfo.vue';
export default {
  name: "InfoPage",
  components: {
    ThermalWarehouseInfo,
    ThermalStatusInfo,
    ThermalSoilInfo
  },
  data() {
    return {
      selectedComponent: "ThermalStatusInfo",
      components: [
        { text: "Office", value: "ThermalStatusInfo" },
        { text: "Warehouse", value: "ThermalWarehouseInfo" },
        {text: "Soil", value: "ThermalSoilInfo"},
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
  .headline {
      color:#FBC02D;
      text-align: center; 
      line-height: 1.3;
      margin-bottom: 5px;
  }
  .temperature-humidity {
    margin: 0.2rem;
    background-color: transparent !important;
  
  }
  
    </style>
    