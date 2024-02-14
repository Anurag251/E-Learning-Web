const header = document.querySelector("header");

document.querySelector("main").addEventListener("scroll", (e) => {
  if (e.target.scrollTop > 600 && e.target.scrollTop < 1300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  var box = document.querySelector("#featureSection");
  var position = box.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    box.style.animationPlayState = "running";
  } else {
    box.style.animationPlayState = "paused";
  }
});
