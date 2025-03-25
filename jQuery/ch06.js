$().ready(function () {
  $(".vacation-title")
    .on("mouseenter", function () {
      $(".ticket").show(); // 엘리먼트를 노출시킨다 : display: block;
    })
    .on("mouseleave", function () {
      $(".ticket").hide(); // 엘리먼트를 숨긴다: display: none;
    });
});
