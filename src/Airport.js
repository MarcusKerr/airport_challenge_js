// var hangarx = []

var Airport = function(){
  this.hangar = [];
}

Airport.prototype.land = function(plane){
  this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane){
  this.hangar.splice(this.hangar.indexOf(plane), 1);
  return "Plane has left the building or some shit";
};

fail "a string" if fdnfkdsnk 
