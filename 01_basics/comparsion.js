console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);
//the reason is that an equality check == and comparsion ><>=<= works diffrently
//comparsion convert null to a no. ,treating it as 0 that's why null>=0 is true


console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

//strict check === check value & datatype
console.log("2" ===2);
