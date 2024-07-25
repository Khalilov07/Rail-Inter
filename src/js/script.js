document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");

  // Показать/скрыть кнопку в зависимости от прокрутки
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.add("visible");
    } else {
      scrollToTopButton.classList.remove("visible");
    }
  });

  // Прокрутка вверх при клике на кнопку
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});