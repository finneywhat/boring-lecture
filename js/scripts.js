$(document).ready(function() {
  $("#click-here").click(function() {
    $("#highlight-para").toggleClass("highlight-paragraph");
  });
  $(".btn").click(function() {
    $("#image").toggleClass("border-image")
  });
});
