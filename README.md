# encrypt-decrypt
- - -
This package provides encryption and decryption services.
- - -

## How to install
```
npm install encrypt-decrypt
```

## How to use
```
const encrypt_decrypt = require('encrypt-decrypt')

const encrytDecrypt = new encrypt_decrypt({
  key: 'someReallyLongStringToUseAsAKey!',
  iv: 'nonceString4Key!'
})

const encStr = encrytDecrypt.encrypt('Hello World!')
console.log(encStr) // 65f1702da3ac2e2d28e4a972d3b955a4

const decrStr = encrytDecrypt.decrypt('65f1702da3ac2e2d28e4a972d3b955a4')
console.log(decrStr) // Hello World!
```

### Required Parameters
`key`<br />
_must be 32 characters long_

`iv`<br />
_must be 16 characters long_

### Optional Parameters
`algorithm` [Defaults to _aes-256-cbc_] <br />
_must be one of: aes-128-cbc, aes-192-cbc, aes-256-cbc, aes-128-ctr, aes-192-ctr, aes-256-ctr_

`inputEncoding` [Defaults to _utf8_] <br />
_must be one of: utf8, ascii, latin1_

`outputEncoding` [Defaults to _hex_] <br />
_must be one of: hex, base64, latin1_

## License
[MIT](./LICENSE)
