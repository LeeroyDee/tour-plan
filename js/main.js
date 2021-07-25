$(document).ready(function(){
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
      enabled: true,
    },
  
  });
  var reviewsSlider = new Swiper('.reviews-slider', {
      // Optional parameters
      loop: true,
    
    
      // Navigation arrows
      navigation: {
        nextEl: '.reviews-slider__button--next',
        prevEl: '.reviews-slider__button--prev',
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
            iconImageHref: '../img/iconMap.svg',
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

let menuButton=document.querySelector(".menu-button")
menuButton.addEventListener("click",function (){
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")
});
  var modalButton = $('[data-toggle=modal]');
  var closemodalButton = $('.modal__close');

  modalButton.on("click",openModal)
  closemodalButton.on("click",closeModal)

  $(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      closeModal(e);
    }
  });
 
  function openModal(){
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible")
    modalDialog.addClass("modal__dialog--visible")
  }
  function closeModal(event){
    event.preventDefault()
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible")
    modalDialog.removeClass("modal__dialog--visible")
  }
});


  