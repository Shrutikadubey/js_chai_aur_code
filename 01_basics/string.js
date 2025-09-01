const name="yasha"
const repoCount=23
// console.log(name + repoCount + "value");
console.log(`hello my name is ${name} and repo count is ${repoCount} `);
const gameName= new String('shrut-ika')

console.log(gameName[0]);//or
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));


const newstr= gameName.substring(0,4)
console.log(newstr);

const new2str= gameName.slice(-8,4)
console.log(new2str);

const new3str= "   gjhgfjgj   "
console.log(new3str);
console.log(new3str.trim());

const url="https://jhjghkj.com/dhjhbbnjnjsj"
console.log(url.replace('.c','b'));

console.log(url.includes('sbnbj'))

console.log(gameName.split('-'));
