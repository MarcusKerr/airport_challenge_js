describe("Airport", function(){
  var airport;
  var plane;
  beforeEach(function(){
    plane = new Plane();
    airport = new Airport(); 
  });

  describe("landing a plane", function() {
    it("returns true", function() {
      expect(airport.land(plane)).toBe(true); 
    });
  });
});