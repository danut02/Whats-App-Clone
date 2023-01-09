window.addEventListener("scroll", function () {
    let header = document.getElementById("div1");
    if (window.scrollY > 0) header.classList.toggle("sticky");
    else header.classList.remove("sticky");
  });
  let click = document.getElementsByClassName("underline_title");
  let dropdown = document.getElementById("dropdown");
  let cnt = 0;
  click[0].onclick = function () {
    cnt++;
    if (cnt % 2) dropdown.style.display = "flex";
    else dropdown.style.display = "none";
  };

  let arrow1 = document.getElementsByClassName("arrow1");
  let arrow2 = document.getElementsByClassName("arrow2");
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  let img3 = document.getElementById("img3");
  let img4 = document.getElementById("img4");
  let text1 = document.getElementById("text_img1");
  let text2 = document.getElementById("text_img2");
  let text3 = document.getElementById("text_img3");
  let text4 = document.getElementById("text_img4");
  let cnt_arrow1 = 0;
  let cnt_arrow2 = 0;
  if (cnt_arrow2 == 0) {
    arrow1[0].style.opacity = "0.3";
  }
  arrow2[0].onclick = function () {
    img1.style.display = "none";
    img2.style.transition = "all 1s";
    arrow1[0].style.transition = "opacity 1s";
    arrow2[0].style.transition = "opacity 1s";
    img2.style.left = "680px";
    img3.style.transition = "all 1s";
    img3.style.left = "1020px";
    img4.style.transition = "all 1s";
    img4.style.left = "1380px";
    text1.style.display = "none";
    text1.style.transition = "all 1s";
    text2.style.transition = "all 1s";
    text3.style.transition = "all 1s";
    text4.style.transition = "all 1s";
    text2.style.left = "800px";
    text2.style.top = "180px";
    text3.style.left = "1120px";
    text3.style.top = "65px";
    text4.style.left = "1450px";
    text4.style.top = "-45px";
    arrow1[0].style.top = "-190px";
    arrow2[0].style.top = "-190px";
    if (cnt_arrow2 >= 0) arrow1[0].style.opacity = "1";

    cnt_arrow2++;
    if (cnt_arrow2 == 5) arrow2[0].style.opacity = "0.3";
  };