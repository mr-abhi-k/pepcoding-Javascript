console.log("Shri Ganeshay Namah")
let a
console.log(a)
a=10
a="i am a string"
console.log(a)
a="i am also a string"
console.log(a)
a=true
a=null
for(let i=0;i<10;i++)
{
    console.log(i);
}

let isPrime=true
for(let a=2;a*a<=input;a++)
{
    if(input%a==0)
    {
        isPrime=false;
        break;
    }
}
if(isPrime==true)
console.log("Prime")
else
console.log("not prime")