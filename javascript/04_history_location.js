window.onload = function () {
  document.querySelector(".go-back").addEventListener("click", function () {
    history.back();
  });

  document.querySelector(".go-forward").addEventListener("click", function () {
    history.forward();
  });

  document.querySelector(".go-url").addEventListener("click", function (event) {
    location.href = event.target.dataset.url;
  });

  document.querySelector(".refresh").addEventListener("click", function () {
    location.reload();
  });
};
