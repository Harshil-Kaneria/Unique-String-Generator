# Unique-String-Generator

The Unique String Generator is a JavaScript package that generates a random string, number or ID that is almost 100% unique each time it's called. It can be used for a variety of purposes such as one-time sessions, email verification, pre-user IDs, activation codes, and more. Recetly we are adding full support of [uuid](https://www.npmjs.com/package/uuid) world best library for ids with in this library.

***
## Playground / Demo / Home page

[https://unique-string-generator.vercel.app](https://unique-string-generator.vercel.app)

***
## Why You Can Use This

- Does Not Matter How Many User Users You Have This Function Generate All Time New String.

- You Can Use This Package on The Server Side as Well as The Client Side.

***
## Where You Can Use This

- You Can Use this for multi-purpose like a one-time session, email verification, preuserid , activation code, and many more applications.

***
## Notice

- UniqueOTP and UniqueCharOTP function is recently added and this both function is not generate 99.9% Unique because of some limitation but you can use as OTP & 2FA Purpose.

***
## Installation

```bash
$ npm install unique-string-generator
```

***
## Usage

```javascript
const { UniqueString, UniqueNumber, UniqueStringId,UniqueNumberId,UniqueOTP,UniqueCharOTP,HEXColor,uuid } = require('unique-string-generator');

UniqueString() // ODgyXzE2Nzk1MDQyMDcxNDZfNDkx 
UniqueNumber() // 9861679504207152802 
UniqueStringId() // MzUz-MTY3OTUwNDIwNzE1Mg==-OTU3 
UniqueNumberId() // 613-1679504207152-896 
UniqueOTP() // 741187 
UniqueOTP(4) // 9298 
UniqueCharOTP() // KKOEGR 
UniqueCharOTP(4) // QCOS 
HEXColor() // #314511
HEXColor(true) // 687e61
uuid.v4() // 772716b8-e6e2-47ac-95e9-e8d99ce35124
uuid.validate(uuid.v4()) // true

```

```javascript
import { UniqueString, UniqueNumber, UniqueStringId,UniqueNumberId,UniqueOTP,UniqueCharOTP,HEXColor,uuid } from 'unique-string-generator';

UniqueString() // ODgyXzE2Nzk1MDQyMDcxNDZfNDkx 
UniqueNumber() // 9861679504207152802 
UniqueStringId() // MzUz-MTY3OTUwNDIwNzE1Mg==-OTU3 
UniqueNumberId() // 613-1679504207152-896 
UniqueOTP() // 741187 
UniqueOTP(4) // 9298 
UniqueCharOTP() // KKOEGR 
UniqueCharOTP(4) // QCOS 
HEXColor() // #314511
HEXColor(true) // 687e61
uuid.v4() // 772716b8-e6e2-47ac-95e9-e8d99ce35124
uuid.validate(uuid.v4()) // true

```

***
## License

[MIT](LICENSE)

***