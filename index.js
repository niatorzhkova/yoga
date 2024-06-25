// // Скролл до секций

// function handleClickLink(event) {
//   const block = event.currentTarget.dataset.block;
//   const scrollToBlock = document.getElementById(block);
//   scrollToBlock.style.scrollMargin = "100px";
//   seamless.scrollIntoView(scrollToBlock, {
//     behavior: "smooth",
//     inline: "center",
//     block: "start",
//   });
// }

// document.querySelectorAll(".menu__item").forEach((elem) => {
//   elem.addEventListener("click", handleClickLink);
// });
// // const bookBtn = document.querySelector(".book-btn");
// // bookBtn.addEventListener("click", handleClickLink);

// // Всплывающее меню

// function showFixedBanner() {
//   const currentScroll = window.scrollY || document.documentElement.scrollTop;
//   if (currentScroll > 700) {
//     $(".header-fixed").removeClass("hidden");
//     $(".header-fixed").addClass("shown");
//   } else {
//     $(".header-fixed").removeClass("shown");
//     $(".header-fixed").addClass("hidden");
//   }
// }

// function throttle(callee, timeout) {
//   let timer = null;
//   return function perform(...args) {
//     if (timer) return;
//     timer = setTimeout(() => {
//       callee(...args);
//       clearTimeout(timer);
//       timer = null;
//     }, timeout);
//   };
// }

// window.addEventListener("scroll", throttle(showFixedBanner, 250), false);

// // Скролл клиентов

// $.fn.andSelf = function () {
//   return this.addBack.apply(this, arguments);
// };

// const scrollContainer = document.getElementById("clients-scroll");
// const scrollContainerScnd = document.getElementById("clients-scroll-scnd");
// const page = document.querySelector(".page");

// var owl = $(".owl-carousel");
// owl.owlCarousel({
//   loop: true,
//   margin: 0,
//   nav: true,
//   navText: [
//     "<i class='fa fa-caret-left'></i>",
//     "<i class='fa fa-caret-right'></i>",
//   ],
//   touchDrag: true,
//   autoplay: 0.5,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 3,
//     },
//   },
// });

// // Скролл отзывов

// const box = document.getElementById("reviews-container");

// let isDown = false;
// let startX;
// let scrollLeft;

// if (box) {
//   box.addEventListener("mousedown", (e) => {
//     isDown = true;
//     startX = e.pageX - box.offsetLeft;
//     scrollLeft = box.scrollLeft;
//     box.style.cursor = "grabbing";
//   });

//   box.addEventListener("mouseleave", () => {
//     isDown = false;
//     box.style.cursor = "grab";
//   });

//   box.addEventListener("mouseup", () => {
//     isDown = false;
//     box.style.cursor = "grab";
//   });

//   document.addEventListener("mousemove", (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - box.offsetLeft;
//     const walkX = x - startX;
//     box.scrollLeft = scrollLeft - walkX;
//   });
// }

// // Скролл "Вы научитесь"

// const boxLearn = document.getElementById("learn-container");

// let isDownLearn = false;
// let startXLearn;
// let scrollLeftLearn;

// boxLearn.addEventListener("mousedown", (e) => {
//   isDownLearn = true;
//   startXLearn = e.pageX - boxLearn.offsetLeft;
//   scrollLeftLearn = boxLearn.scrollLeft;
//   boxLearn.style.cursor = "grabbing";
// });

// boxLearn.addEventListener("mouseleave", () => {
//   isDownLearn = false;
//   boxLearn.style.cursor = "grab";
// });

// boxLearn.addEventListener("mouseup", () => {
//   isDownLearn = false;
//   boxLearn.style.cursor = "grab";
// });

// document.addEventListener("mousemove", (e) => {
//   if (!isDownLearn) return;
//   e.preventDefault();
//   const x = e.pageX - boxLearn.offsetLeft;
//   const walkXLearn = x - startXLearn;
//   boxLearn.scrollLeft = scrollLeftLearn - walkXLearn;
// });

