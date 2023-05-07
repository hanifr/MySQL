<template>
  <div>
    <v-row class="justify-around">
      <v-col class="timeline-container">
        <v-card-subtitle class="timeline-header">TIMELINE</v-card-subtitle>
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="message in messages"
            :key="message.time"
            :color="message.color"
            small
          >
            <div>
              <div class="font-weight-normal">
                <strong>{{ message.from }}</strong> @{{ message.time }}
              </div>
              <div>{{ message.message }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        from: "Stage 1",
        message: "Stage 1 description",
        time: "10/10/2020",
        color: "deep-purple lighten-1",
      },
      {
        from: "Stage 2",
        message: "Stage 2 description",
        time: "14/10/2020",
        color: "green",
      },
      // {
      //   from: 'Stage 3',
      //   message: 'Stage 3 description',
      //   time: '20/10/2020',
      //   color: 'deep-purple lighten-1',
      // },
      //       {
      //     from: 'Stage 4',
      //     message: 'Stage 4 description',
      //     time: '26/10/2020',
      //     color: 'deep-purple lighten-1',
      //   },
    ],
  }),

  props: ["station"],
};
</script>

<style scoped>
.col-5 {
  padding: 0;
}
.col {
  padding: 0;
  padding-right: 14px;
}
.card-border {
  border-radius: 8px;
}

.card-color {
  background: rgb(240, 244, 230);
}

.flex-header {
  display: flex;
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.flex-ul {
  display: flex;
}

li {
  padding: 0 10px;
  list-style: none;
}

.timeline-header{
  margin-left:10px
}
</style>
