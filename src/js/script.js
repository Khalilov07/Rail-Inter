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

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Обработчик появления блоков
function handleScroll() {
  const blocks = document.querySelectorAll(
    ".block, .services__item, .feature-item, .services__item"
  );

  console.log(blocks);

  blocks.forEach((block) => {
    if (isInViewport(block)) {
      block.classList.add("visible");
      block.classList.remove("hidden");
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.services__swiper', {
    slidesPerView: 3, // Количество слайдов, видимых одновременно
    spaceBetween: 20, // Расстояние между слайдами
    loop: true, // Бесконечный цикл
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000, // Автопрокрутка каждые 4 секунды
      disableOnInteraction: false, // Продолжать автопрокрутку даже после взаимодействия
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});


// Запуск обработчика при загрузке страницы и прокрутке
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
