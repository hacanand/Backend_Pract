class Product{
    constructor(n,p) {
        //constructor function to create the object of the  class
        //to define data member we need to initialize inside the constructor function
        //we use this keyboard for initializing data member
        //
        this.name = n;//data member
        this.price = p;//data member
    }
    //member function
    displayProduct() {
        
    }
    //member function
    buyProduct() {
        
    }
}
let iphone = new Product("Iphone", 10000);
let macbook = new Product("macbook", 140000);
console.log(iphone, macbook);
console.log(typeof macbook);

let obj = {
    name: "Kumar",
    age:24,
}

console.log(obj);




//behaviour of this in js is different than c++ or java
// in js this keyboard

//it looks new keyword only calls constructor but it does a lot more than that

//new keyword is not only associated with classes it can be used with function

//wrt a function what does new keyword do

//the new keyword actually execute a 4 step process
// 1.the new keyword create a brand new empty js object
//2.it does linking
//3.call the function with the this property assigned to the empty object it created before
//4.the function execution started 
//at last if the function doesn't return anything then it return undefined