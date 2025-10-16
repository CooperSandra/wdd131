document.addEventListener("DOMContentLoaded", () => {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;

    localStorage.setItem("reviewCount", count);
    document.getElementById("reviewCounter").textContent = count;
});

document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;