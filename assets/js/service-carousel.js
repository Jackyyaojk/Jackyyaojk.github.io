(function($){
  $(document).ready(function(){
    $('.service-card').on('click', function(e){
      e.preventDefault();
      var gallery = $(this).data('gallery');
      if(!gallery) return;
      var tmpl = document.getElementById('gallery-' + gallery);
      if(!tmpl) return;
      var slidesHtml = tmpl.innerHTML;
      var $old = $('.photo-carousel');
      var $new = $(
        '<section class="photo-carousel" aria-label="Photo carousel">' +
        '  <div class="carousel-track-wrapper">' +
        '    <div class="carousel-track">' + slidesHtml + '</div>' +
        '  </div>' +
        '  <button type="button" class="carousel-btn prev" aria-label="Previous slide">‹</button>' +
        '  <button type="button" class="carousel-btn next" aria-label="Next slide">›</button>' +
        '  <div class="carousel-dots" aria-hidden="false"></div>' +
        '</section>'
      );
      $old.replaceWith($new);
      // initialize the new carousel instance
      if(window.CarouselInit) window.CarouselInit($new);
      // scroll into view a bit so user sees the carousel
      $('html, body').animate({ scrollTop: $new.offset().top - 80 }, 300);
    });
  });
})(jQuery);
