describe('till', function() {

  var till;

  beforeEach(function() {
    till = new Till();
  });

  it('knows the current order, which is empty by default', function() {
    expect(till._currentOrder).toEqual([])
  });

  it("can add an item to current order", function() {
    till.addItem("Cortado")
    expect(till._currentOrder[0].name).toEqual('Cortado')
  });

});
