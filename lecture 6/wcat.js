let fs=require("fs")

let input=process.argv.slice(2)
console.log(input)

//edge case 1:
if(input.length==0)
{
    console.log("Err : file path not found")
    return
}

//first task :
if(input.length==1)
{
    let path=input[0];
    let content=fs.readFileSync(path)
    console.log("File content : \n"+content)
}
else //second task :
{
    for(let i=0;i<input.length;i++)
    {
        let path=input[0]
        let content=fs.readFileSync(path)
        console.log("File content of File ",i," :\n "+content)
        console.log("\n")
    }
}

