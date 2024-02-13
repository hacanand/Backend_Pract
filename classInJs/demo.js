// var obj = {
//     name: "kumar",
//     company: "amazon",
//     display: function () {
//         console.log(this.name, "work in",this.company);
//     }
// }
// obj.display();
// var obj1 = {
//   name: "kumar",
//   company: "amazon",
//   display:  () =>{
//     console.log(this.name, "work in", this.company);
//   },
// };
// obj1.display();

 
// var obj2 = {
//   name: "kumar",
//   company: "amazon",
//   display: function () {
//     console.log(this.name, "work in", this.company);
//   },
// };
// obj2.display();

// arrow function resolve this lexically



// const player = {
//     firstname: 'virat',
//     lastname: "kohli",
//     numbrerToBat: 3,
//     canBowl: false,
//     getDetails: function () {
//         console.log(this.firstname, this.lastname, "comes at no ", this.numbrerToBat);
//     }
// }


// const obj = function () {
//     console.log(this.getDetails( ));

// }
// const x = obj.bind(player)
// console.log(x);


// const obj = function (x, y) {
//     console.log(x + y);
//     this.getDetails();
// }

// obj.call(player,2,4)



let arr = [1, 2, 3, 4, 5, 6];
console.log(typeof arr);
let obj = {
    x: 10,
    y:20,
}
Object.freeze(obj);//neither we add new property nor update the property
obj.z = 40;
console.log(obj)

let obj2 = {
    x: 20,
    y: 49,
    
}
Object.seal(obj2);//can update the value but cannot add the new element
obj2.x = 40;
console.log(obj2);



let obj3 = {
    x: 2,
    y: 3,
    u:5,
}
let keys = Object.keys(obj3);
console.log(keys);

let values = Object.values(obj3);
console.log(values);

let entries = Object.entries(obj3)
console.log(entries);