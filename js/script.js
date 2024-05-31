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


    // for (let i = 0; i <= submenu.length; i++) {
    //     submenu[i].addEventListener('transitionend', function(e) {
    //         submenu[i].style.visibility = 'hidden'
    //     });
        
    //     menuLink[i].addEventListener('mouseover', function(e) {
    //         submenu[i].style.visibility = 'visible'
    //     })
    // }

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
