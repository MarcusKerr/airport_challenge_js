// var hangarx = []

var Airport = function(){
  this.hangar = [];
}

Airport.prototype.land = function(plane){
  this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane){
  if (this.hangar.includes(plane)) {
    this.hangar.splice(this.hangar.indexOf(plane), 1);
    return "Plane has left the building";
  } else {
    throw new Error("Plane is not in airport");
  }
}; 
