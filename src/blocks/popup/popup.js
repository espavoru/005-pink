function Popup(options) {
  let elem;

  const getElem = () => {
    if (!elem) render();

    return elem;
  }

  const render = () => {
    elem = document.createElement('div');
    elem.classList.add(`popup`);
    elem.classList.add(`popup--${options.mod}`);

    if (options.title) {
      const title = document.createElement('h2');
      title.classList.add('popup__title');
      title.textContent = (options.title);

      elem.appendChild(title);
    }

    if (options.descr) {
      const descr = document.createElement('p');
      descr.classList.add('popup__descr');
      descr.textContent = options.descr;

      elem.appendChild(descr);
    }

    if (options.submit) {
      const submitWrap = document.createElement('div');
      submitWrap.classList.add('popup__submit-wrap');

      const submit = document.createElement('button');
      submit.classList.add('popup__submit');
      submit.classList.add('btn--success');
      submit.textContent = options.submit;
      submit.type = 'button';
      submit.addEventListener('click', hide);

      submitWrap.appendChild(submit);
      elem.appendChild(submitWrap);
    }
  }

  const hide = () => {
      this.getElem().remove();
  };

  this.getElem = getElem;
  this.hide = hide;
}

export default Popup;
