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
        if (data.first[index].img) {
          firstTemplate += `
            <li class="reviews__item with-img" style="background: center / contain no-repeat url('${data.first[index].img}'); height: 570px;width: 490px;max-height: 570px;max-width: 490px;min-height: 570px;min-width: 490px;">
              <div class="reviews__button-container">
                <button class="reviews__button round__btn"><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7.66025C16.3333 8.43005 16.3333 10.3546 15 11.1244L3 18.0526C1.66667 18.8224 8.41226e-08 17.8601 1.51421e-07 16.3205L7.57103e-07 2.4641C8.24401e-07 0.924501 1.66667 -0.0377495 3 0.732051L15 7.66025Z" fill="#22221F"/>
</svg>
</button>
              </div>
              <div class="reviews__item-footer">
                <div class="reviews__item-footer__name condensed">${data.first[index].name}</div>
                <div class="reviews__item-footer__link">
                  <a class="reviews__item-link-container" href="${data.first[index].link}"><img src="./images/reviews/tg-icon-dark.png" /></a>
                </div>
              </div>
            </li>
         `;
        } else {
          firstTemplate +=
            // "<div>Name: " + data.products[index].name + "</div>" +
            `
            <li class="reviews__item">
              <div class="subtitle reviews__item-title condensed ">${data.first[index].title}</div>
              <p class="standard-text reviews__item-text">${data.first[index].text}</p>
              <div class="reviews__item-footer">
                <div class="reviews__item-footer__name condensed">${data.first[index].name}</div>
                <div class="reviews__item-footer__link">
                  <a class="reviews__item-link-container" href="${data.first[index].link}"><img src="./images/reviews/tg-icon.png" /></a>
                </div>
              </div>
            </li>
         `;
        }
      }
      for (let index = 0; index < data.second.length; index++) {
        secondTemplate += `
            <li class="reviews__item">
              <div class="subtitle reviews__item-title condensed ">${data.second[index].title}</div>
              <p class="standard-text standard-text reviews__item-text">${data.second[index].text}</p>
              <div class="reviews__item-footer">
                <div class="reviews__item-footer__name condensed">${data.second[index].name}</div>
                <div class="reviews__item-footer__link">
                  <a class="reviews__item-link-container" href="${data.second[index].link}"><img src="./images/reviews/tg-icon.png" /></a>
                </div>
              </div>
            </li>
         `;
      }
      for (let index = 0; index < data.third.length; index++) {
        if (data.third[index].img) {
          thirdTemplate += `
            <li class="reviews__item with-img" style="background: center / contain no-repeat url('${data.third[index].img}');height: 570px;width: 490px;max-height: 570px;max-width: 490px;min-height: 570px;min-width: 490px;">
              <div class="reviews__button-container">
                <button class="reviews__button round__btn"><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7.66025C16.3333 8.43005 16.3333 10.3546 15 11.1244L3 18.0526C1.66667 18.8224 8.41226e-08 17.8601 1.51421e-07 16.3205L7.57103e-07 2.4641C8.24401e-07 0.924501 1.66667 -0.0377495 3 0.732051L15 7.66025Z" fill="#22221F"/>
</svg>
</button>
              </div>
              <div class="reviews__item-footer">
                <div class="reviews__item-footer__name condensed">${data.third[index].name}</div>
                <div class="reviews__item-footer__link">
                  <a class="reviews__item-link-container" href="${data.third[index].link}"><img src="./images/reviews/tg-icon-dark.png" /></a>
                </div>
              </div>
            </li>
         `;
        } else {
          thirdTemplate +=
            // "<div>Name: " + data.products[index].name + "</div>" +
            `
            <li class="reviews__item">
              <div class="subtitle reviews__item-title condensed ">${data.third[index].title}</div>
              <p class="standard-text reviews__item-text">${data.third[index].text}</p>
              <div class="reviews__item-footer">
                <div class="reviews__item-footer__name condensed">${data.third[index].name}</div>
                <div class="reviews__item-footer__link">
                  <a class="reviews__item-link-container" href="${data.third[index].link}"><img src="./images/reviews/tg-icon.png" /></a>
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