// Youtube player

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: "cA3xM_3t9N4",
  });
}

function stopVideo() {
  player.stopVideo();
}

function handleYoutubeClick(event) {
  const link = event.currentTarget.dataset.link;
  loadVideo(link);
  const modalOverlay = document.querySelector(".modal-component");
  modalOverlay.setAttribute("style", "display:block;");
}
function loadVideo(videoId) {
  player?.loadVideoByUrl?.(videoId);
  player?.playVideo?.();
}
function handleCloseModal(event) {
  stopVideo();
  const modalOverlay = document.querySelector(".modal-component");
  modalOverlay.setAttribute("style", "display:none;");
}
// document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(".play-btn").forEach((elem) => {
  elem.addEventListener("click", handleYoutubeClick);
});
// });

document.querySelectorAll(".modal__close").forEach((elem) => {
  elem.addEventListener("click", handleCloseModal);
});

// Гамбургер-меню

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  console.log("click");
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "flex";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

$(document).ready(function () {
  $.getJSON("./json/reviews.json", function (data) {
    console.log(data, "data json");
    function populateProducts() {
      let firstTemplate = "";
      let secondTemplate = "";
      let thirdTemplate = "";
      for (let index = 0; index < data.first.length; index++) {
        firstTemplate +=
          // "<div>Name: " + data.products[index].name + "</div>" +
          `
            <li class="reviews__item">
              <div class="reviews__item-title">${data.first[index].title}</div>
              <p class="reviews__item-text">${data.first[index].text}</p>
              <div class="reviews__item-footer">
                <div class="reviews__item-footer__name">${data.first[index].name}</div>
                <div class="reviews__item-footer__link">
                  <a href="${data.first[index].link}"></a>
                </div>
              </div>
            </li>
         `;
      }
      for (let index = 0; index < data.second.length; index++) {
        secondTemplate +=
          // "<div>Name: " + data.products[index].name + "</div>" +
          `
            <li class="reviews__item">
              <div class="reviews__item-title">${data.second[index].title}</div>
              <p class="reviews__item-text">${data.second[index].text}</p>
              <div class="reviews__item-footer">
                <div class="reviews__item-footer__name">${data.second[index].name}</div>
                <div class="reviews__item-footer__link">
                  <a href="${data.second[index].link}"></a>
                </div>
              </div>
            </li>
         `;
      }
      for (let index = 0; index < data.third.length; index++) {
        if (data.third[index].img) {
          thirdTemplate +=
            // "<div>Name: " + data.products[index].name + "</div>" +
            `
            <li class="reviews__item with-img" style="background: center / contain no-repeat url('${data.third[index].img}');     min-height: 490px;">
              <div class="reviews__button-container">
                <button class="reviews__button round__btn"></button>
              </div>
              <div class="reviews__item-footer">
                <div class="reviews__item-footer__name">${data.third[index].name}</div>
                <div class="reviews__item-footer__link">
                  <a href="${data.third[index].link}"></a>
                </div>
              </div>
            </li>
         `;
        } else {
          thirdTemplate +=
            // "<div>Name: " + data.products[index].name + "</div>" +
            `
            <li class="reviews__item">
              <div class="reviews__item-title">${data.third[index].title}</div>
              <p class="reviews__item-text">${data.third[index].text}</p>
              <div class="reviews__item-footer">
                <div class="reviews__item-footer__name">${data.third[index].name}</div>
                <div class="reviews__item-footer__link">
                  <a href="${data.third[index].link}"></a>
                </div>
              </div>
          
            </li>
         `;
        }
      }
      document.getElementById("reviews__list-left").innerHTML = firstTemplate;
      document.getElementById("reviews__list-middle").innerHTML =
        secondTemplate;
      document.getElementById("reviews__list-right").innerHTML = thirdTemplate;
    }

    populateProducts();
  });
});
