import Popup from '../popup/popup';
(() => {
  const form = document.querySelector('.contest .form');

  if (!form) return;

  const popupFail = new Popup({  // eslint-disable-line
    mod: 'fail',
    title: 'Что-то пошло не так!',
    descr: 'Проверьте поля, выделенные красным, скорее всего вы забыли их заполнить',
    submit: 'OK'
  });

  const popupSuccess = new Popup({
    mod: 'success',
    title: 'Ваша заявка отправлена',
    descr: 'Спасибо за ваше участие, ваша заявка уже поступила к нам. В ближайшее время мы рассмотрим ее и оповестим вас.',
    submit: 'ЗАКРЫТЬ ОКНО'
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    setTimeout(() => {
      // document.body.appendChild(popupFail.getElem());
      document.body.appendChild(popupSuccess.getElem());
    }, 1000);
  })
})();
