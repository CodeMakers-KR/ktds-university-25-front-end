window.onload = function () {
  // 1초 단위로 콘솔 출력하기.
  //var interval = setInterval(일정 간격 마다 실행될 함수, 간격);

  var timerInterval;

  document
    .querySelector(".start-interval")
    .addEventListener("click", function () {
      timerInterval = setInterval(function () {
        console.log("0.1초 단위로 콘솔을 출력중입니다.");
      }, 100);
    });

  document
    .querySelector(".end-interval")
    .addEventListener("click", function () {
      clearInterval(timerInterval);
    });

  // 함수의 실행을 지연시킨다.
  //setTimeout(지연시킬 함수, 시연시킬 초);
  var seconds = 0;
  setTimeout(function () {
    function timer() {
      seconds++;

      var minutes = parseInt(seconds / 60);
      var remainSeconds = seconds % 60;

      document.querySelector(".minutes").innerText = minutes;
      document.querySelector(".seconds").innerText = remainSeconds;

      setTimeout(timer, 1000);
    }
    timer();
  }, 1000);
};
