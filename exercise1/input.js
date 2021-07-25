//create a file structure using cmds
let fs=require("fs") //to get file system
let path=require("path") //to get path

let input=process.argv.slice(2) //got 'web_dev' 'js' 'browser' 'react'
let newDirectory=fs.mkdirSync(input[0])
let currentpath=process.cwd()
for(let i=1;i<input.size();i++)
{
    
}