function processData(input)
{
    //Enter your code here
    let arr=input.split(" ")
    let max=-1
    let maxString=""
    for(let i=0;i<arr.length;i++)
        {
            let str=arr[i]
            if(str.length>max)
                {
                    max=str.length
                    maxString=str
                }
                
        }
    console.log(maxString)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
