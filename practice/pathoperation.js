const { fstat } = require("fs")
let path=require("path")
let fs =require("fs")

let input=process.argv.slice(2)
let filename=input[0]
let content=input[1]
console.log("filename :",filename)
console.log("content :", content)

let currentpath=process.cwd()
console.log(currentpath)

let joinedpath=path.join(currentpath,"my directory",filename)
console.log("joinedpath",joinedpath)

fs.writeFileSync(joinedpath,content)