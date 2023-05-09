<template>
    <div class="temperature-humidity">
        <div colspan="4" class="note">
            <p style="color:#0091EA"><strong>Temperature</strong></p>
                <ul>
                  <li><span class="custom-cell tmp-low">Too Cold: &lt; 15°C</span></li>
                  <li><span class="custom-cell tmp-good">Ideal: between 15°C and 24°C</span></li>
                  <li><span class="custom-cell tmp-high">Too Hot: &gt; 24°C</span></li>
                </ul>
        </div>
        <div colspan="4" class="mt-2 note">
            <p style="color:#0091EA"><strong>Moisture Contents</strong></p>
                <ul>
                  <li><span class="custom-cell rh-low">Too Dry: &lt; 25%</span></li>
                  <li><span class="custom-cell rh-good">Ideal: between 25% and 50%</span></li>
                  <li><span class="custom-cell rh-high">Too Humid: &gt; 50%</span></li>
                </ul>
        </div>
    </div>
  </template>
    
  <script>
    export default {
      name: "DataStatus",
    };
    </script>
    
  <style scoped>
  .temperature-humidity {
    margin: 0.2rem;
  
  }
  .tmp-low {
      color: #84FFFF;
  }
  .tmp-good, .rh-good {
      color: #C6FF00;
  }
  .tmp-high {
      color: #FF5252;
  }
  .rh-low {
      color: #FBC02D;
      font-weight: bold;
  }
  .rh-high {
      color: #B388FF;
      
  }
  .custom-cell {
      font-size: small;
      text-align: center;
    }
  .note {
      font-size: small;
      font-weight: bold;
      /* text-align: justify; */
  }
    </style>
    