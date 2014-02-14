
describe('A test suite', function() {

  it('ok function should return true', function () {
    var test = new Test();
    var output = test.ok();

    assert.equal(output, true);
  });

});
