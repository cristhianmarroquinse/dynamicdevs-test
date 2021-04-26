const algorithmTestA = require('../src/algorithmTestA');

describe('algorithmTestA', () => {

  //Test exceptions
  it('should transform an string', () => {
    expect(algorithmTestA('nñz')).toBe('ñoa')
  })

  //Test basic example 1
  it('should transform an string', () => {
    expect(algorithmTestA('123 abcd*3')).toBe('123 bcde*3')
  })

  //Test basic example 2
  it('should transform an string', () => {
    expect(algorithmTestA('**Casa 52')).toBe('**Cbtb 52')
  })

})