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

document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = window.location.pathname;
  const menuItems = document.querySelectorAll(".nav-link");

  console.log(currentLocation);
  console.log(menuItems);

  menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentLocation) {
      item.classList.add("active");
    }
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const serviceBlocks = document.querySelectorAll(".service-block");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       threshold: 0,
//     }
//   );

//   serviceBlocks.forEach((block) => {
//     observer.observe(block);
//   });
// });
