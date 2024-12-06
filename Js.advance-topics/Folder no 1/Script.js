
//fetch -> kisi url sa data lei kar ata hai yan phir kisi url pe data bhejta hai


// fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
// .then(raw => {
//     return raw.json();
// })
// .then(response =>{
//     console.log(response.data[6]["ID Nation"]);
// })

// 2nd

// fetch("https://dog.ceo/api/breeds/image/random")
// .then (raw => {
//       return raw.json();
// })
//  .then(response => {
//     console.log(response.status);
// })


//settimeout -> ya code ko ek bar chalata hai specific ka bad

// setTimeout(function(){
//     console.log("hey 2");
// },1000);

// setinterval -> ya code bar bar chalata hai specific time ke bad

// let count = 0;
// var myinterval = setInterval(function () {
//   count++;
//   console.log(count);
//   if (count == 5) {
//     clearInterval(myinterval);
//   }
// }, 1000);

// console.log("Main phla chala");



// let countdown = 10;

// function startCountdown() {
  //   if (countdown > ) {
    //     console.log(countdown);
    //     countdown--;
    //     setTimeout(startCountdown, 1000);
    //   } else {
      //     console.log("Time's up!");
      //   }
      // }
      // startCountdown();
      
      // setTimeout (()=> {
        //     console.log("Hi how are you");
        // setTimeout (()=> {
          //     console.log("i am fine. whats about you?");
          // setTimeout (()=> {
            //     console.log("im good too.");
// } ,4000);
// } ,3000);
// } ,2000);

// setInterval(function (){
  // console.log(" hye ");
  // } ,1000 )    
  
  
// let count =0;
// setInterval(function () {
  //   count++;
  //   console.log(count);
  // if (count == 8){
    //     clearInterval(myInterval);
    // }
    // } , 2000);
    
    
    // const allData = prompt("Enter the city name")
    // fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    // .then (raw =>{
      //     return raw.json();
      // })
      // .then (response => {
        //     console.log(response);
        // })
        
        // const allData = prompt("Enter the data ");
        // // console.log(allData);
        // fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        //   .then((response) => response.json())
        //   .then((result) => {
          //     const data = result.data;
          //   });
          
          // const allData = prompt("Enter a number between 1 and 7 to fetch corresponding data:");
          
          // fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
          //   .then((response) => response.json())
          //   .then((result) => {
            //     const data = result.data;

            //     const index = parseInt(allData);
            
            //     if (index >= 1 && index <= 7) {
              //       console.log(data[index - 1]); 
//     } else {
  //       console.log("Please enter a valid number between 1 and 7.");
  //     }
  //   })
  //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    // });
    
    // async function fetchingData() {
      //   const response = await fetch("https://dog.ceo/api/breeds/image/random");
      //   const dog = await response.json();
      //   console.log(dog.status);
      // }
      // fetchingData();
      
      
      


// const perMission = function myData() {
//   const ans = prompt("Say 'yes' to continue:");
//   if (ans === "yes") {
//     console.log("Continuing...");
//     for (let i = 0; i < 20; i++) {
//       console.log(i);
//       if (i == 8) {
//         let a = prompt("Are you sure you want to continue?");
//         if (a === "yes") {
//           console.log("Continuing...");
//         } else if (a === "no") {
//           console.log("Stopping...");
//           break;
//         }
//       }
//     }
//     setTimeout(function () {
//       const againAns = prompt("Are you sure you want to continue? Say 'start'/'no':");
//       if (againAns === "start") {
//         for (let z = 8; z < 20; z++) {
//           console.log(z);
//         }
//       } else if (againAns === "no") {

//         console.log("Stopped...");
//       } else {
//         console.log("Please refresh and try again.");
//       }
//     }, 5000);

//   } else if (ans === "no") {
//     console.log("Stopped...");
//   } else {
//     console.log("Please refresh and try again.");
//   }
// };

// perMission();



// const numbers =[1,2,3]
// const sum = numbers.reduce ((accumulator, currentValue)=> {
//   return accumulator + currentValue

// }, 0)

// console.log(sum)

// const apiKey = "859db3f5075cb682fef0909acc15b8bf";
// const lat = 24.8607;
// const lon = 67.0011; 
// const exclude = "minutely,hourly"; 
// const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}`;

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log("Weather Data:", data);
//   })
//   .catch(error => {
//     console.error("Error fetching weather data:", error);
//   });



// dom
//  selection     change event
// usse         selection change event


// var a = document.querySelector(".heading")
// var d = document.querySelector(".head")
//  d.textContent = "abeera"
// var b = document.querySelector("#para")
// a.innerHTML = "html mai text add asy hota ha by using javascript <p> hye i am abeeera</p>"
// b.textContent += "Asif"
// var c =document.querySelector(".img")
// console.log(c)
// console.log(b)


// //how to createelement with js 
// var parent = document.querySelector(".parent");
// var h1 = document.createElement("h1")
// h1.innerHTML = "hyee my cutie";
// parent.appendChild(h1);
// // parent.removechild(h1);

//how to add a class by using js 

// var heading = document.querySelector("h1");
// heading.classList.add("heading1");


// var heading = document.querySelector("h1")
// heading.classList.toggle("parent");



let body = document.querySelector("body");
let ball = document.querySelector(".ball");
body.addEventListener("mousemove", function(e) {
console.log(e.clientX, e.clientY);
ball.style.transform = `translate(${e.clientX}px ,${e.clientY}px)`;
});



var box = document.querySelector(".box");
var btn = document.querySelector("button");
btn.addEventListener("click", function(e) {
  btn.textContent = "submit....";
  btn.style.backgroundColor = "red";
 console.log("i am  clicked");
});
box.appendChild(btn);





