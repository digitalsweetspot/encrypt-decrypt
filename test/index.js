const assert = require('assert')
const encrypt_decrypt = require('../lib/index')

describe('encryption test', () => {
  it('should encrypt a string', done => {
    const encrytDecrypt = new encrypt_decrypt({
      key: 'someReallyLongStringToUseAsAKey!',
      iv: 'nonceString4Key!'
    })
    const encStr = encrytDecrypt.encrypt('Hello World!')
    assert(encStr === '65f1702da3ac2e2d28e4a972d3b955a4')
    done()
  })
})

describe('decryption test', () => {
  it('should encrypt a string', done => {
    const encrytDecrypt = new encrypt_decrypt({
      key: 'someReallyLongStringToUseAsAKey!',
      iv: 'nonceString4Key!'
    })
    const encStr = encrytDecrypt.decrypt('65f1702da3ac2e2d28e4a972d3b955a4')
    assert(encStr === 'Hello World!')
    done()
  })
})
