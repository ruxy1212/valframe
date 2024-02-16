function nextPage() {
    window.location.href = "yes.html";
  }
  $(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".lid").css("transform", "rotateX(-180deg)").animate(
            { dummyProperty: 0 },
            {
              duration: 300,
              complete: function() {
                $(this).css("z-index", "0");
              }
            }
          );
        $(".card").stop().delay(1000).animate(
          {
            top: "-90px"
          },
          "slow"
        );
        $('.hearts').fadeOut();
        $('.open_text').fadeOut();
        $('.verdict').fadeIn();
      })
      .mouseleave(function () {
        $(".card").stop().animate(
          {
            top: "10px"
          },
          "slow"
        );
        $('.hearts').fadeIn();
        $(".lid").animate(
            { dummyProperty: 0 },
            {
              duration: 800,
              complete: function() {
                $(this).css("transform", "rotateX(0deg)").css("z-index", "12");
                // $('.open_text').fadeIn();
                // $('.verdict').fadeOut();
              }
            }
        );
      });
  });