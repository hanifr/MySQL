<template>
    <div class="temperature-humidity">
        <v-card-title class="headline">
            <h6>Sensor Status</h6>
        </v-card-title>
              <div colspan="4" class="note">
                <ul>
                  <li><span class="custom-cell text-orange">Orange: Offline or not reporting data</span></li>
                  <li><span class="custom-cell text-green">Green: Online and reporting data</span></li>
                </ul>
            </div>
    </div>
  </template>
    
    <script>
    export default {
      name: "SensorStatus",
    };
    </script>
    
  <style scoped>
  .temperature-humidity {
    margin: 0.2rem;
  }
  .headline {
    color:#FBC02D;
    text-align: center; 
    line-height: 1.5;
    /* margin-bottom: 5px; */
}
  .custom-cell {
      font-size: small;
      text-align: left;
    }
  .note {
      font-size: small;
      font-weight: bold;
      /* text-align: justify; */
  }
  .text-green {
  color: #09ff00;
  font-weight: bold;
}

  .text-orange {
    color: #EF6C00;
    font-weight: bold;
  }
    </style>
    