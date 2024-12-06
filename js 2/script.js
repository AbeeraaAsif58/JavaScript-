// Object to map buttons to sections
let sections = {
    home: document.querySelector("#homeContent"),
    about: document.querySelector("#aboutContent"),
    contact: document.querySelector("#contactContent"),
  };
  
  // Event listener for navigation buttons
  document.querySelectorAll(".nav").forEach((button) => {
    button.addEventListener("click", () => {
      // Hide all sections
      Object.values(sections).forEach((section) => (section.style.display = "none"));
      // Show the corresponding section
      sections[button.id].style.display = "block";
    });
  });

  
// let sections = {
//   home: document.querySelector("#homeContent"),
//   about: document.querySelector("#aboutContent"),
//   contact: document.querySelector("#contactContent"),
// };

// document.querySelectorAll("#home, #about, #contact").forEach((button) => {
//   button.addEventListener("click", () => {
//     h3.forEach((h) => (h.style.display = "none"));
//     sections[button.id].style.display = "block";
//   });
// });

// function h3KoHidekaro() {
//   h3.forEach((h) => (h.style.display = "none"));
// }
