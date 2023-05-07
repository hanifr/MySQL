export class sensor{
    constructor(id, description, data, unit, max, isHigh, classIn){
      this.id = id,
      this.description = description,
      this.data = data,
      this.unit = unit,
      this.max = max,
      this.isHigh = isHigh,
      this.class = classIn,
      this.current = []
    }
    toJSON(){
      return{
        id : this.id,
        description : this.description,
        data : this.data,
        unit : this.unit,
        max : this.max,
        isHigh : this.isHigh,
        class: this.class,
      }
    }
  }
  
  export class status{
    constructor(name, remarks){
      this.name = name,
      this.remarks = remarks
    }
    toJSON(){
      return{
        name: this.name,
        remarks : this.remarks
      }
    }
  }
  