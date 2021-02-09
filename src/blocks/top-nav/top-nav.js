(() => {
  const menuLinks = document.querySelectorAll('.top-nav__link');

  const clickHandler = e => {

    if (e.target.closest('.top-nav__link')) {
      if (!menuLinks.length) return;
      menuLinks.forEach(link => {

        link.classList.remove('top-nav__link--active');
      })

      e.target.closest('.top-nav__link').classList.add('top-nav__link--active')
    }
  };

  document.addEventListener('click', clickHandler);
})();
