describe("SnackShack", function() {
  var snackShack;

  beforeEach(function() {
    snackShack = new SnackShack();
    sandwich = new Sandwich();
  });

  describe("snackShack.queue", function() {
    it("starts empty", function() {
      expect(snackShack.queue).toEqual([]);
    });
  });

  describe("snackShack.order", function() {
    it("adds an order to the queue", function() {
      snackShack.order(sandwich);
      expect(snackShack.queue).toEqual([sandwich]);
    });
  });

  describe("snackShack.queueTime", function() {
    it("returns the total time left in queue", function() {
      snackShack.order(sandwich);
      snackShack.order(sandwich);
      expect(snackShack.queueTime()).toEqual(180);
    });
  });
});
