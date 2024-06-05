document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const checkbox = document.getElementById('hamburger-checkbox');

  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !checkbox.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        checkbox.checked = false;
    }
  });

  const submenu = document.getElementsByClassName('submenu');
  const menuLink = document.getElementsByClassName('menu-link');

  for (let i = 0; i < submenu.length; i++) {
    let isSubmenuHovered = false;
  
    menuLink[i].addEventListener('mouseenter', function(e) {
      submenu[i].classList.add('jelly-animate');
      submenu[i].classList.remove('fade-down');
      submenu[i].style.opacity = '1';
      submenu[i].style.display = 'block';
    });
  
    submenu[i].addEventListener('mouseenter', function(e) {
      isSubmenuHovered = true;
      submenu[i].classList.add('jelly-animate');
      submenu[i].classList.remove('fade-down');
      submenu[i].style.opacity = '1';
      submenu[i].style.display = 'block';
    });
  
    submenu[i].addEventListener('mouseleave', function(e) {
      isSubmenuHovered = false;
      setTimeout(function() {
        if (!isSubmenuHovered) {
          submenu[i].classList.remove('jelly-animate');
          submenu[i].classList.add('fade-down');
          submenu[i].style.display = 'none';
          submenu[i].style.opacity = '0';
        }
      }, 200);
    });
  
    menuLink[i].addEventListener('mouseleave', function(e) {
      setTimeout(function() {
        if (!isSubmenuHovered) {
          submenu[i].classList.remove('jelly-animate');
          submenu[i].classList.add('fade-down');
          submenu[i].style.display = 'none';
          submenu[i].style.opacity = '0';
        }
      }, 200);
    });
  }

  const checkboxes = document.querySelectorAll('.group-checkbox');

  checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
          if (this.checked) {
              checkboxes.forEach((cb) => {
                  if (cb !== this) {
                      cb.checked = false;
                  }
              });
          }
      });
  });
});
