describe("Sandwich", function() {
  var sandwich;

  beforeEach(function() {
    sandwich = new Sandwich();
  });

  describe("sandwich.makingTime", function() {
    it("returns 60 seconds", function() {
      expect(sandwich.makingTime).toEqual(60);
    });
  });

  describe("sandwich.servingTime", function() {
    it("returns 30 seconds", function() {
      expect(sandwich.servingTime).toEqual(30);
    });
  });
});
