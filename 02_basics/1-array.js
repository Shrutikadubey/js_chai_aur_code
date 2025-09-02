//array->resizeable,indexing start from 0,it make shallow copy(same refrence point share),deepcopy
const arr= [1,2,5,4,37,8,6]
const hero=["shakti","naagraj"]

const myarr=new Array(1,2,3,45,5)

console.log(arr[0]);

//arrray methods
myarr.push(56)
console.log(myarr);
myarr.pop()
console.log(myarr);

// myarr.shift()
// console.log(myarr);

console.log(myarr.includes(8));

const newArr=myarr.join()
console.log(newArr);

//slice,splice

console.log("A ", myarr);
const myn1=myarr.slice(1,3)
console.log(myn1);
console.log("B ", myarr);

const myn2=myarr.splice(1,3)
console.log("C" , myn2);