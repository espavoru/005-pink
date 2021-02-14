(() => {
  const uploadTabs = () => {
    const tabs = document.querySelectorAll('.field-range');
    if (!tabs.length) return;

    const clickHandler = e => {
      const tab = e.target.closest('.field-range');
      if (tab) {
        tabs.forEach(tab => {
          tab.classList.remove('field-range--active');
        })

        tab.classList.add('field-range--active');
      }
    };

    document.addEventListener('click', clickHandler);
    document.addEventListener('submit', e => {
      e.preventDefault();
    });
  };

  uploadTabs();
})();
