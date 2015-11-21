var expect = require('expect.js');


describe('dummy test', function() {
  it('passes', function(){
    expect(1).to.be(1)
  })
})
describe('failing test', function() {
  it('fails', function(){
    expect(1).to.be(2)
  })
})
