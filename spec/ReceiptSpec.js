describe('receipt', function() {

  var receipt;

  beforeEach(function() {
    receipt = new Receipt();
    cafeInfo = {
      "shopName": "The Coffee Connection",
      "address": "123 Lakeside Way",
      "phone": "16503600708",
    }
  });

  it('has the cafe info stored', function() {
    expect(receipt._cafeInfo).toEqual(cafeInfo)
  })

});
