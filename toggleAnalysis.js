//TOGGLE ANALYSIS-------------------------
$(document).ready(function async() {
  // remove 'analysis-[color]... classes from elements'
  $(".analysis").each(function () {
    $(this).removeClass(
      "analysis-Red analysis-Green analysis-Yellow analysis-Cyan analysis-Purple"
    );
  });

  setTimeout(function () {
    $("#mainReveal").addClass("mainRevealAnim");
    $(".cover").addClass("coverAnim");
    $(".topCover").addClass("topCoverAnim");
    $("#navbar").removeClass("z-[3]");
    $("#navbar").addClass("z-[2]");
  }, 10);
  setTimeout(function () {
    $(".topCover").addClass("hidden");
  }, 2000);
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
