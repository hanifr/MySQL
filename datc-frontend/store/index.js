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
  status: [
    {
      name: "Temperature",

      remarks: "",
    },
    {
      name: "Relative Humidity",

      remarks: "",
    },
  ],
  duration: "Waiting for incoming data",
  durationServer:"Waiting for incoming data",
  server:{
    disc:0,
    temperature:0,
    speed:0
  },
  stations:[
    {
      name:'TID 1',
      description:"Station 1",
      sensors:['tmp', 'rh'],
      sensorData:[
        new sensor('tmp','TMP',0,'°C',25,false, 'tmp'),
        new sensor('rh','RH',0,'%',70,false, 'rh'),
      ],
      warnings:["Offline"],
      remarks:"Waiting for data",
      isHigh:true
    },
    {
      name:'TID 2',
      description:"Station 2",
      sensors:['tmp', 'rh'],
      sensorData:[
        new sensor('tmp','TMP',0,'°C',25,false, 'tmp'),
        new sensor('rh','RH',0,'%',70,false, 'rh'),
      ],
      warnings: ["Offline"],
      remarks:"Waiting for data",
      isHigh:true
    },
    {
      name:'TID 3',
      description:"Station 3",
      sensors:['tmp', 'rh'],
      sensorData:[
        new sensor('tmp','TMP',0,'°C',25,false, 'tmp'),
        new sensor('rh','RH',0,'%',70,false, 'rh'),
      ],
      warnings: ["Offline"],
      remarks:"Waiting for data",
      isHigh:true
    },
    {
      name:'TID 4',
      description:"Station 4",
      sensors:['tmp', 'rh'],
      sensorData:[
        new sensor('tmp','TMP',0,'°C',25,false, 'tmp'),
        new sensor('rh','RH',0,'%',70,false, 'rh'),
      ],
      warnings: ["Offline"],
      remarks:"Waiting for data",
      isHigh:true
    },
    {
      name:'TID 5',
      description:"Station 5",
      sensors:['tmp', 'rh'],
      sensorData:[
        new sensor('tmp','TMP',0,'°C',25,false, 'tmp'),
        new sensor('rh','RH',0,'%',70,false, 'rh'),
      ],
      warnings: ["Offline"],
      remarks:"Waiting for data",
      isHigh:true
    },
    {
      name:'TID 6',
      description:"Station 6",
      sensors:['tmp', 'rh'],
      sensorData:[
        new sensor('tmp','TMP',0,'°C',25,false, 'tmp'),
        new sensor('rh','RH',0,'%',70,false, 'rh'),
      ],
      warnings: ["Offline"],
      remarks:"Waiting for data",
      isHigh:true
    },
  ],
  headers: [
      {
        text: "TID",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "REMARKS", value: "remarks" },
    ],
  trends:{
    current:[[],[],[],[],[]],
    daily:[
      {
        name:"DO",
        max:[],
        min:[],
        avg:[],
        hour:[]
      },
      {
        name:"TEMP",
        max:[],
        min:[],
        avg:[],
        hour:[]
      },
      {
        name:"PH",
        max:[],
        min:[],
        avg:[],
        hour:[]
      },
      {
        name:"DD",
        max:[],
        min:[],
        avg:[],
        hour:[]
      },
      {
        name:"NH3",
        max:[],
        min:[],
        avg:[],
        hour:[]
      }
  ],
   weekly:[
          {
          name:"DO",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"TEMP",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"PH",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"DD",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          day:[]
        }
        ],
        monthly:[
          {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
        ]
  },
  arrayTime:[[]],
  cards:[
    {
    description: "Station",
    icon: "mdi mdi-map-marker-radius icon",
    number: "4",
    cols: 4,
    class: "primary",
    data:6
    },
    {
    description: "Online",
    icon: "mdi mdi-checkbox-multiple-marked icon",
    number: "4",
    cols: 4,
    class: "success",
    data:0
    },
    {
    description: "Warnings",
    icon: "mdi mdi-alert-rhombus-outline icon",
    number: 0,
    cols: 4,
    class: "error",
    data:0
    }
  ],
  admin:{
    allUser:[],
    allUserTopic:[]
  },
  sensorEndpoint: 'https://nr.txio.live/sensor/',
  sensorQueryEndpoint: 'https://nr.txio.live/api/query'
});


