document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".list-btn");

  buttons.forEach(function (button) {
    const title = button.closest(".list-title");
    const panel = title ? title.nextElementSibling : null;
    if (!panel) return;

    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", function () {
      const isOpen = panel.classList.toggle("is-open");
      button.classList.toggle("is-active", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
});
