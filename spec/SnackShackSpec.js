describe("SnackShack", function() {
  var snackShack;

  beforeEach(function() {
    snackShack = new SnackShack();
  });

  describe("snackShack.queue", function() {
    it("starts empty", function() {
      expect(snackShack.queue).toEqual([]);
    });
  });
});
