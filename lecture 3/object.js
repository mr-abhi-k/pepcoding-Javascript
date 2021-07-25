//represent
//empty object create
let obj={}
//key:value pair
//key->string, number
//value->
let cap={
    name:"steve",
    lastname:"rogers",
    friends:["peter","bruce","tony"],
    isAvenger:false,
    age:34,
    sayHi:function()
    {
        console.log("cap say's HI")
    },
    address:{
        state:"new york",
        city:"my city",
    }
}

//print
console.log(cap)
//get
//.notation
console.log("name",cap.name)
console.log("friends",cap.friends[1])
console.log("age",cap.age)
//if not present
console.log("movies",cap.movies)
cap.sayHi()

//IMPORTANT
let varName="address"
console.log("address",cap[varName])

console.log("address",cap.varname)
for(let prop in cap)
{
    console.log(prop,":",car[prop])
}
//[]takes the value of inside and search
//. searches with the given value