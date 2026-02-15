document.addEventListener('DOMContentLoaded', () => {
    loadCat(); // first cat
});

let isLoading = false; // prevents spam loading

async function loadCat() {
    if (isLoading) return;
    isLoading = true;

    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();

        const img = document.createElement("img");
        img.src = data[0].url;

        document.getElementById("cat-container").appendChild(img);
    } catch (error) {
        console.log("Error loading cat:", error);
    }

    isLoading = false;
}

// Load new cat when near bottom
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadCat();
    }
});