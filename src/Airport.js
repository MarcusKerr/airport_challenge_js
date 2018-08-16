'use strict';
var Airport = function(weather_class = Weather ){
  this.hangar = [];
  this.weather = new weather_class();
} 


Airport.prototype.getPlanes = function(){
  return this.hangar;
}

Airport.prototype.land = function(plane){
  if (this.hangar.includes(plane)){
    throw new Error(`${plane} has already landed`)
  }
  if(this.weather.isStormy()){
    throw new Error(`${plane} cannot land due to stormy weather`)
  }
  this.hangar.push(plane);
  };

Airport.prototype.takeoff = function(plane){
  if (this.hangar.includes(plane)) {
    if(this.weather.isStormy()){
      throw new Error(`${plane} cannot takeoff due to stormy weather`)
    }
    this.hangar.splice(this.hangar.indexOf(plane), 1);
    return `${plane} has taken off`;
  } 
  throw new Error(`${plane} is not in airport`);
}; 
