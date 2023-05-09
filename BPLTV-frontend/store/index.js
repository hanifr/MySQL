import { sensor, status } from '~/src/class'
export const state = () => ({
  brand:"nex-plex",
  brandLogo:"EAGLE.png",
  items:[
    {
      TMP:0,
      RH:0,
      warnings:[],
    }
  ],

  admin:{
    allUser:[],
    allUserTopic:[]
  },
  // sensorEndpoint: 'https://nr.txio.live/sensor/',
  // sensorQueryEndpoint: 'https://nr.txio.live/api/query'
  sensorEndpoint: 'http://localhost:1800/sensor/',
  sensorQueryEndpoint: 'http://localhost:1800/api/query/',
  ultrasonicSensorQueryEndpoint: 'http://localhost:1800/ultrasonic/query/',
});


export const mutations = {
 
  updateSensorEndpoint(state, endpoint) {
      state.sensorEndpoint = endpoint;
  },
  updateSensorQueryEndpoint(state, endpoint) {
      state.sensorQueryEndpoint = endpoint;
  },
  //ADMIN
    //all user
  getUserData(state,payload){
    state.admin.allUser=payload
  },
    //all user with topic
  getUserDataWithTopic(state,payload){
    state.admin.allUserTopic=payload
  }
};

