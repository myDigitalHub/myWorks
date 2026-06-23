jQuery(document).ready(function ($) {



    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top-50
        }, 1500, 'easeInOutQuint');
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });



$(function() {
  
  var is_iPad = navigator.userAgent.match(/iPad/i) != null;
  
  if (is_iPad) {
    $("body").addClass("is-iPad");
  }
  
  var update_offsets = function() {
    for (var i = 0, l = sections.length; i < l; i++) {
      var section = sections[i];
      var el = $(".section." + section);
      offsets[section] = el.offset().top;
    }    
  }
    
  var w = $(window), fixed = $(".section.fixed"), offset;
  w.on("scroll", function() {
    offset = w.scrollTop();
    
    if (offset > 500) fixed.addClass("visible");
    else fixed.removeClass("visible");

    update_offsets();

    var section = sections[0];
    for (var i = 0, l = sections.length; i < l; i++) {
      if (offsets[sections[i]] - 68 <= offset) section = sections[i];
    }
    
    if (section != current_section) {
      current_section = section;
      $(".fixed a").removeClass("active");
      $(".fixed a." + current_section).addClass("active");
    }

  }).trigger("scroll");
  
  
  var resize_timer, contact_constrained = $(".section.contact .constrained");
  w.on("resize", function() {
    clearTimeout(resize_timer);
    resize_timer = setTimeout(function() {
      contact_constrained.css({ "min-height": px(w.height() - 160)});
      compensation = (w.width() <= 320) ? 0 : 67;
    }, 500);
  }).trigger("resize");
  
    

});

});