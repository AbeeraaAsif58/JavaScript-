//1  global
//2  function
//3  Method
//4  function inside method -> es5


// this

// this keyword js main one of tha most suspensul keyword

// this ki value bar bar badal sakti hai alag alag condition ke hisab se

//global
// we find the (this)-> value in the  Global 
// the value is window 
function myGlobal(){
}
console.log(this) 

//function
// we find the (this)->value in the function
// the value is window 
function myFunction(){
  console.log(this)
}

myFunction();


// // method
const myMethod={
 name: "abeera",
 city: "lahore",
 method: function(){
   console.log(this);
  }
}
myMethod.method();


const arr = {
  name: "rubab",
  age: 20,
  nt: function () {
    console.log(this.name);
  },
};

arr.nt();

// // func inside method -> es5

const myObject ={
  name: "abeera",
  city: "lahore",
  fun1: function(){
  function myFunction(){
    console.log(this);
  }
  myFunction();
  } 
}
myObject.fun1();




// // func inside method -> es6

const arr3 = {
  nf: function () {
    const func = () => {
      console.log(this);
    };
    func();
  },
};

arr3.nf();

// constructor function

function constructorFunc(name, age) {
  this.name = name;
  this.age = age;
  return this;
}

const obj = new constructorFunc("umar", 20);

const obj2 = new constructorFunc("usman", 21);

// event listener

document.querySelector("button").addEventListener("click", function () {
  console.log(this);
});

