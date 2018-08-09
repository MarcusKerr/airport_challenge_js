var Weather = function(){
  this._CHANCEOFWEATHER = 0.5;
}

Weather.prototype.isStormy = function(){
  return ( Math.random() > this._CHANCEOFWEATHER );
};