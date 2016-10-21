describe('till', function() {

  var till;

  beforeEach(function() {
    till = new Till();
  });

  it('knows the current order, which is empty by default', function() {
    expect(till.showCurrentOrder()).toEqual('')
  });

  it("can add an item to current order", function() {
    till.addItem("Cortado")
    expect(till.showCurrentOrder()).toEqual('Cortado')
  });

});
