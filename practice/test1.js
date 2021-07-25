let fs=require("fs")
let arr=process.argv.slice(2)
let filename=arr[0]
let count=fs.
for(let i=0;i<filename.length();i++)
{
    let stat=fs.lstatSync(filename[i])
    if(stat.isFile())
}