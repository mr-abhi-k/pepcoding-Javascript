let fs=require("fs")
//fs.mkdirSync("my directory")
//fs.rmdirSync("my directory")
let direxists=fs.existsSync("my directory")
console.log("existence : ", direxists)
let dirstats=fs.lstatSync("my directory")
console.log("stats of dir :", dirstats)

console.log("is file :", dirstats.isFile())
console.log("is dir  :", dirstats.isDirectory())

let address="F:\\Pepcoding\\web dev\\practice\\my directory"
console.log("address :",address)

let content=fs.readdirSync(address)
console.log("content", content)