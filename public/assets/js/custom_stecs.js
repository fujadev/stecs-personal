  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#stecsNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY >= 70) {
      navbarCollapsible.classList.add('navbar-fixed', 'animate__slideInDown')
    } else {
        navbarCollapsible.classList.remove('navbar-fixed', 'animate__slideInDown');
    }

};

// Shrink the navbar
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink);
