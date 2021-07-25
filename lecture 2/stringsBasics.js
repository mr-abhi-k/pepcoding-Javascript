//notes: https://pastebin.com/1bcE9rx7
let a=10

//first method
let s1="first string"+a
console.log(s1)

//second method
let s2='second method'+a
console.log(s2)

//third method "template string"
let s3=`third method ${a}`
console.log(s3)

//example string
let s="i am eryx op"
//meth-1
let charAT=s.charAt(3)
console.log(charAT)
//meth-2
let sliced=s.slice(2,5)
console.log(sliced)
//meth-3
let arrtostr=s.split(" ")
console.log(arrtostr)
//meth-4
let lower=s.toUpperCase()
console.log(lower)
//meth-5
let trimmed=s.trim()
console.log(trimmed)
//meth-6
let stringfrmarr=arrtostr.join("+")
console.log(stringfrmarr)