export const mutations = {
  countOnline(state,payload){
    const items = payload.data
    console.log(items)
    let number=0;
    number = number + state.items[0].warnings.length
    state.cards[1].data=number
  },
  countWarning(state,payload){
    let number=0;
    const indexStation=payload.indexStation
    number=number + state.stations[indexStation].warnings.length
    state.cards[2].data=number
  },

  getData(state,payload){
    const data=payload.data
    const TID = payload.TID
    const indexStation=payload.indexStation
    const indexSensor=payload.indexSensor
    for(let i = 0; i<indexSensor; i++){
      state.stations[indexStation].sensorData[i].data=data[i]
    }
    state.stations[indexStation].name = TID
    // console.log(state.stations[1].name)
    // console.log(state.stations[indexStation].sensorData[0].data) 
  },
  checkWarning3(state, payload){ 
    const LowTMP = 22;
    const HighTMP = 27;
    const LowRH = 40;     //World lower bound, for Malaysia is 50
    const HighRH = 70;    //Malaysia threshold
    const indexStation = payload.indexStation
    const data = payload.data
    console.log(data)
    if(data[0]>HighTMP && data[1]>HighRH){
      state.stations[indexStation].warnings.push(' HIGH TEMPERATURE & RH')
      state.stations[indexStation].remarks = state.stations[indexStation].warnings.toString()
      state.stations[indexStation].isHigh=true
      return
    }
    if(data[0]<LowTMP && data[1]<LowRH){
      state.stations[indexStation].warnings.push(' LOW TEMPERATURE & RH')
      state.stations[indexStation].remarks = state.stations[indexStation].warnings.toString()
      state.stations[indexStation].isHigh=true
      return
    }
    if(data[0]<LowTMP && data[1]>HighRH){
      state.stations[indexStation].warnings.push(' LOW TEMPERATURE BUT HIGH RH')
      state.stations[indexStation].remarks = state.stations[indexStation].warnings.toString()
      state.stations[indexStation].isHigh=true
      return
    }
    if(data[0]>HighTMP && data[1]<LowRH){
      state.stations[indexStation].warnings.push(' HIGH TEMPERATURE BUT LOW HUMIDITY')
      state.stations[indexStation].remarks = state.stations[indexStation].warnings.toString()
      state.stations[indexStation].isHigh=true
      return
    }
    if(data[0]>LowTMP && data[0]<HighTMP && data[1]<LowRH){
      state.stations[indexStation].warnings.push(' LOW HUMIDITY')
      state.stations[indexStation].remarks = state.stations[indexStation].warnings.toString()
      state.stations[indexStation].isHigh=true
      return
    }
    if(data[0]>LowTMP && data[0]<HighTMP && data[1]>HighRH){
      state.stations[indexStation].warnings.push(' HIGH HUMIDITY')
      state.stations[indexStation].remarks = state.stations[indexStation].warnings.toString()
      state.stations[indexStation].isHigh=true
      return
    }
    if(data[0]<LowTMP && data[0]>LowRH && data[1]<HighRH){
      state.stations[indexStation].warnings.push(' LOW TEMPERATURE')
      state.stations[indexStation].remarks = state.stations[indexStation].warnings.toString()
      state.stations[indexStation].isHigh=true
      return
    }
    if(data[0]>HighTMP && data[0]>LowRH && data[1]<HighRH){
      state.stations[indexStation].warnings.push(' HIGH TEMPERATURE')
      state.stations[indexStation].remarks = state.stations[indexStation].warnings.toString()
      state.stations[indexStation].isHigh=true
      return
    }
      state.stations[indexStation].isHigh=false
      state.stations[indexStation].warnings.push(' ALL GOOD')
      state.stations[indexStation].remarks = state.stations[indexStation].warnings.toString()
  },
  clearWarningRemarks(state, payload){
    const indexStation = payload
    state.stations[indexStation].warnings=[]
  },
  getServerHealth(state, payload){
    let data = JSON.parse(payload)
    if(data.temperature){
    state.server.disc = data.disc;
    state.server.temperature = data.temperature;
    // console.log(state.server.temperature)
    state.server.speed = data.speed
  }
  },

  getDurationServer(state,payload){
    let duration=payload;
    // console.log(payload)
    if (duration==0){
      duration="just now"
    }else if(duration==1){
      duration=`${duration} minute ago`
    }
    else 
    {
      duration=`${duration} minutes ago`
    }
    state.durationServer=`Updated ${duration}`
  },

  getDuration(state,payload){
    let duration=payload;
    if (duration==0){
      duration="just now"
    }else if(duration==1){
      duration=`${duration} minute ago`
    }
    else 
    {
      duration=`${duration} minutes ago`
    }
    state.duration=`Updated ${duration}`
    // console.log(duration)
    // state.time=new Date()
  },

  //Insert data into array for current trend
  getCurrentDataArray(state,payload,){
    let sensor=payload.sensor;
    // let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;

    if(state.trends.current[indexSensor].length<10){
      if( sensor=='do_val'){
        state.trends.current[indexSensor].push(state.items[0].DO)
      }
      if( sensor=='tmp_val'){
        state.trends.current[indexSensor].push(state.items[0].TEMP)
      }
      if( sensor=='ph_val'){
        state.trends.current[indexSensor].push(state.items[0].PH)
      }
      if( sensor=='dd_val'){
        state.trends.current[indexSensor].push(state.items[0].DD)
      }
      if( sensor=='dg_val'){
        state.trends.current[indexSensor].push(state.items[0].NH3)
      }
    }else{
      if( sensor=='do_val'){
      state.trends.current[indexSensor].splice(0, 1);
      state.trends.current[indexSensor].push(state.items[0].DO)
      }
      if( sensor=='tmp_val'){
        state.trends.current[indexSensor].splice(0, 1);
        state.trends.current[indexSensor].push(state.items[0].TEMP)
      }
      if( sensor=='ph_val'){
        state.trends.current[indexSensor].splice(0, 1);
        state.trends.current[indexSensor].push(state.items[0].PH)
      }
      if( sensor=='dd_val'){
        state.trends.current[indexSensor].splice(0, 1);
        state.trends.current[indexSensor].push(state.items[0].DD)
      }
      if( sensor=='dg_val'){
        state.trends.current[indexSensor].splice(0, 1);
        state.trends.current[indexSensor].push(state.items[0].NH3)
      } 
    }
  },

  //Insert array time for current trend
  getCurrentTimeArray(state,payload){
    if (state.arrayTime[payload.index].length < 10) {
      state.arrayTime[payload.index].push(payload.realTime);
    } else {
      state.arrayTime[payload.index].splice(0, 1);
      state.arrayTime[payload.index].push(payload.realTime);
    }
  },

  // Daily
  getDaily(state,payload){

    // let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;
    let data=payload;
    
    state.trends.daily[indexSensor].min=data.min;
    state.trends.daily[indexSensor].max=data.max;
    state.trends.daily[indexSensor].avg=data.avg;
    state.trends.daily[indexSensor].hour=data.hour
  },

  // Weekly
  getWeekly(state,payload){
    // let indexStation=payload.indexStation;
    // console.log(payload)
    let indexSensor=payload.indexSensor;
    let data=payload;
    state.trends.weekly[indexSensor].min=data.min;
    state.trends.weekly[indexSensor].max=data.max;
    state.trends.weekly[indexSensor].avg=data.avg;
    state.trends.weekly[indexSensor].day=data.day
  },

  // Monthly
  getMonthly(state,payload){
    // console.log(payload.min)
    let indexSensor=payload.indexSensor;
    let data=payload;
    // console.log(state.trends.monthly[0].min)
    state.trends.monthly[indexSensor].min=data.min;
    state.trends.monthly[indexSensor].max=data.max;
    state.trends.monthly[indexSensor].avg=data.avg;
    state.trends.monthly[indexSensor].monthName=data.monthName;
  },
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

