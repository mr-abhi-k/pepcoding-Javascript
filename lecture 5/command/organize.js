let fs=require("fs")
let path=require("path")

let types = 
{
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function sendingfile(srcpath,destpath,category)
{
    let existcategory=fs.existsSync(category)
    if(existcategory==="false")
    {
        fs.mkdirSync(destpath,category)
    }
    destpath=path.join(destpath,category)
    let fileName = path.basename(srcpath);
    let destFilePath = path.join(destpath, fileName);
    fs.copyFileSync(srcpath,destFilePath)
    fs.unlinkSync(srcpath)
    console.log(fileName,"copied to",category)
}

function print(src)
{
    console.log("organize command executed with path :"+src)
    let srcpath=src
    let destpath=path.join(src,"organized_files")
    fs.mkdirSync(destpath)
    let allentity=fs.readdirSync(srcpath)
    for(let i=0;i<allentity.length;i++)
    {
        let srcfilepath=path.join(srcpath,allentity[i]) //got file address

        let extname=path.extname(allentity[i])
        extname=extname.slice(1) //for removing dot

        for(let j=0;j<types.length;j++)
        {
            for(let k=0;k<types[j].length;k++)
            {
                if(extname==types[j][k])
                {
                    sendingfile(srcfilepath,destpath,types[j])
                }
            }
        }
    }
}

module.exports={
    orgprint:print
}