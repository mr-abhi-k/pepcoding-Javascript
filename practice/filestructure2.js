let fs=require("fs")
let path=require("path")

let input=process.argv.slice(2)
let maindir=input[0]

let cwd=process.cwd()
let main_dir=path.join(cwd,maindir)

let isexist=fs.existsSync(main_dir)
if(isexist)
{
    console.log("file is already there")
    return;
}
else
{
    console.log(maindir,"created")
    fs.mkdirSync(main_dir)

    let restfiles=input.slice(1)
    for(let i=0;i<restfiles.length;i++)
    {
        let ftopic=i+" "+restfiles[i]
        console.log(ftopic)
        let ftopicpath=path.join(main_dir,ftopic)
        console.log("file topic ",ftopic,"created")
        fs.mkdirSync(ftopicpath)
        

    }
}