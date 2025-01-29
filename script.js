document.addEventListener("DOMContentLoaded", function () {
    fetch("company_data.json")  // Load the provided JSON file
        .then(response => response.json())
        .then(data => {
            // ✅ Update Title and Description
            document.getElementById("project-title").textContent = data.title;
            document.getElementById("project-description").textContent = data.short_description;

            // ✅ Get all submenu sections
            const sections = document.querySelectorAll(".section");

            // ✅ Load JSON data into each submenu
            const assets = data.tasks[0].assets;
            
            if (sections.length >= 4) {
                // First Section: Technical Project Management
                sections[0].querySelector("h3").textContent = assets[0].asset_title;
                sections[0].querySelector("p").textContent = assets[0].asset_description;
                sections[0].querySelector("iframe").src = assets[0].asset_content;

                // Second Section: Threadbuild
                sections[1].querySelector("h3").textContent = assets[1].asset_title;
                sections[1].querySelector("p").textContent = assets[1].asset_description;

                // Third Section: Structure Your Pointers
                sections[2].querySelector("h3").textContent = assets[2].asset_title;
                sections[2].querySelector("p").textContent = assets[2].asset_description;

                // Fourth Section: 4SA Method
                sections[3].querySelector("h3").textContent = assets[3].asset_title;
                sections[3].querySelector("p").textContent = assets[3].asset_description;
                sections[3].querySelector("a").href = assets[3].asset_content;
            }
        })
        .catch(error => console.error("Error loading JSON:", error));
});
