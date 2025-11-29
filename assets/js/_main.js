/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
   // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 925 : !$(".author__urls-wrapper button").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper button").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // Simple photo carousel initialization
  (function(){
    function initCarousel($root){
      var $track = $root.find('.carousel-track');
      var $slides = $track.find('.carousel-slide');
      var total = $slides.length;
      var index = 0;

      var $dots = $root.find('.carousel-dots');
      for(var i=0;i<total;i++){
        var $b = $('<button type="button" aria-label="Show slide '+(i+1)+'"></button>');
        if(i===0) $b.addClass('is-active');
        (function(btn, idx){ btn.on('click', function(e){ e.preventDefault(); goTo(idx); }); })($b, i);
        $dots.append($b);
      }

      function update(){
        // translateX percent is relative to the track's width, so move by (index/total*100)%
        var pct = (index * 100) / total;
        $track.css('transform','translateX(-' + pct + '%)');
        $dots.find('button').removeClass('is-active').eq(index).addClass('is-active');
      }
      function goTo(i){ index = (i + total) % total; update(); }
  $root.find('.next').on('click', function(e){ e.preventDefault(); goTo(index+1); console.log('carousel next clicked'); });
  $root.find('.prev').on('click', function(e){ e.preventDefault(); goTo(index-1); console.log('carousel prev clicked'); });

      // keyboard
      $root.on('keydown', function(e){ if(e.key === 'ArrowLeft') goTo(index-1); if(e.key === 'ArrowRight') goTo(index+1); });
      // make slides focusable for keyboard
      $root.attr('tabindex',0);
      // initial
      update();
    }

    $('.photo-carousel').each(function(){ initCarousel($(this)); });
    // Delegated handlers as a fallback (ensures clicks work even if per-instance binding failed)
    $(document).on('click', '.photo-carousel .next', function(e){
      e.preventDefault();
      var $root = $(this).closest('.photo-carousel');
      var total = $root.find('.carousel-slide').length;
      var idx = $root.data('carousel-index') || 0;
      idx = (idx + 1) % total;
      $root.data('carousel-index', idx);
      var pct = (idx * 100) / total;
      $root.find('.carousel-track').css('transform','translateX(-' + pct + '%)');
      $root.find('.carousel-dots button').removeClass('is-active').eq(idx).addClass('is-active');
    });

    $(document).on('click', '.photo-carousel .prev', function(e){
      e.preventDefault();
      var $root = $(this).closest('.photo-carousel');
      var total = $root.find('.carousel-slide').length;
      var idx = $root.data('carousel-index') || 0;
      idx = (idx - 1 + total) % total;
      $root.data('carousel-index', idx);
      var pct = (idx * 100) / total;
      $root.find('.carousel-track').css('transform','translateX(-' + pct + '%)');
      $root.find('.carousel-dots button').removeClass('is-active').eq(idx).addClass('is-active');
    });

    $(document).on('click', '.photo-carousel .carousel-dots button', function(e){
      e.preventDefault();
      var $btn = $(this);
      var idx = $btn.index();
      var $root = $btn.closest('.photo-carousel');
      var total = $root.find('.carousel-slide').length;
      $root.data('carousel-index', idx);
      var pct = (idx * 100) / total;
      $root.find('.carousel-track').css('transform','translateX(-' + pct + '%)');
      $root.find('.carousel-dots button').removeClass('is-active').eq(idx).addClass('is-active');
    });
  })();

  // Single-page navigation removed: navigation will use normal page links

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
