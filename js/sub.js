$(function () {
  //lnb lnb
  $(".lnb_list > li > a").each(function () {
    if ($(this).next(".depth02").find("li").length) {
      $(this).addClass("in_ul");
    }
  });
  $(".lnb_list a.in_ul").on("click", function () {
    $(this).toggleClass("active");
    $(this).next(".depth02").stop(true, false).slideToggle(100);
    return false;
  });

  //sub_headbar
  $(".sub_depth_box > a").on("click", function () {
    $(this).toggleClass("active");
    return false;
  });
  $(".sub_depth_box").on("click", function (e) {
    e.stopPropagation();
  });
  $(document).click(function () {
    $(".sub_depth_box > a").removeClass("active");
  });
});
