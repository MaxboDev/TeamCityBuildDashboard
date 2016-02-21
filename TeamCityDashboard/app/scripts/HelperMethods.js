﻿var HelperMethods = new function() {
  this.DisplayError = function(target, message) {
    var $errorMessageBox = $("<span class='error-message'><span class='message'>" + message + "</span><span class='close-button'><i class='fa fa-times'></i></span></span>");
    $errorMessageBox.find(".close-button").on("click", function (e) {
      $(this).parent(".error-message").fadeOut(300, function() {
        $(this).parent(".error-message").remove();
      });
    });
    $errorMessageBox.css("opacity", 0);
    $(target).html($errorMessageBox);
    $errorMessageBox.fadeTo(300, 1);
  }

  this.ClearErrors = function(target) {
    $(target).find(".error-message").fadeOut(300, function () {
      $(target).find(".error-message").remove();
    });
  }
}