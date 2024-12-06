
// function Book(title, author, price) {
//   this.title = title;
//   this.author = author;
//   this.price = price;

//   this.getDiscountPrice = function(discountPercentage) {
//     const discountAmount = (this.price / 100) * discountPercentage;
//     return this.price - discountAmount;
//   }
// }
// const book1 = new Book("Harry Potter", "Rowling simth", 700);

// console.log(book1.title); 
// console.log(book1.author); 
// console.log(book1.price); 

// const discountedPrice = book1.getDiscountPrice(30);
// console.log(discountedPrice); 

  
function movieDetails(callback) {
  console.log("Cinema ja raha hoon film ka pata lagane...");
  
  setTimeout(() => {
      // 3 second baad kaam complete hota hai
      console.log("Film ka pata lag gaya!");
      callback("Film lag rahi hai: Spiderman!");
  }, 3000);
}

// Callback function
function showMessage(message) {
  console.log("Message received: " + message);
}
// Main function ke andar callback function pass kiya
movieDetails(showMessage);




function filamDetails (params) {
   console.log("i am going to see the movie details");
   
   
}
 filamDetails();