let input=process.argv.slice(2)
let filename=input[0]
let path=input[1]

let treepath=require("./command/tree")
let orgpath=require("./command/organize")
let helppath=require("./command/help")

if(filename ==="tree")
{
    console.log(treepath.treeprint())
}
else if(filename ==="organize")
{
    console.log(orgpath.orgprint(path))
}
else if(filename ==="help")
{
    console.log(helppath.helpprint())
}