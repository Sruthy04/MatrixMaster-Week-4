$(document).ready(function () {
    $(".toggle-image").click(function () {
     var currentImage = $(this).attr('src');
     var altImage = $(this).data('alt');
     $(this).attr('src', altImage);
     $(this).data('alt', currentImage);
    });
   });