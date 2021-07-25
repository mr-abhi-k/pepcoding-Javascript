function processData(input)
{
    //Enter your code here
    let arr=input.split(" ")
    let newstring=""
    for(let i=0;i<arr.length;i++)
        {
            let ch=arr[i].charAt(0).toUpperCase()
            arr[i]=ch+arr[i].substring(1) 
        }
    newstring=arr.join(" ")
    console.log(newstring)
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