// Insert current year and last modified date in footer
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// Toggle navigation menu on small screens
const hamburger = document.createElement("button");
hamburger.classList.add("hamburger");
hamburger.innerHTML = "&#9776";
document.querySelector("header").prepend(hamburger);

const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
 const isOpen = nav.style.display === "flex";
 nav.style.display = isOpen ? "none" : "flex";
 hamburger.innerHTML = isOpen ? "&#9776" : "&times"; // toggle icon
});



