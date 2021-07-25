//implementation ->files
//files -> read/write/update/delete

let fs=require("fs") //to get this module for filesystem
//readFileSync :for reading
let content=fs.readFileSync("test1.txt")
//buffer ->video, audio, text
//console.log("content: ", content)  //prints in buffer format *********
//+-> concatinate ->string =>text
console.log("content :" +content)
//write ->writeFileSync
//file doesn't exist ->file create, content put
//file doesn't exit ->content override
fs.writeFileSync("test2.txt", "Eryx is op")
//append
fs.appendFileSync("test2.txt","Eryx is too gud")
//delete a file 
//fs.unlinkSync("test2.txt")
console.log("file removed")
