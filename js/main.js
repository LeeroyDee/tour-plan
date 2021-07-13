var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
  },

});

//swiper.slideNext();
// document.addEventListener("keydown", (e) =>{
//   if(e.keycode===39) swiper.slideNext();
//   if(e.keycode===37) swiper.slidePref();
// })


ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.7763358,37.5848271],
          zoom: 14
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #000000; font-size:18px; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Отель Марриотт Москва Тверская',
          balloonContent: 'Отель Марриотт Москва Тверская'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '',
          // Размеры метки.
          iconImageSize: [20, 50],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([55.7763358,37.5848271], {
          hintContent: 'Отель Марриотт Москва Тверская',
          balloonContent: 'Отель Марриотт Москва Тверская',
          iconContent: 'Марриотт'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/iconMap.svg',
          // Размеры метки.
          iconImageSize: [28, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [30, -10],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
});