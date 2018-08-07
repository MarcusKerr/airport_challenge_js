describe("Weather", function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });
  

  describe("generates the weather", function(){
    it("and returns stormy", function(){
      spyOn(weather, 'generate').and.returnValue('Stormy');
      expect(weather.generate()).toEqual("Stormy");
    });

    it("and returns sunny", function(){
      spyOn(weather, 'generate').and.returnValue('Sunny');
      expect(weather.generate()).toEqual("Sunny");
    });
  });
});