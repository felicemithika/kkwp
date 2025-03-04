document.addEventListener("DOMContentLoaded", function () {
    const lwsLink = document.querySelector(".dropdown ul li:nth-child(2) > a");
    const subDropdown = document.querySelector(".dropdown ul li:nth-child(2) .subDropdown");
    let timeout;
  
    function showDropdown() {
      clearTimeout(timeout);
      subDropdown.style.display = "block";
      subDropdown.style.flexDirection = "column";
      
    }
  
    function hideDropdown() {
      timeout = setTimeout(() => {
        subDropdown.style.display = "none";
      }, 1500); // Dropdown disappears after 2 seconds
    }
  
    lwsLink.addEventListener("mouseover", showDropdown);
    lwsLink.addEventListener("click", function (event) {
      event.preventDefault();
      showDropdown();
    });

    lwsLink.addEventListener("mouseleave", hideDropdown)
  
    subDropdown.addEventListener("mouseover", showDropdown);
    subDropdown.addEventListener("mouseleave", hideDropdown);
  
    document.querySelectorAll(".dropdown ul li a").forEach((link) => {
      link.addEventListener("click", function () {
        if (this !== lwsLink) {
          dropdown.style.display = "none";
        }
      });
    });
  });
  