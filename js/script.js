// Слайдер секции Hero
const $heroSwiper = new Swiper('.hero__swiper', {   
    loop: true,
    autoplay: {
        delay: 5000,
      },
    
  });

  // Слайдер секции Галерея Var1
const $gallerySwiper = new Swiper('.gallery1__slider', {   
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.gallery1__btn--next',
    prevEl: '.gallery1__btn--prev',
  },  
});

// // Слайдер секции Галерея Var2
// var $gallery2Swiper = new Swiper(".gallery2__slider", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 50,
//     depth: 200,
//     modifier: 2,
//     slideShadows: false
//   },
//   loop: true,
//   keyboard: {
//     enabled: true
//   },
//   mousewheel: {
//     thresholdDelta: 70
//   },
//   breakpoints: {
//     560: {
//       slidesPerView: 1
//     },    
//     1024: {
//       slidesPerView: 2
//     }
//   }
// })

 const $gallery2Swiper = new Swiper(".gallery2__slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      
    });

// Аккордеон секции FAQ
const $accItemAll = document.querySelectorAll('.services-card');

$accItemAll.forEach((item, index) => {
  const $accBtn = item.querySelector('.services-card__btn');

  $accBtn.addEventListener('click', () => {
    item.classList.toggle('open');

      const $body = item.querySelector('.services-card__body');

      if (item.classList.contains('open')) {
        $body.style.height = `${$body.scrollHeight}px`
      } else {
        $body.style.height = '0px'
      }
      closeAcc(index)
    })
})

function closeAcc(count) {
  $accItemAll.forEach((item, index) => {
    if (count !== index) {
      item.classList.remove('open')

      const $body = item.querySelector('.services-card__body');
      $body.style.height = '0px';      
    }
  })
}

// Модальное окно
// Открытие модального окна
const $btnOpenModalAll = document.querySelectorAll('.open-modal'),
    $modal = document.getElementById('modal'),
    $btnCloseModal = document.getElementById('modalClose'),
    $form = document.getElementById('modal-form');


$btnOpenModalAll.forEach(btn => {
  btn.addEventListener('click', () => {
    $modal.classList.add('visible');
    document.body.classList.add('scroll-stop');
});
})


// Закрытие модального окна по кнопке
$btnCloseModal.addEventListener('click', () => {        
    $modal.classList.remove('visible');
    document.body.classList.remove('scroll-stop');
});

// Закрытие модального окна по эскейп
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {            
        $modal.classList.remove('visible');
        document.body.classList.remove('scroll-stop');
    }
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  $modal.classList.remove('visible');
  document.body.classList.remove('scroll-stop');
})

// Подключение карты
ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 14
  });

  let myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/icons/map_icon.svg',
    iconImageSize: [20, 20],
  });
  myMap.behaviors.disable('scrollZoom') //Отключение скрола колесиком
  myMap.geoObjects.add(myPlacemark)
}