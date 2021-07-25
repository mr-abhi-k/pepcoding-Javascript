let fs=require("fs")
let path=require("path")

let input=process.argv.slice(2)
let maindir=input[0]

let cwd=process.cwd()
console.log("current directory :",cwd)
//let isexist=fs.existsSync(maindir)
//console.log("existence :",isexist)

let main_dir=path.join(cwd,maindir)
console.log("with web_dev :",main_dir)

let ismodulepresent=fs.existsSync(main_dir)
if(ismodulepresent)
{
    console.log("file is already there")
    return ;
}
else
{
    console.log(maindir,"created")
    fs.mkdirSync(main_dir)
    let restfolder=input.slice(1,4)
    for(let i=0;i<restfolder.length;i++)
    {
        let ftitle=restfolder[i]
        let ftopicpath=path.join(main_dir,ftitle)
        console.log(restfolder[i] , "created")
        fs.mkdirSync(ftopicpath)

        for(let j=1;j<=5;j++)
        {
            let modulepath=path.join(ftopicpath,"module"+j)
            console.log("Module"+j,"created inside",restfolder[i])
            fs.mkdirSync(modulepath)
            
            let filepath=path.join(modulepath,"content.md")
            fs.writeFileSync(filepath,"# Hello")
        }
    }
}

