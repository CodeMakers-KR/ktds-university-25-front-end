$().ready(function () {
  // value="1"
  $("#package-ticket-count").val(1);

  $("#package-ticket-count")
    .on("keyup", function () {
      var count = parseInt($(this).val());
      // 공백문자를 parseInt 하면 NaN(Not a Number)가 나온다.
      // 만약 count가 NaN(Not a Number) 라면 count의 값을 1로 할당하도록 한다!
      // count의 값이 음수라면, 강제로 1을 할당하도록 한다!
      if (count < 0 || isNaN(count)) {
        count = 1;
      }

      // input type=number 의 값을 변경한다.
      $(this).val(count);

      var price = $(this).closest(".ticket-purchase").data("price");

      var amount = price * count;
      $("#amount").text(amount);
    })
    .on("blur", function () {
      /**
       * jqueryobject.on("event", event handler);
       * jqueryobject.trigger("event");
       */
      $(this).trigger("keyup");

      console.log("태그의 포커스를 잃었습니다. 현재 입력된 값은");
      console.log($(this).val() + "입니다.");
    })
    .on("change", function () {
      $(this).trigger("keyup");
    });
});
