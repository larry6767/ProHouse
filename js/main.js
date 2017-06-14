$(document).ready(function () {

  $("input[type='tel']").mask("+7 (999) 999-99-99");

  $("a[href='#']").click(function(e) {
      e.preventDefault();
  });

  $("a.main-navigation__link").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });

  if ($(window).width() >= '1440') {
    $('.x-slider-iframe').attr('width', 536);
    $('.x-slider-iframe').attr('height', 350);
    $('.x-to-iframe').attr('width', 800);
    $('.x-to-iframe').attr('height', 450);
  } else if ($(window).width() >= '1024') {
    $('.x-slider-iframe').attr('width', 448);
    $('.x-slider-iframe').attr('height', 250);
    $('.x-to-iframe').attr('width', 600);
    $('.x-to-iframe').attr('height', 350);
  } else if ($(window).width() >= '768') {
    $('.x-slider-iframe').attr('width', 550);
    $('.x-slider-iframe').attr('height', 300);
    $('.x-to-iframe').attr('width', 600);
    $('.x-to-iframe').attr('height', 350);
  } else if ($(window).width() >= '320') {
    $('.x-slider-iframe').attr('width', 300);
    $('.x-slider-iframe').attr('height', 200);
    $('.x-to-iframe').attr('width', 300);
    $('.x-to-iframe').attr('height', 200);
  }

  $('.x-slider').slick({
      infinite: !0,
      speed: 300,
      variableWidth: !1,
      draggable: !0,
      useCSS: !0,
      dots: !0,
      prevArrow: '<div class="prev"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="16.813" height="31.91" viewBox="0 0 16.813 31.91"><path d="M.967 31.907c-.253 0-.506-.097-.7-.292-.386-.39-.386-1.02 0-1.41l14.148-14.252L.268 1.7C-.12 1.313-.12.68.268.29c.386-.388 1.013-.388 1.4 0L16.514 15.25c.386.39.386 1.02 0 1.41L1.667 31.615c-.193.195-.446.292-.7.292z" class="cls-1"/></svg></div>',
      nextArrow: '<div class="next"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="16.813" height="31.91" viewBox="0 0 16.813 31.91"><path d="M.967 31.907c-.253 0-.506-.097-.7-.292-.386-.39-.386-1.02 0-1.41l14.148-14.252L.268 1.7C-.12 1.313-.12.68.268.29c.386-.388 1.013-.388 1.4 0L16.514 15.25c.386.39.386 1.02 0 1.41L1.667 31.615c-.193.195-.446.292-.7.292z" class="cls-1"/></svg></div>',
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: !0,
      responsive: [{
          breakpoint: 1300,
          settings: {
              arrows: !1
          }
      }]
  });

  //from submit
  $('form').submit(function(e) {
    e.preventDefault();
    ajaxSubmit($(this));
  });

  function ajaxSubmit(item) {
    console.log("ajaxSubmit" + item);
    var msg = $(item).serialize();
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: msg,
      success: function(data) {
          alert(data);
          $.arcticmodal('close');
      },
      error: function(xhr, str) {
          alert("Возникла ошибка!" + str);
      }
    });
  }

  //modal content
  $(".x-show-modal").click(function(argument) {
    var btn = $(this);
    var item = btn.closest(".item").children(".title").html();
    var subItem = btn.closest(".goods-filter").children(".goods__column-title").html();
    if (item !== undefined) {
      item = item + " " + subItem
    } else if (item == undefined) {
      item = btn.attr("title");
      if (item == undefined) {
        item = btn.html();
      }
    }
    if (btn.hasClass("btn-order")) {
      item = "Для участия в акции сообщите нам:";
    }
    $('.x-modal-content').arcticmodal({
      beforeOpen: function(data, el) {
        el.find(".form-title").text(item);
      }
    });
  });
});
