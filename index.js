// Developed By Harshil Kaneria
var UniqueString = () => {
    return Buffer.from((Math.floor(Math.random() * 1000) + 1).toString()+"_"+Date.now()+"_"+(Math.floor(Math.random() * 1000) + 1).toString()).toString('base64'); // Basically This is Return Encoding in Base64 of RandomNumber(1-1000)+"_"+CurrentTimeInMilliSecond +"_"+RandomNumber(1-1000)
};

var UniqueNumber = () => {
    return (Math.floor(Math.random() * 1000) + 1).toString()+Date.now()+(Math.floor(Math.random() * 1000) + 1).toString(); // Basically This is Return RandomNumber(1-1000)+CurrentTimeInMilliSecond+RandomNumber(1-1000)
};

var UniqueStringId = () => {
    return Buffer.from((Math.floor(Math.random() * 1000) + 1).toString()).toString('base64')+"-"+Buffer.from(Date.now().toString()).toString('base64')+"-"+Buffer.from((Math.floor(Math.random() * 1000) + 1).toString()).toString('base64'); // Basically This is Return Encoding in Base64 of RandomNumber(1-1000)+"-"+Encoding in Base64 of CurrentTimeInMilliSecond +"-"+Encoding in Base64 of RandomNumber(1-1000)
};

var UniqueNumberId = () => {
    return (Math.floor(Math.random() * 1000) + 1).toString()+"-"+Date.now()+"-"+(Math.floor(Math.random() * 1000) + 1).toString(); // Basically This is Return RandomNumber(1-1000)+"-"+CurrentTimeInMilliSecond +"-"+RandomNumber(1-1000)
};

module.exports = {UniqueString,UniqueNumber,UniqueStringId,UniqueNumberId};
