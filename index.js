// Developed By Harshil Kaneria
var UniqueStringGenerator = () => {
    return Buffer.from((Math.floor(Math.random() * 1000) + 1).toString()+"_"+Date.now()+"_"+(Math.floor(Math.random() * 1000) + 1).toString()).toString('base64'); // Basically This is Return Encoding in Base64 of RandomNumber(1-1000)+"_"+CurrentTimeInMilliSecond +"_"+RandomNumber(1-1000)
}; 

module.exports = UniqueStringGenerator;
