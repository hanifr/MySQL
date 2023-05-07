<template>
    <div v-if="$vuetify.breakpoint.smAndUp"
      class="container"
    >
    <div>
      <input 
      class="neono"
      style="width: 10vw; height: 5vh; font-size: 1.05em; color: #81f7da;"
      v-model="tid" 
      placeholder="Insert TID" />
    </div>
        <v-divider horizontal></v-divider>
      <v-btn
        @click="node1"
        class="neon"
        style="width: 4vw; height: 5vh; font-size: 1em"
        >go</v-btn
      >
    </div>

    <div v-else
      style="display: flex; justify-content: space-around; align-items: center"
    >
    <div>
      <input 
      class="neono"
      style="width: 100px; height: 40px; font-size: 1.05em; color: #81f7da; margin-left: 40px;"
      v-model="tid" 
      placeholder="Insert TID" />
    </div>
        <v-divider horizontal></v-divider>
      <v-btn
        @click="node1"
        class="neon"
        style="width: 50px; height: 40px; font-size: 1em"
        >go</v-btn
      >
    </div>
  </template>
  
  <script>
  import mqtt from "mqtt";
  // import { useState } from '../composables/state';
  export default {
    data() {
      return {
        connection: {
          host: "zr.txio.live",
          port: 8888,
          // port: 8083,
          endpoint: "/mqtt",
          clean: true, // Reserved session
          connectTimeout: 4000, // Time out
          reconnectPeriod: 4000, // Reconnection interval
        },
        subscription: {
          // topic: "geyzer/#",
          topic: "ea/datc/#",
          qos: 0,
        },
        receiveNews: "",
        qosList: [
          { label: 0, value: 0 },
          { label: 1, value: 1 },
          { label: 2, value: 2 },
        ],
        client: {
          connected: false,
        },
        subscribeSuccess: false,
        tid: ''
      };
    },
    methods: {
      node1: function () {
        this.client.publish("ea/datc/s/req", this.tid);
        console.log(this.tid)
      },
      createConnection() {
        const { host, port, endpoint, ...options } = this.connection;
        const connectUrl = `wss://${host}:${port}${endpoint}`;
        try {
          this.client = mqtt.connect(connectUrl, options);
        } catch (error) {
          console.log("mqtt.connect error", error);
        }
        this.client.on("connect", () => {
          console.log("Connection succeeded!");
        });
        this.client.on("error", (error) => {
          console.log("Connection failed", error);
        });
        this.client.on("message", (topic, message) => {});
      },
      doSubscribe() {
        const { topic, qos } = this.subscription;
        this.client.subscribe(topic, { qos }, (error, res) => {
          if (error) {
            return;
          }
          this.subscribeSuccess = true;
        });
      },
    },
    async mounted() {
      this.createConnection();
      this.doSubscribe();
    },
  };
  </script>
  
  <style>
  :root {
    --clr-neon: #14f7ff;
    --clr-bg: #001414;
    --font-size: 3rem;
  }
  .v-btn__content {
    white-space: normal;
    flex: unset !important;
  }
  a {
    text-decoration: none;
  }
  </style>
  <style scoped>
  .container {
    display: flex; 
    justify-content: space-around; 
    align-items: center
  }
  .neon {
    /* margin-top: -150px; */
    font-size: var(--font-size);
    display: inline-block;
    position: relative;
    cursor: pointer;
    border: var(--clr-neon) 0.125em solid;
  
    padding: 0.25em 1em;
    border-radius: 0.25em;
    text-shadow: 0 0 0.2em #fff7, 0 0 0.3em var(--clr-neon);
    box-shadow: inset 0 0 0.5em var(--clr-neon), 0 0 0.5em var(--clr-neon);
  }
  
  .neono {
    /* margin-top: -150px; */
    font-size: var(--font-size);
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding: 0.25em 1em;
    border-radius: 0.25em;
    box-shadow: inset 0 0 0.5em var(--clr-neon), 0 0 0.5em var(--clr-neon);
  }
  .neon::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-neon);
    transform: perspective(0.2em) rotateX(10deg) scale(1.3, 0.4);
    filter: blur(0.5em);
    opacity: 0.6;
    pointer-events: none;
    transition: opacity 100ms linear;
  }
  
  .neon::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--clr-neon);
    box-shadow: 0 0 2em var(--clr-neon);
    z-index: -1;
    opacity: 0;
    transition: opacity 100ms linear;
  }
  .neon:hover::after {
    opacity: 1;
  }
  .neon:hover,
  .neon:focus {
    color: white;
  }
  .neon:hover::before {
    opacity: 0.8;
  }
  </style>
  