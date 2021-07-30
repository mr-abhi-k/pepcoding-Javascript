let fs=require("fs")
let path=require("path")

let types = 
{
    media: ["mp4", "mkv","m4v","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex','ppt'],
    images:['jpg','png','jpeg'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

// 😉 sending files function 🛫🛫🛫🛫🛫
function sendingfile(srcpath,destpath,category)
{
    console.log(srcpath)
    //F:\Pepcoding\web dev\random folder\(McGraw-Hill Forouzan networking series) Behrouz A. Forouzan - Introduction to Cryptography and Network Security-McGraw-Hill Higher Education (2008).pdf
    console.log(destpath)
    //F:\Pepcoding\web dev\random folder\organized_files
    console.log(category)
    //documents

    //😅
    let categorypath=path.join(destpath,category) //creating category path like media,images
    let existcategory=fs.existsSync(categorypath) //checkng for folder
    //console.log(existcategory)

    if(existcategory=="false")
    {
        destpath=path.join(destpath,category)
        fs.mkdirSync(destpath)
    }

    //😁
    //destpath=path.join(destpath,category)
    let fileName = path.basename(srcpath);
    let destFilePath = path.join(destpath, fileName);
    
    fs.copyFileSync(srcpath,destFilePath)
    //fs.copyFileSync("McGraw-Hill Forouzan networking series) Behrouz A. Forouzan - Introduction to Cryptography and Network Security-McGraw-Hill Higher Education (2008).pdf")
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
        //console.log(extname)
        extname=extname.slice(1) //for removing dot
        
        for(let j in types) //this loop is used for objects
        {
            for(let k=0;k<types[j].length;k++)
            {
                //console.log(types[j].length)
                //console.log(types[j][k])
                let temp=types[j][k]
                //console.log(j)
                if(extname === temp)
                {
                    //console.log(extname)
                    //console.log(temp)
                    sendingfile(srcfilepath,destpath,j)
                }
            }
        }
    }
}

module.exports={
    orgprint:print
}