function fn()
{
    let rVal=fn1()
    console.log(rVal)
    console.log("I am function")
    return "Hello"
}

function fn1()
{
    console.log("I am fn1")
    return 10;
}

let tempArr=[1,2,3,15,5]
let temp1Arr=tempArr
let arr=[
    1,true,1.1,"string",null,temp1Arr,fn
]

console.log("2dArray", arr[arr.length-2])
console.log("access the last element", arr[arr.length-1])
console.log("call the last element",arr[arr.length]())