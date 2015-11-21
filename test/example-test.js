var expect = require('expect.js');


describe('dummy test', function() {
  it('should pass', function(){
    expect(1).to.be(2)
    throw "I'm bad"
  })
})
