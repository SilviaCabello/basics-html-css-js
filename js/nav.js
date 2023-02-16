window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").classList.add("fix_nav");
    document.body.classList.add("body_padding");
  } else {
    document.getElementById("nav").classList.remove("fix_nav");
    document.body.classList.remove("body_padding");
  }
}