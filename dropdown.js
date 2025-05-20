document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.navMenu');
  const dropdownContainer = document.querySelectorAll('.dropdownContainer');
  const subDropdownContainer = document.querySelectorAll('.subDropdownContainer');
  const body = document.body;
  
  // Toggle mobile menu
  hamburger.addEventListener('click', function() {
    const isOpening = !this.classList.contains('active');
    
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Toggle body scroll lock
    if (isOpening) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
    
    // Hide brand when menu is open
    document.querySelector('.navBar').style.visibility = 
      this.classList.contains('active') ? 'hidden' : 'visible';
  });
  
  // Toggle dropdowns on mobile
  dropdownContainer.forEach(parent => {
    const link = parent.querySelector('a:first-child');
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        parent.classList.toggle('active');
      }
    });
  });
  
  subDropdownContainer.forEach(parent => {
    const link = parent.querySelector('a:first-child');
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        parent.classList.toggle('active');
      }
    });
  });
});