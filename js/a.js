    $(function () {
      // 메인 메뉴 항목에 마우스를 올렸을때 

      $(".menu>li").on({
        mouseenter: function () {
          // 모든메뉴와 서브메뉴 초기화

          $(".menu>li").removeClass("active");
          $(".submenu").removeClass("active");

          $(this).addClass("active");
          $(this).find(".submenu").addClass("active");
          $(".submenu_bg").addClass("active")
        }
      });

      $("header").on('mouseleave', function () {
        $(".menu>li").removeClass("active");
        $(".submenu").removeClass("active");
        $(".submenu_bg").removeClass("active")
      });
    });