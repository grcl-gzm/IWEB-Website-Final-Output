// Scroll to top when clicking the "Personal Projects" title
document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("personal-projects");

  if (title) {
    title.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
