# Unique-String-Generator

The Unique String Generator is a JavaScript package that generates a random string, number or ID that is almost 100% unique each time it's called. It can be used for a variety of purposes such as one-time sessions, email verification, pre-user IDs, activation codes, and more.

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
const { UniqueString, UniqueNumber, UniqueStringId,UniqueNumberId,UniqueOTP,UniqueCharOTP } = require('unique-string-generator');

UniqueString() // ODgyXzE2Nzk1MDQyMDcxNDZfNDkx 
UniqueNumber() // 9861679504207152802 
UniqueStringId() // MzUz-MTY3OTUwNDIwNzE1Mg==-OTU3 
UniqueNumberId() // 613-1679504207152-896 
UniqueOTP() // 741187 
UniqueOTP(4) // 9298 
UniqueCharOTP() // KKOEGR 
UniqueCharOTP(4) // QCOS 

```

```javascript
import { UniqueString, UniqueNumber, UniqueStringId,UniqueNumberId,UniqueOTP,UniqueCharOT } from 'unique-string-generator';

UniqueString() // ODgyXzE2Nzk1MDQyMDcxNDZfNDkx 
UniqueNumber() // 9861679504207152802 
UniqueStringId() // MzUz-MTY3OTUwNDIwNzE1Mg==-OTU3 
UniqueNumberId() // 613-1679504207152-896 
UniqueOTP() // 741187 
UniqueOTP(4) // 9298 
UniqueCharOTP() // KKOEGR 
UniqueCharOTP(4) // QCOS 

```

***
## License

[MIT](LICENSE)

***