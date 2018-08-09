
var Airport = function(weather){
  this.hangar = [];
  this.weather = typeof weather !== 'undefined' ? weather : new Weather();
} 

Airport.prototype.land = function(plane){
 if(this.weather.isStormy()){
   throw new Error("Cannot land due to stormy weather")
 }
this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane){
  if (this.hangar.includes(plane)) {
    if(this.weather.isStormy()){
      throw new Error("Cannot takeoff due to stormy weather")
    }
    this.hangar.splice(this.hangar.indexOf(plane), 1);
    return "Plane has left the building";
  } 
  throw new Error("Plane is not in airport");
}; 
