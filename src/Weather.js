var Weather = function(){

}

Weather.prototype.generate = function(){
  var weatherCondition = ["Stormy", "Sunny"];
  return weatherCondition[Math.floor ( Math.random() * weatherCondition.length )];
};