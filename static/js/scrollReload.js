function scrollPosReaload($scrollContainer) {
  if (localStorage) {
      var posReader = localStorage["posStorage"];
      if (posReader) {
        console.log("asdfasdg")
          $scrollContainer.scrollTop(posReader);
          localStorage.removeItem("posStorage");
      }
      $(this).click(function(e) {
          localStorage["posStorage"] = $scrollContainer.scrollTop();
      });

      return true;
  }

  return false;
}

jQuery(document).ready(function() {
  scrollPosReaload($('#sidebar .highlightable'));
});