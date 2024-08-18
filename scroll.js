// Set the scroll threshold
const scrollThreshold = 100; // Adjust this value as needed

// Get the header element
const header = document.querySelector(".header");

// Function to handle scroll event
function handleScroll() {
  if (window.scrollY > scrollThreshold) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Call handleScroll on page load to handle the initial state
handleScroll();
