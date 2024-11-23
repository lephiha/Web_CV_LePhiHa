$(function () {
  $(window).on("scroll load", function () {
    const body = $("html, body").scrollTop();
    if (body >= 100) {
      $(".header__nav").addClass("header__nav-sticky");
      $(".back-to-top").fadeIn(300);
    } else {
      $(".header__nav").removeClass("header__nav-sticky");
      $(".back-to-top").fadeOut(300);
    }
  });

  $(".back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });

  $(".header__nav-item-link").on("click", function () {
    var href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      1000
    );
  });

  $(window)
    .on("scroll", function () {
      var body = $(window).scrollTop();

      $(".position").each(function (i) {
        if ($(this).position().top <= body) {
          $(".header__nav-item-link.active").removeClass("active");
          $(".header__nav-item-link").eq(i).addClass("active");
        }
      });
    })
    .scroll();
});
