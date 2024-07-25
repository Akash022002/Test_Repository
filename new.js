// Arrray

// var arr = [ele1,ele2];  
var f = ['Maths','english','science','History'];

// console.log(f);
// console.log(f[0]);
// console.log(f[3]);
// f[4] = 'Chem';
// console.log(f);

// for(var i=0;i<=f.length;i++)
// {
//     console.log(f[i]);
// }

// f.push('Politics');
// for(var i=0;i<=f.length;i++)
// {
//     console.log(f[i]);
// }
// f.unshift('Marathi');
// for(var i=0;i<=f.length;i++)
// {
//     console.log(f[i]);
// }

// f.pop();
// console.log(f);

// f.shift();
// console.log(f);

// f.length = 0;
// f.splice(2,4);
// f = [];

// console.log(f.indexOf('english'));

// var a = "Teknowell is IT tranning institude";
// let x = a.split(' ');
// console.log(x);

// let y = ['t','l','e','f'];
// let y1 = ['k','z','e','a'];
// // let z = x+y;
// // console.log(z);
// let z = x.concat(y,y1);
// console.log(z);

// delete z[10];
// console.log(z);

// let d = z.slice(1,4);
// console.log(z.slice(1,4));
// console.log(z.slice(1));

// let d = z.sort();
// console.log(z.sort());

// console.log(f.sort());

// let e = z.reverse();
// console.log(e);

// let e1 = f.reverse();
// console.log(e1);

// var m = [[1,5,3,4,6,7],[7,8,9,6,1,2],[1,5,3,4,6,7]]
// console.log(m);


//String

// 1] Single quoted
var s = "Teknowell Edutech is IT tranning institude";
console.log(typeof(s));

// var s1 = "Edutech";
// console.log(typeof(s1));

// var s2 = new String('chinchwad');
// console.log(typeof(s2));

// console.log(s.length);
// var a = s.slice(1,8,2);
// var a1 = s.slice(-5);
// console.log(a);
// console.log("reverse element are:"+a1);

// // var d = s.substring(s1);
// console.log(s.substring(7,10));
// // var d1 = s.substr("eutech");
// console.log(s.substr(7,10));

// var s = "Teknowell Edutech is IT tranning institude";
// console.log(typeof(s));

// s.replaceAll("in","is");
// console.log(s);

// class Student
// {
//     constructor(rno,name,marks)
//     {
//         this.rno = rno;
//         this.name = name;
//         this.marks = marks;
//     }
//     display()
//     {
//         console.log("Rno:"+this.rno+"Name:"+this.name+"Marks:"+this.marks);
//     }
// }

// const stu = new Student(1,'Test',99);
// stu.display();

// var a ={
//     rno:1,
//     name:"Test",
//     marks:88
// };
// console.log(a);
// console.log(typeof(a));

// console.log(a.name);
// console.log(a.marks);

// a.city = "Pune";
// console.log(a);

// delete a.marks;
// console.log(a);

// if("rno" in a)
// {
//     console.log("Fees is present");
// }
// else{
//     console.log("Fees is not present");
// }

// for(i in a)
// {
//     console.log(i+":"+a[i]);
// }

// var a ={
//     rno:1,
//     name:"Test",
//     marks:88,
//     hobbies:['Playing','reading'],
//     hobbiesNew:{
//         rno:2,
//         name:"TestNew",
//         marks:98,
//     }
// };
// console.log(a);
// console.log(a.hobbiesNew.rno);

// var a = {
//     accept:parseInt(prompt("Enter the radius")),
//     s1:function(){
//         var Area = 3.14*this.accept*this.accept;
//         return(Area);
//     }
// }
// console.log(a.accept);
// console.log(a.s1());

// var a = {
//     accept:parseInt(prompt("Enter your age")),
//     check:function()
//     {
//         if(this.accept>18)
//         {
//             console.log("You are eligible for voting")
//         }
//         else{
//             console.log("You are not eligible for voting");
//         }
//     }
// }
// console.log(a.accept);
// console.log(a.check());

// a.checkNew = function()
// {
//     if(this.accept)
//     {
//         console.log("You are 18+")
//     }
//     else{
//         console.log("You are 18-");
//     }
// }
// console.log(a.checkNew());

var a = Math.max(1,2,4,5,6);
console.log(a)
var a1 = Math.min(1,2,4,5,6);
console.log(a1);

var a2 = Math.round(2.55789);
console.log(a2);

var a3 = Math.sqrt(16)
console.log(a3);

var a4 = Math.PI;
console.log(a4);

var a = new String("Teknowell");
console.log(typeof(a))
