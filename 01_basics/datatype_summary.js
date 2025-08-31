//primitive-> this are call by value

//7 types-String ,Number,boolean,null,undefined,Symbol,BigInt

//js is dynamic typed lang

const score=100
const scoreValue=100.3

const LogIn=false
const outsidetemp=null
let useremail;

const id=Symbol('123')
const idanother=Symbol('123')
console.log(id===idanother);

const bigno=567764783689n

//reference(Non primitive)-> eska return object aata h
//array,object,functions

const heros=["shaktimaan","naagraj","doga"]

let myobj={
    name:"riye",
    age:23,
}

const myfunc=function (){
    console.log("hello world");
    
}

console.log(typeof(bigno));


//**************************************************************************** */
//stack(primitive)->jo bhe variable declare hoga copy milta h ,heap(non primitive) memory->jo bhe change karenge original value mai hoga

let myname="shrutika"
let anothername="chai"
console.log(anothername);
console.log(myname)

let user1={
    email:"user@google.com",
    upi:"hbfbgkb"
}
let user2=user1
user2.email="gdgjh@google.com"
console.log(user1.email);
console.log(user2.email);


