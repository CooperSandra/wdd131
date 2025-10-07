const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
  
    // Three temples added
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
  {
    templeName: "Las Vegas Nevada Temple",
    location: "Las Vegas, Nevada",
    dedicated: "1989, December, 16",
    area: 80350,
      imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/las-vegas-nevada/400x250/las-vegas-temple-lds-758757-wallpaper.jpg"
  },
  {
    templeName: "London England Temple",
    location: "United Kingdom",
    dedicated: "1958, September, 7",
    area: 42652,
      imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-37802-wallpaper.jpg"
  },
    
];

const main = document.querySelector("main");

const filterHeading = document.createElement("h2");
filterHeading.textContent = "HOME";
main.prepend(filterHeading);

function displayTempleCards(filteredTemples) {
    main.querySelectorAll("figure").forEach((fig) => fig.remove());

    filteredTemples.forEach((temple) => {
        const figure = document.createElement("figure");
        figure.classList.add("card");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.innerHTML = `<h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>`;

        figure.appendChild(img);
        figure.appendChild(caption);
        main.appendChild(figure);
    });

}

    displayTempleCards(temples);
    
    document.querySelectorAll(".nav a").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = link.textContent.trim().toLowerCase();

            let filtered = [];
            let headingText = "HOME";

            switch (filter) {
                case "old":
                    filtered = temples.filter((t) => parseInt(t.dedicated.split(",")[0]) < 1900);
                    headingText = "OLD TEMPLES (Before 1900)";
                    break;
                
                case "new":
                    filtered = temples.filter((t) => parseInt(t.dedicated.split(",")[0]) > 2000);
                    headingText = "NEW TEMPLES (After 2000)";
                    break;
                
                case "large":
                    filtered = temples.filter((t) => t.area > 90000);
                    headingText = "LARGE TEMPLES (> 90,000 sq ft)";
                    break;
                
                case "small":
                    filtered = temples.filter((t) => t.area < 10000);
                    headingText = "SMALL TEMPLES (< 90,000 sq ft)";
                    break;
                default:
                    filtered = temples;
                    headingText = "HOME";
            }

            filterHeading.textContent = headingText;
            displayTempleCards(filtered);
        })
    })


// Insert current year and last modified date in footer
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// Toggle navigation menu on small screens
const hamburger = document.createElement("button");
hamburger.classList.add("hamburger");
hamburger.innerHTML = "&#9776;";
document.querySelector("header").prepend(hamburger);

const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
 const isOpen = nav.style.display === "flex";
 nav.style.display = isOpen ? "none" : "flex";
 hamburger.innerHTML = isOpen ? "&#9776;" : "&times;"; // toggle icon
});


