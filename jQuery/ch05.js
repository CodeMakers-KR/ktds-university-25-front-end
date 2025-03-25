$().ready(function () {
  //   document
  //     .querySelectorAll(".package-green-button")
  //     .forEach(function (element) {
  //       element.addEventListener("click", function (event) {
  //         console.log(this);
  //         //var clickedButton = event.target;
  //         this.style.display = "none";
  //         //console.log(clickedButton);
  //       });
  //     });
  $(".package-green-button").on("click", function () {
    var amount = $(this).closest(".package").data("price");
    console.log(amount);

    var priceElement = $("<p></p>");
    priceElement.addClass("new-price-element");
    priceElement.text("From $" + amount);
    priceElement.on("click", function () {
      alert("새롭게 만든 객체입니다.");
    });

    $(this).closest(".package-button-area").append(priceElement);
    $(this).remove();
  });

  // $(".package-button-area").on("click", ".new-price-element", function () {
  //   alert("!");
  // });
});
