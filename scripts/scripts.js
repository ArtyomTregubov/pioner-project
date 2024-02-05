const DOM = {
    productsCards: document.querySelector('.products__cards'),
    //productCard: document.querySelector('#products__card'),
  }

const initialCards = [
    {
      name: 'Сигнализатор уровня',
      link: './images/signaling.png',
      alt: 'Картинка сигнализатора уровня',
    },
    {
      name: 'Датчики давления',
      link: './images/sensors.png',
      alt: 'Картинка датчика давления'
    },
    {
      name: 'Пид-регуляторы',
      link: './images/pid.png',
      alt: 'Картинка ПИД-регулятора'
    },
    {
      name: 'Калибратор давления',
      link: './images/calibrator.png',
      alt: 'Картинка калибратора давления'
    },
    {
      name: 'Корректор расхода газа',
      link: './images/corrector.png',
      alt: 'Картинка корректора расхода газа'
    },
    {
      name: 'Манометры',
      link: './images/manometr.png',
      alt: 'Картинка манометра'
    }
  ];

  initialCards.map((item) => renderProductCards(item))

  function renderProductCards(item) {
    const selectorTemplate = "#products__card"
    const card = new Card(item.name, item.link, item.alt, selectorTemplate)
    const createdCard = card.create()
  DOM.productsCards.append(createdCard);
  }