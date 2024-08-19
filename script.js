const modal = document.querySelector(".modal");
//takes value from modal class
const overlay = document.querySelector(".overlay");
//takes value from overlay class

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  //on click it will Add an "active" class created in css -> to modal element
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  //on click it will remove an "active" class created in css -> to modal element
  overlay.classList.remove("overlayactive");
};