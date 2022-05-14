let pageUp = document.getElementById("page_up");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1400 ||
    document.documentElement.scrollTop > 1400
  ) {
    pageUp.style.display = "block";
  } else {
    pageUp.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

(function ($) {
  $(function () {
    $("ul.specialist_tabs").on(
      "click",
      "li:not(.specialist_tab_active)",
      function () {
        $(this)
          .addClass("specialist_tab_active")
          .siblings()
          .removeClass("specialist_tab_active")
          .closest("div.container-fluid")
          .find("div.specialist_content")
          .removeClass("specialist_content_active")
          .eq($(this).index())
          .addClass("specialist_content_active");
      }
    );
  });

  // Specialists Cards flipping
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".specialist-card_content")
          .eq(i)
          .toggleClass("specialist-card_content_active");
        $(".specialist-card_inf")
          .eq(i)
          .toggleClass("specialist-card_inf_active");
      });
    });
  }

  toggleSlide(".specialist-card_link");
  toggleSlide(".specialist-card_back");
})(jQuery);
