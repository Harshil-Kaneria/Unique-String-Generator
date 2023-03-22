# Unique-String-Generator

The Unique String Generator is a JavaScript package that generates a random string, number or ID that is almost 100% unique each time it's called. It can be used for a variety of purposes such as one-time sessions, email verification, pre-user IDs, activation codes, and more.

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
$ npm install unique-string-generator --save
```

***
## Usage

```javascript
const { UniqueString, UniqueNumber, UniqueStringId,UniqueNumberId,UniqueOTP,UniqueCharOTP } = require('unique-string-generator');

console.log(UniqueString()) // ODgyXzE2Nzk1MDQyMDcxNDZfNDkx 
console.log(UniqueNumber()) // 9861679504207152802 
console.log(UniqueStringId()) // MzUz-MTY3OTUwNDIwNzE1Mg==-OTU3 
console.log(UniqueNumberId()) // 613-1679504207152-896 
console.log(UniqueOTP()) // 741187 
console.log(UniqueOTP(4)) // 9298 
console.log(UniqueCharOTP()) // KKOEGR 
console.log(UniqueCharOTP(4)) // QCOS 

```

***
## License

[MIT](LICENSE)

***