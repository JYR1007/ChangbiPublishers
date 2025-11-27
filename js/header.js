$(function(){

      let lastScrollTop = 0;
      let isScroll = false;
      let header = $("header");
      let headerHeight = header.outerHeight(); 
      console.log(headerHeight)

      $(window).on('scroll',function(){
        let scrollTop = $(this).scrollTop();
        console.log(scrollTop);

        if( scrollTop > headerHeight){

          if( scrollTop > lastScrollTop && !isScroll ){
            header.addClass('hidden');
            isScroll = true;
          } 
          else if(scrollTop < lastScrollTop && isScroll) {
            header.removeClass('hidden')
            isScroll = false;
          }

        } else {
          header.removeClass("hidden");
          isScroll = false
        }

        lastScrollTop = scrollTop
      
      });

    });