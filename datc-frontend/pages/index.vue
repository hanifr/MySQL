<template>
  <div v-if="isSMAndUp" style="display: flex">
    <div style="width: 60vw; height: 100vh">
      <card-station-current class="mb-7 mt-3" />
    </div>
    <div style="width: 40vw; height: 100vh" class="mx-2">
      <div class="mt-3">
        <Collaborators />
      </div>
      <div class="mt-14">
        <Table />
      </div>
    </div>
  </div>
  <div v-else>
    <CollaboratorSmall />
    <div class="mt-12">
      <CardStationCurrentMobile />
      </div>
    <TableSmall />
  </div>
</template>

<script>
import CardStationCurrent from "~/components/current/Desktop/CardStationCurrent.vue";
import CardStationCurrentMobile from "~/components/current/Mobile/CardStationCurrentMobile.vue";
import Table from "~/components/current/Desktop/Table.vue";
import TableSmall from "~/components/current/Mobile/TableMobile.vue";
import Collaborators from "~/components/current/Desktop/Collaborators.vue";
import CollaboratorSmall from "~/components/current/Mobile/CollaboratorsMobile.vue";
// import { mapState, mapGetters } from "vuex";

export default {
  components: {
    CardStationCurrent,
    CardStationCurrentMobile,
    Table,
    TableSmall,
    Collaborators,
    CollaboratorSmall
  },
  computed: {
    isSMAndUp() {
      return this.$vuetify.breakpoint.smAndUp;
    },
    // ...mapState({
    //   items: (state) => state.items,
    //   cards: (state) => state.cards,
    //   stations: (state) => state.stations,
    // }),
    // ...mapGetters(["loggedInUser"]),
  },
};
</script>
