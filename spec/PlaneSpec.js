describe('Plane', function(){
  var plane;
  beforeEach(function() {
    plane = new Plane();
  });
  describe('is a plane', function(){
    it('and returns true', function(){
      expect(plane).toEqual(plane);     
    });
  });
});