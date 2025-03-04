document.addEventListener("DOMContentLoaded", function () {
    const lwsLink = document.querySelector(".navbar ul li:nth-child(2) > a");
    const dropdown = document.querySelector(".navbar ul li:nth-child(2) .dropdown");
    const subDropdowns = document.querySelectorAll(".subDropdown");
    let timeout, subTimeout;
    let activeSubDropdown = null; // Track the currently open sub-dropdown

    function showDropdown() {
        clearTimeout(timeout);
        dropdown.style.display = "block";
        dropdown.style.flexDirection = "column";
    }

    function hideDropdown() {
        timeout = setTimeout(() => {
            dropdown.style.display = "none";
            closeAllSubDropdowns(); // Close all sub-dropdowns when main dropdown hides
        }, 1500);
    }

    function showSubDropdown(event) {
        clearTimeout(subTimeout);
        
        let subDropdown = event.target.nextElementSibling;
        
        if (subDropdown && subDropdown.classList.contains("subDropdown")) {
            closeAllSubDropdowns(); // Close any open sub-dropdown before opening a new one
            subDropdown.style.display = "block";
            subDropdown.style.position = "absolute"; 
            subDropdown.style.left = "100%"; 
            subDropdown.style.top = "0";
            activeSubDropdown = subDropdown; // Update the currently open sub-dropdown
        }
    }

    function hideSubDropdown() {
        subTimeout = setTimeout(() => {
            if (activeSubDropdown) {
                activeSubDropdown.style.display = "none";
                activeSubDropdown = null; // Reset active sub-dropdown
            }
        }, 1500);
    }

    function closeAllSubDropdowns() {
        subDropdowns.forEach(sub => sub.style.display = "none");
        activeSubDropdown = null;
    }

    lwsLink.addEventListener("mouseover", showDropdown);
    lwsLink.addEventListener("click", function (event) {
        event.preventDefault();
        showDropdown();
    });

    lwsLink.addEventListener("mouseleave", hideDropdown);
    dropdown.addEventListener("mouseover", showDropdown);
    dropdown.addEventListener("mouseleave", hideDropdown);

    document.querySelectorAll(".dropdown ul li > a").forEach((item) => {
        item.addEventListener("click", function (event) {
            if (this.getAttribute("href") === "#") {
                event.preventDefault(); // Prevent only toggler links
                showSubDropdown(event);
            }
        });
    });
    

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".navbar")) {
            dropdown.style.display = "none";
            closeAllSubDropdowns();
        }
    });
});
