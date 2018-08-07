describe("Airport", function(){
  var airport;
  var plane;
  // var hangar = [];

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe("landing a plane", function() {
    it("radds plane to hangar", function() {
      airport.land(plane);
      expect(airport.hangar).toContain(plane);
    });
  });

  describe("takeoff", function() {
    it("makes a plane depart from the airport", function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.hangar).not.toContain(plane);
    });
  });
});