document.querySelectorAll("#navlinks a").forEach(function (link) {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});
