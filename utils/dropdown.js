document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".dropdown-btn")
    .addEventListener("click", function () {
      document.querySelector(".dropdown-content").classList.toggle("show");

      // Get the icon element inside the button
      const icon = this.querySelector("i");

      // Toggle between up and down icons
      if (icon.classList.contains("fa-angle-down")) {
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-up");
      } else {
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
      }
    });
});
