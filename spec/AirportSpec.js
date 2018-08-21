'use strict'
describe("Airport", function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpy('Plane');
    weather = jasmine.createSpyObj('Weather', ['isStormy'])
    airport = new Airport();
  });

  describe("landing a plane", function() {
    it("adds plane to hangar", function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(false);
      airport.land(plane);
      expect(airport.getPlanes()).toContain(plane);
    });

    it("does not land the same plane twice", function(){
      spyOn(airport.weather, 'isStormy').and.returnValue(false);
      airport.land(plane)
      expect( function () { airport.land(plane); }).toThrowError(`${plane} has already landed`)
    });

    it('prevents a plane from landing in stormy conditions', function (){
      spyOn(airport.weather, 'isStormy').and.returnValue(true);
      expect( function() { airport.land(plane); }).toThrowError(`${plane} cannot land due to stormy weather`);
    });
  });

  describe("takeoff", function() {
    it("makes a plane depart from the airport", function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(false);
      airport.land(plane);
      expect(airport.takeoff(plane)).toEqual(`${plane} has taken off`);
      expect(airport.getPlanes()).not.toContain(plane);
    });

    it('throws an error if plane is not in hangar', function(){
      expect( function() {airport.takeoff(plane); }).toThrowError(`${plane} is not in airport`);
    });

    it('throws error if weather is stormy when takeoff called', function(){
      airport.hangar.push(plane);
      spyOn(airport.weather, 'isStormy').and.returnValue(true);
      expect( function() {airport.takeoff(plane); }).toThrowError(`${plane} cannot takeoff due to stormy weather`);
    });
  });

  describe("maxCapacity", function(){
    it("does not allow planes to land once max xapacity has been reached", function(){
      spyOn(airport.weather, 'isStormy').and.returnValue(false);
      for(var i = 0; i < 5; i++) {
        plane = new Plane();
        airport.land(plane);
      }
      var p6 = new Plane();
      expect(function(){ airport.land(p6)}).toThrowError("Cannot land, maximum capacity has been reached")
    });
  });
});