//take input
let arr=[1,2,3,4,5,6,7,8]
console.log(arr)

//simple loop
for(let i=0;i<arr.length;i++)
{
    console.log(i , " : ", arr[i])
}

//example input
let a=[2,3,6,3,8,9]
console.log("normal array")
console.log(a)
//METHODS
//meth 1 :adds an element at last
console.log("Added at last")
a.push(10)
console.log(a)

//meth 2 :removes from last
console.log("removed from last")
a.pop()
console.log(a)

//meth 3 :adds at first
console.log("added at first")
a.unshift(21)
console.log(a)

//meth 4 :removes at first
console.log("removed from first")
a.shift()
console.log(a)

//meth 5 : to return a subarray or slice, don't manipulate original array
console.log("sliced array")
let sliced=a.slice(2,5)
console.log(sliced)

//meth 6 : to delete any number of elements, changes the original array
console.log("spliced arr")
let spliced=a.splice(1,3)
console.log(spliced)
console.log("Changed array : ", a)

//meth 7 : to find the index of an element,if not found returns -1
let idx=a.indexOf(9)
console.log("index of 9 :", idx)

//meth 8 : to find whether an element is present or not
let present=a.contains(8)
console.log("presence of 8 :", present)