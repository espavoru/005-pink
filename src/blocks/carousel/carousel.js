const Carousel = (options) => {
  const items = document.querySelectorAll(`${options.cls} .carousel__item`);
  const togglers = document.querySelectorAll(`${options.cls} .carousel__toggler`);
  let i = 0;

  items[0].classList.add('carousel__item--active');
  togglers[0].classList.add('carousel__toggler--active');

  const showNextSlide = () => {
    i++;
    if (i >= items.length) i = 0;

    items.forEach(item => {
      item.classList.remove('carousel__item--active');
    })

    items[i].classList.add('carousel__item--active');

    togglers.forEach(toggle => {
      toggle.classList.remove('carousel__toggler--active');
    })
    togglers[i].classList.add('carousel__toggler--active');
  };

  const clickHandler = (e) => {
    if (e.target.closest(`${options.cls} .carousel__toggler`)) {
      if (e.target.classList.contains('carousel__toggler--active')) return;

      const showSlide = () => {
        e.target.classList.add('carousel__toggler--active');

        togglers.forEach((toggle, i) => {
          if (toggle.classList.contains('carousel__toggler--active')) {
            items[i].classList.add('carousel__item--active');
          }
        })
      };

      togglers.forEach((toggle) => {
        toggle.classList.remove('carousel__toggler--active');
      })

      items.forEach((item) => {
        item.classList.remove('carousel__item--active');
      })

      showSlide();
    }

    if (e.target.closest(`${options.cls} .carousel__item`)) {
      showNextSlide();
    }


  };

  if (options.autoSlide) {
    setInterval(() => {
      showNextSlide();
    }, 4000);
  }

  document.addEventListener('click', clickHandler);
};

const reviewSliderOptions = {
  'cls': '.review',
  'autoSlide': true
};
Carousel(reviewSliderOptions);

const priceSliderOptions = {'cls': '.price'};
Carousel(priceSliderOptions);
