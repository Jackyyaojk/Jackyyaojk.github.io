(function($){
  $(document).ready(function(){
    function initCarousel($root){
      var $track = $root.find('.carousel-track');
      var $slides = $track.find('.carousel-slide');
      var total = $slides.length;
      var index = 0;

      // expose total and index on the root so delegated handlers stay in sync
      $root.data('carousel-total', total);
      $root.data('carousel-index', index);

      var $dots = $root.find('.carousel-dots');
      for(var i=0;i<total;i++){
        var $b = $('<button type="button" aria-label="Show slide '+(i+1)+'"></button>');
        if(i===0) $b.addClass('is-active');
        (function(btn, idx){ btn.on('click', function(e){ e.preventDefault(); goTo(idx); }); })($b, i);
        $dots.append($b);
      }

      function update(){
        // use pixel-based shift to avoid percent rounding/box issues
        var wrapperWidth = $root.find('.carousel-track-wrapper').width() || $root.width();
        var shift = Math.round(index * wrapperWidth);
        $track.css('transform','translateX(-' + shift + 'px)');
        $dots.find('button').removeClass('is-active').eq(index).addClass('is-active');
        $root.data('carousel-index', index);
      }
      function goTo(i){ index = (i + total) % total; update(); }
      $root.find('.next').on('click', function(e){ e.preventDefault(); goTo(index+1); });
      $root.find('.prev').on('click', function(e){ e.preventDefault(); goTo(index-1); });

      // keyboard
      $root.on('keydown', function(e){ if(e.key === 'ArrowLeft') goTo(index-1); if(e.key === 'ArrowRight') goTo(index+1); });
      $root.attr('tabindex',0);
      // recalc on resize
      $(window).on('resize', function(){ update(); });
      update();
    }

    // expose an initializer so dynamically-inserted carousels can be wired up
    window.CarouselInit = function(el){
      if(!el){ $('.photo-carousel').each(function(){ initCarousel($(this)); }); return; }
      var $el = (el instanceof jQuery) ? el : $(el);
      initCarousel($el);
    };

    $('.photo-carousel').each(function(){ initCarousel($(this)); });

    // No document-level delegated handlers — each carousel instance wires its own handlers

  });
})(jQuery);
