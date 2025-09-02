const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
// marvel.push(dc)
// console.log(marvel);
// // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
const all=marvel.concat(dc)
console.log(all);
const all_new=[...marvel,...dc]
console.log(all_new);


const r1=[3,5,6,[4,56,6,[4,9,7,6],[7,8]]]
const r2=r1.flat(Infinity)
console.log(r2);


console.log(Array.isArray("shrutika"));
console.log(Array.from("shrutika"));
console.log(Array.from({name:"yasha"}));//interesting

let score1=100
let score2=500
let score3=600
let score4=400
console.log(Array.of(score1,score2,score3,score4));
