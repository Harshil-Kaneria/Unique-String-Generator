// Developed By Harshil Kaneria
const {Base64} = require('js-base64');

// Random Number Generator
const RandomNumber = () => (Math.floor(Math.random() * 1000) + 1)

// Basically This is Return Encoding in Base64 of RandomNumber(1-1000)+"_"+CurrentTimeInMilliSecond +"_"+RandomNumber(1-1000)
const UniqueString = () => Base64.encode(`${RandomNumber()}_${Date.now()}_${RandomNumber()}`)

// Basically This is Return RandomNumber(1-1000)+CurrentTimeInMilliSecond+RandomNumber(1-1000)
const UniqueNumber = () => `${RandomNumber()}${Date.now()}${RandomNumber()}`

// Basically This is Return Encoding in Base64 of RandomNumber(1-1000)+"-"+Encoding in Base64 of CurrentTimeInMilliSecond +"-"+Encoding in Base64 of RandomNumber(1-1000)
const UniqueStringId = () => Base64.encode(`${RandomNumber()}`)+"-"+Base64.encode(`${Date.now()}`)+"-"+Base64.encode(`${RandomNumber()}`) 

// Basically This is Return RandomNumber(1-1000)+"-"+CurrentTimeInMilliSecond +"-"+RandomNumber(1-1000)
const UniqueNumberId = () => `${RandomNumber()}-${Date.now()}-${RandomNumber()}` 

module.exports = {UniqueString,UniqueNumber,UniqueStringId,UniqueNumberId};