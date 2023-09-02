$(window).ready(function async() {
  setTimeout(function () {
    $("#mainReveal").addClass("mainRevealAnim");
    $(".cover").addClass("coverAnim");
    $(".topCover").addClass("topCoverAnim");
  }, 70);
  setTimeout(function () {
    $(".topCover").addClass("hidden");
    $("#navbar").removeClass("z-[3]");
    $("#navbar").addClass("z-[2]");
  }, 1000);
});

//I TRIED BREAKPOINTS AND CLASS ADDITIONS-------------------------
// let mqXL = window.matchMedia("(max-width: 1199px)");
// let mqLG = window.matchMedia("(max-width: 991px)");
// let mqMD = window.matchMedia("(max-width: 768px)");
// if (mqMD.matches) {
//   $(".purple3").addClass(".greyBdr-all");
// } else {
//   $(".purple3").removeClass(".greyBdr-all");
// }
