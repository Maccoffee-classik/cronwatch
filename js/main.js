$(document).ready(function () {

  if ($('.tiny-slider').length) {
    var slider = tns({
      container: '.tiny-slider',
      items: 1,
      mode: 'gallery',
      axis: 'vertical',
      //slideBy: 'page',
      autoplay: true,
      autoplayText: ['', ''],
      autoplayButtonOutput: false,
      //animateDelay: 6000,
      center: true,
      controls: false,
      nav: false,
      speed: 1000,
    });
  }

  if ($('.slider-product-list').length) {
    var sliderProductMain = tns({
      container: '.slider-product-list',
      items: 4,
      gutter: 20,
      controlsText: ['', ''],
      nav: true,
      navPosition: 'bottom',
      mouseDrag: true,
      edgePadding: 40,
      loop: false,
      controls: true,
      responsive: {
      378: {
        items: 1,
        gutter: 0,
        edgePadding: 0,
        controls: false
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 2,
        controls: true
      },
      700: {
        gutter: 0,
        items: 3,
        controls: true
      },
      900: {
        items: 4,
        controls: true
      } 
      }
    });
  }

  if ($('.slider-collection-list').length) {
    var sliderCollectionMain = tns({
      container: '.slider-collection-list',
      items: 4,
      gutter: 30,
      controlsText: ['', ''],
      nav: true,
      navPosition: 'bottom',
      mouseDrag: true,
      //edgePadding: 250,
      loop: false,
      responsive: {
      378: {
        items: 1,
        gutter: 0,
        edgePadding: 0,
        controls: false
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 2,
        controls: true
      },
      700: {
        gutter: 0,
        items: 3,
        controls: true
      },
      900: {
        items: 4,
        controls: true
      } 
      }
    });

    sliderCollectionMain.events.on('transitionEnd', function (info, eventName) {
      $('.slider-collection-list-wrapper').addClass('moved');
    });
  }

  $('.main-form-input, .cart-field-input').keyup(function () {
    if (this.value.length) {
      $(this).addClass('filled');
    } else {
      $(this).removeClass('filled');
    }
  });

  function initInputCount() {
    if ($('.cart-product-count-input').length) {
      var btnPlus = '<button class="cart-product-count-btn count-btn-plus"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="6.60547" width="13" height="1" rx="0.5" fill="currentColor"/><rect x="6" y="13.6055" width="13" height="1" rx="0.5" transform="rotate(-90 6 13.6055)" fill="currentColor"/></svg></button>';
      var btnMinus = '<button class="cart-product-count-btn count-btn-minus"><svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.605469" width="13" height="1" rx="0.5" fill="currentColor"/></svg></button>';

      $('.cart-product-count-input').append(btnPlus);
      $('.cart-product-count-input').prepend(btnMinus);

      $(document).on('click', '.cart-product-count-btn', function (e) {
        e.preventDefault();

        var count = parseInt($(this).siblings('input').val());

        if ($(this).hasClass('count-btn-plus')) {
          count += 1;
        } else {
          count -= 1;
        }

        if (count < 1) {
          count = 1;
        }

        $(this).siblings('input').val(count);
      });
    }
  }

  initInputCount();

  $('.cart-order-btn').click(function () {
    $.fancybox.open({
      src: '.popup-order-success',
      type: 'inline'
    });
  });

  $(document).on('click', '.popup-fancybox-btn-close', function (e) {
    e.preventDefault();
    $.fancybox.close();
  });

  /*if ($('.slider-product-list').length) {
    var sliderProductMain = tns({
      container: '.slider-product-list',
      items: 4,
      gutter: 20,
      controlsText: ['', ''],
      nav: true,
      navPosition: 'bottom',
      mouseDrag: true,
      edgePadding: 40,
      loop: false,
      responsive: {
        378: {
          items: 1,
          gutter: 0,
          edgePadding: 0
        },
        640: {
        edgePadding: 0,
        gutter: 0,
        items: 2
      },
      700: {
        gutter: 0,
        items: 3
      },
      900: {
        items: 4
      } 
      }
    });
  }*/



});

$('.character-button').click(function(e){
    e.preventDefault(); // это отключает стандартное поведение элемента, по клику на ссылку не будет перехода, по клику на кнопку не будет события отправки и т.д.
    $('.collapse').not($(this).siblings('.collapse')).slideUp(); // сворачивает все блок, кроме текущего
    $('.card').not($(this).parents('.card')).removeClass('active'); // убирает класс active у всех карточке, кроме текущей
    $(this).siblings('.collapse').slideToggle();
    $(this).parents('.card').toggleClass('active');
});




$('.menu-main-btn-toggle').click(function(e){
e.preventDefault();
$(this).parent().toggleClass('open');
});



/*$('.footer-title').click(function(r){
    r.preventDefault(); // это отключает стандартное поведение элемента, по клику на ссылку не будет перехода, по клику на кнопку не будет события отправки и т.д.
    $('.footer-submenu-ul').not($(this).siblings('.footer-submenu-ul')).slideUp(); // сворачивает все блок, кроме текущего
    $('.footer-menu-li').not($(this).parents('.footer-menu-li')).removeClass('active'); // убирает класс active у всех карточке, кроме текущей
    $(this).siblings('.footer-submenu-ul').slideToggle();
    $(this).parents('.footer-menu-li').toggleClass('active');
});*/


function initFooterSlide(){
  if ( $(window).width() < 768) {
    $('.footer-title').unbind('click');
    $('.footer-title').click(function(r){
       r.preventDefault(); // это отключает стандартное поведение элемента, по клику на ссылку не будет перехода, по клику на кнопку не будет события отправки и т.д.
    $('.footer-submenu-ul').not($(this).siblings('.footer-submenu-ul')).slideUp(); // сворачивает все блок, кроме текущего
    $('.footer-menu-li').not($(this).parents('.footer-menu-li')).removeClass('active'); // убирает класс active у всех карточке, кроме текущей
    $(this).siblings('.footer-submenu-ul').slideToggle();
    $(this).parents('.footer-menu-li').toggleClass('active');
    });
  };
}
initFooterSlide();

$(window).resize(function(){
  initFooterSlide();
});


