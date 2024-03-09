$(document).ready(function () {
    //click function
       $("#fade-btn").click(function () {
      $("#fade-text").fadeOut();
    });
  
    // Append function
    $("#append-btn").click(function () {
      $("#append-text").append("<p>Sruthy is continuing to program.</p>");
    });
  
    // Change color function
    $("#change-color-btn").click(function () {
      $("#change-color-text").addClass("red-text");
    });
  
    // FadeIn function
    $("#fade-in-btn").click(function () {
      $("#fade-text").fadeIn();
    });
  
    // Append function
    $("#append-content-btn").click(function () {
      $("#append-content-text").append("<p>More appended content.</p>");
    });
  
    // HTML function
    $("#html-btn").click(function () {
      $("#html-text").html("<em>Changed HTML content</em>");
    });
  
    // Text function
    $("#text-btn").click(function () {
      $("#text-content").text("Changed text content");
    });
  
    // Val function
    $("#val-btn").click(function () {
      var inputVal = $("#input-text").val();
      console.log("Input value: " + inputVal);
    });
  
    // Hide function
    $("#hide-btn").click(function () {
      $("#hide-text").hide();
    });
  
    // Show function
    $("#show-btn").click(function () {
      $("#show-text").show();
    });
  
    // SlideDown function
    $("#slide-btn").click(function () {
      $("#slide-text").slideDown();
    });
  });