// Select the button and h1 elements
const btn = document.getElementById("btn");
const h1 = document.getElementById("heading");

// Add an event listener to the button for the "click" event
btn.addEventListener("click", () => {
    // Check the current display style of the h1 element
    if (h1.style.display === "none" || h1.style.display === "") {
        h1.style.display = "block"; // Show the h1 element
    } else {
        h1.style.display = "none"; // Hide the h1 element
    }
});
