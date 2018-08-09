describe("Weather", function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });
  
  describe("generates the weather", function(){
    it("and returns stormy", function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect(weather.isStormy()).toBeTruthy();
    });

    it("and returns sunny", function(){
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.isStormy()).toBeFalsy();
    });
  });
});