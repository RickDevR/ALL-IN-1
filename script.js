const container = document.getElementById("container");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Load favorites from localStorage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Thumbnail system
function getThumbnail(url) {
    return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

// Render all sites
function loadSites() {
    container.innerHTML = "";

    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    sites.forEach(site => {
        const name = site.name.toLowerCase();

        // Search filter
        if (!name.includes(search)) return;

        // Category filter
        if (category !== "all" && category !== "favorites") {
            if (site.category !== category) return;
        }

        // Favorites filter
        if (category === "favorites" && !favorites.includes(site.url)) return;

        const card = document.createElement("div");
        card.className = "card";

        const thumb = getThumbnail(site.url);

        const isFav = favorites.includes(site.url);

        card.innerHTML = `
            <div class="favorite-btn ${isFav ? "favorite" : ""}">⭐</div>
            <div class="thumbnail" style="background-image:url('${thumb}')"></div>
            <h3>${site.name}</h3>
        `;

        // Open website
        card.onclick = (e) => {
            if (e.target.classList.contains("favorite-btn")) return;
            window.open(site.url, "_blank");
        };

        // Favorite toggle
        card.querySelector(".favorite-btn").onclick = (e) => {
            e.stopPropagation();

            if (favorites.includes(site.url)) {
                favorites = favorites.filter(f => f !== site.url);
            } else {
                favorites.push(site.url);
            }

            localStorage.setItem("favorites", JSON.stringify(favorites));
            loadSites();
        };

        container.appendChild(card);
    });
}

searchInput.oninput = loadSites;
categoryFilter.onchange = loadSites;

loadSites();
