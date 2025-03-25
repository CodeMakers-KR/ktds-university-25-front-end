$().ready(function () {
  // 함수 표현식.
  var functionChangeColor = function () {
    var hexColor = $(this).data("hex-color");
    $(".big-thumbnail").css("backgroundColor", hexColor);
    $(".big-thumbnail").text(hexColor + "를 선택했습니다.");
  };

  $(".small-thumbnails").children("li").on("click", functionChangeColor);

  $(".add-color-button").on("click", function () {
    // 1. ".color-picker"의 값을 읽어온다.
    var pickedColor = $(".color-picker").val(); // input태그의 값을 가져오는 함수.

    // 2. "<li></li>" 엘리먼트를 만들어서
    //    inline-style로 백그라운드 색상을 지정한다.
    //    text는 "임의색상" 혹은 "색상코드" 으로 추가한다.
    var newListItem = $("<li></li>");
    newListItem.css("backgroundColor", pickedColor);
    newListItem.data("hex-color", pickedColor);
    newListItem.text(pickedColor);

    // 3. "li" 엘리먼트에 클릭 이벤트를 할당해서
    //    ".big-thumbnail"의 배경색을 지정한다.
    newListItem.on("click", functionChangeColor);

    $(this).closest(".add-color").before(newListItem);
  });
});
