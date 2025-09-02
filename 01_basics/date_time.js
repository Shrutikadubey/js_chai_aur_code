//dates
let mydate=new Date()
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toString());
console.log(mydate.toTimeString());
console.log(typeof mydate);

let mydate1=new Date(2025,0,23)
console.log(mydate1.toDateString());

let mydate2=new Date(2025,0,23,5,3)
console.log(mydate2.toLocaleString());

let mydate4=new Date("02-09-2025")
console.log(mydate4.toDateString());


let mytimeStamp=Date.now()
console.log(mytimeStamp);
console.log(mydate4.getTime());

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());

newdate.toLocaleString('default',{
    weekday:"long",
})