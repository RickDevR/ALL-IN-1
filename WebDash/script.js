const container = document.getElementById("container");

// New thumbnail system (no signup required)
function getThumbnail(url) {
    return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

function loadSites() {
    container.innerHTML = "";

    sites.forEach(site => {
        const card = document.createElement("div");
        card.className = "card";

        const thumb = getThumbnail(site.url);

        card.innerHTML = `
            <div class="thumbnail" style="background-image:url('${thumb}')"></div>
            <h3>${site.name}</h3>
        `;

        card.onclick = () => window.open(site.url, "_blank");

        container.appendChild(card);
    });
}

loadSites();
