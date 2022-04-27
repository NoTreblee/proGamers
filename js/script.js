document.addEventListener('DOMContentLoaded', function () {
    let nav = document.getElementById('navbar');
    let allNavItems = document.querySelectorAll('.nav-link');
    let navList = document.querySelector('.navbar-collapse')
  function addShadow() {
    if (window.scrollY >= 300) {
      nav.classList.add('shadow-bg');
    } else {
      nav.classList.remove('shadow-bg');
    }
  }
  allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
  window.addEventListener('scroll', addShadow);
});
