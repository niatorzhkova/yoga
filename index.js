// Клик на кнопку Записаться
try {
  const enrollBtn = document.querySelectorAll(".enroll-btn");

  enrollBtn.forEach((elem) => {
    elem.addEventListener("click", function () {
      window.open("https://forms.gle/B6aA4GJ9jTXDMhjk9", "_blank");
    });
  });
} catch (e) {
  console.log(e);
}
try {
  // Клик на кнопку Все отызывы

  const reviewsBtn = document.querySelector(".all-reviews");

  reviewsBtn.addEventListener("click", function () {
    window.open("https://mycalm.space/feedback ", "_blank");
  });
} catch (e) {
  console.log(e);
}
try {
  // Youtube

  var tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "315",
      width: "560",
      // videoId: "eqvA79jRSCU",
    });
  }

  function stopVideo() {
    player.stopVideo();
  }

  function loadVideo(videoId) {
    player?.loadVideoByUrl?.(videoId);
    player?.playVideo?.();
  }

  function handleYoutubeClick(event) {
    const link = event.currentTarget.dataset.link;
    loadVideo(link);
    const modalOverlay = document.querySelector(".modal-component-video");
    modalOverlay.setAttribute("style", "display:block;");
  }

  function handleCloseModal(event) {
    stopVideo();
    const modalOverlay = document.querySelector(".modal-component-video");
    modalOverlay.setAttribute("style", "display:none;");
  }
} catch (e) {
  console.log(e);
}
try {
  // Гамбургер-меню

  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "flex";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "flex";
      menuIcon.style.display = "none";
    }
  }

  hamburger.addEventListener("click", toggleMenu);

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  });
} catch (e) {
  console.log(e);
}
try {
  $(document).ready(function () {
    // Отызывы

    $.getJSON("./json/reviews.json", function (data) {
      function mapReviews() {
        let firstTemplate = "";
        let secondTemplate = "";
        let thirdTemplate = "";
        for (let index = 0; index < data.first.length; index++) {
          if (data.first[index].img) {
            firstTemplate += `
              <li class="reviews__item with-img" style="background: center / cover no-repeat url('${data.first[index].img}');">
                <div class="reviews__button-container">
                  <button class="reviews__button round__btn play-btn" data-link="${data.first[index].video}"><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 7.66025C16.3333 8.43005 16.3333 10.3546 15 11.1244L3 18.0526C1.66667 18.8224 8.41226e-08 17.8601 1.51421e-07 16.3205L7.57103e-07 2.4641C8.24401e-07 0.924501 1.66667 -0.0377495 3 0.732051L15 7.66025Z" fill="#22221F"/>
  </svg>
  </button>
                </div>
                <div class="reviews__item-footer">
                  <div class="reviews__item-footer__name condensed">${data.first[index].name}</div>
                  <div class="reviews__item-footer__link">
                    <a class="reviews__item-link-container dark" href="${data.first[index].link}"><svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.09406 11.1974C1.16135 11.1638 1.22868 11.1318 1.29429 11.1015C2.43489 10.5731 3.59064 10.0784 4.74471 9.58362C4.80695 9.58362 4.91123 9.51126 4.97011 9.4877C5.05928 9.449 5.14845 9.41198 5.23762 9.37327C5.40921 9.29923 5.58082 9.22687 5.75073 9.15283C6.09392 9.00642 6.43541 8.86001 6.7786 8.7136L8.8327 7.8335C10.2021 7.24788 11.5732 6.66058 12.9426 6.07496C14.312 5.48935 15.6831 4.90204 17.0525 4.31643C18.4219 3.73081 19.793 3.14352 21.1624 2.5579C22.5318 1.97228 23.9029 1.38498 25.2723 0.799366C25.5768 0.668107 25.9065 0.472896 26.2329 0.415681C26.5071 0.366879 26.7746 0.272647 27.0505 0.22048C27.5737 0.121194 28.1507 0.0808103 28.652 0.297893C28.8253 0.373619 28.9851 0.479635 29.118 0.612577C29.7539 1.24195 29.6648 2.27518 29.5302 3.16034C28.5931 9.32951 27.6561 15.5004 26.7174 21.6695C26.5895 22.516 26.4145 23.4449 25.7467 23.98C25.1814 24.4327 24.3773 24.4832 23.6791 24.2914C22.9809 24.0978 22.3652 23.6923 21.7613 23.2935C19.2563 21.6342 16.7497 19.975 14.2447 18.3157C13.6492 17.9219 12.9864 17.407 12.9931 16.6918C12.9965 16.261 13.2538 15.8773 13.5163 15.5357C15.6932 12.6951 18.8341 10.7431 21.1708 8.03375C21.5005 7.65176 21.7596 6.96181 21.3071 6.74136C21.0379 6.6101 20.7283 6.78847 20.4827 6.95844C17.394 9.10402 14.307 11.2513 11.2182 13.3969C10.2105 14.0969 9.15405 14.8172 7.93942 14.9888C6.85264 15.1436 5.75915 14.8407 4.7077 14.5311C3.82617 14.2719 2.94629 14.006 2.06981 13.7317C1.60381 13.587 1.12266 13.4305 0.762648 13.1024C0.402634 12.7742 0.195737 12.2223 0.412755 11.7847C0.549023 11.5104 0.813151 11.3371 1.09073 11.1957L1.09406 11.1974Z" fill="#FEFFFC"/>
  </svg>
  </a>
                  </div>
                </div>
              </li>
           `;
          } else {
            firstTemplate += `
              <li class="reviews__item">
                <div class="subtitle reviews__item-title condensed ">${data.first[index].title}</div>
                <p class="standard-text-16 reviews__item-text">${data.first[index].text}</p>
                <div class="reviews__item-footer">
                  <div class="reviews__item-footer__name condensed">${data.first[index].name}</div>
                  <div class="reviews__item-footer__link">
                    <a class="reviews__item-link-container" href="${data.first[index].link}"><svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.09406 11.1974C1.16135 11.1638 1.22868 11.1318 1.29429 11.1015C2.43489 10.5731 3.59064 10.0784 4.74471 9.58362C4.80695 9.58362 4.91123 9.51126 4.97011 9.4877C5.05928 9.449 5.14845 9.41198 5.23762 9.37327C5.40921 9.29923 5.58082 9.22687 5.75073 9.15283C6.09392 9.00642 6.43541 8.86001 6.7786 8.7136L8.8327 7.8335C10.2021 7.24788 11.5732 6.66058 12.9426 6.07496C14.312 5.48935 15.6831 4.90204 17.0525 4.31643C18.4219 3.73081 19.793 3.14352 21.1624 2.5579C22.5318 1.97228 23.9029 1.38498 25.2723 0.799366C25.5768 0.668107 25.9065 0.472896 26.2329 0.415681C26.5071 0.366879 26.7746 0.272647 27.0505 0.22048C27.5737 0.121194 28.1507 0.0808103 28.652 0.297893C28.8253 0.373619 28.9851 0.479635 29.118 0.612577C29.7539 1.24195 29.6648 2.27518 29.5302 3.16034C28.5931 9.32951 27.6561 15.5004 26.7174 21.6695C26.5895 22.516 26.4145 23.4449 25.7467 23.98C25.1814 24.4327 24.3773 24.4832 23.6791 24.2914C22.9809 24.0978 22.3652 23.6923 21.7613 23.2935C19.2563 21.6342 16.7497 19.975 14.2447 18.3157C13.6492 17.9219 12.9864 17.407 12.9931 16.6918C12.9965 16.261 13.2538 15.8773 13.5163 15.5357C15.6932 12.6951 18.8341 10.7431 21.1708 8.03375C21.5005 7.65176 21.7596 6.96181 21.3071 6.74136C21.0379 6.6101 20.7283 6.78847 20.4827 6.95844C17.394 9.10402 14.307 11.2513 11.2182 13.3969C10.2105 14.0969 9.15405 14.8172 7.93942 14.9888C6.85264 15.1436 5.75915 14.8407 4.7077 14.5311C3.82617 14.2719 2.94629 14.006 2.06981 13.7317C1.60381 13.587 1.12266 13.4305 0.762648 13.1024C0.402634 12.7742 0.195737 12.2223 0.412755 11.7847C0.549023 11.5104 0.813151 11.3371 1.09073 11.1957L1.09406 11.1974Z" fill="#FEFFFC"/>
  </svg>
  </a>
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
                <p class="standard-text-16 reviews__item-text">${data.second[index].text}</p>
                <div class="reviews__item-footer">
                  <div class="reviews__item-footer__name condensed">${data.second[index].name}</div>
                  <div class="reviews__item-footer__link">
                    <a class="reviews__item-link-container" href="${data.second[index].link}"><svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.09406 11.1974C1.16135 11.1638 1.22868 11.1318 1.29429 11.1015C2.43489 10.5731 3.59064 10.0784 4.74471 9.58362C4.80695 9.58362 4.91123 9.51126 4.97011 9.4877C5.05928 9.449 5.14845 9.41198 5.23762 9.37327C5.40921 9.29923 5.58082 9.22687 5.75073 9.15283C6.09392 9.00642 6.43541 8.86001 6.7786 8.7136L8.8327 7.8335C10.2021 7.24788 11.5732 6.66058 12.9426 6.07496C14.312 5.48935 15.6831 4.90204 17.0525 4.31643C18.4219 3.73081 19.793 3.14352 21.1624 2.5579C22.5318 1.97228 23.9029 1.38498 25.2723 0.799366C25.5768 0.668107 25.9065 0.472896 26.2329 0.415681C26.5071 0.366879 26.7746 0.272647 27.0505 0.22048C27.5737 0.121194 28.1507 0.0808103 28.652 0.297893C28.8253 0.373619 28.9851 0.479635 29.118 0.612577C29.7539 1.24195 29.6648 2.27518 29.5302 3.16034C28.5931 9.32951 27.6561 15.5004 26.7174 21.6695C26.5895 22.516 26.4145 23.4449 25.7467 23.98C25.1814 24.4327 24.3773 24.4832 23.6791 24.2914C22.9809 24.0978 22.3652 23.6923 21.7613 23.2935C19.2563 21.6342 16.7497 19.975 14.2447 18.3157C13.6492 17.9219 12.9864 17.407 12.9931 16.6918C12.9965 16.261 13.2538 15.8773 13.5163 15.5357C15.6932 12.6951 18.8341 10.7431 21.1708 8.03375C21.5005 7.65176 21.7596 6.96181 21.3071 6.74136C21.0379 6.6101 20.7283 6.78847 20.4827 6.95844C17.394 9.10402 14.307 11.2513 11.2182 13.3969C10.2105 14.0969 9.15405 14.8172 7.93942 14.9888C6.85264 15.1436 5.75915 14.8407 4.7077 14.5311C3.82617 14.2719 2.94629 14.006 2.06981 13.7317C1.60381 13.587 1.12266 13.4305 0.762648 13.1024C0.402634 12.7742 0.195737 12.2223 0.412755 11.7847C0.549023 11.5104 0.813151 11.3371 1.09073 11.1957L1.09406 11.1974Z" fill="#FEFFFC"/>
  </svg>
  </a>
                  </div>
                </div>
              </li>
           `;
        }
        for (let index = 0; index < data.third.length; index++) {
          if (data.third[index].img) {
            thirdTemplate += `
              <li class="reviews__item with-img" style="background: center / cover no-repeat url('${data.third[index].img}');">
                <div class="reviews__button-container">
                  <button class="reviews__button round__btn play-btn" data-link="${data.third[index].video}"><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 7.66025C16.3333 8.43005 16.3333 10.3546 15 11.1244L3 18.0526C1.66667 18.8224 8.41226e-08 17.8601 1.51421e-07 16.3205L7.57103e-07 2.4641C8.24401e-07 0.924501 1.66667 -0.0377495 3 0.732051L15 7.66025Z" fill="#22221F"/>
  </svg>
  </button>
                </div>
                <div class="reviews__item-footer">
                  <div class="reviews__item-footer__name condensed">${data.third[index].name}</div>
                  <div class="reviews__item-footer__link">
                    <a class="reviews__item-link-container dark" href="${data.third[index].link}"><svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.09406 11.1974C1.16135 11.1638 1.22868 11.1318 1.29429 11.1015C2.43489 10.5731 3.59064 10.0784 4.74471 9.58362C4.80695 9.58362 4.91123 9.51126 4.97011 9.4877C5.05928 9.449 5.14845 9.41198 5.23762 9.37327C5.40921 9.29923 5.58082 9.22687 5.75073 9.15283C6.09392 9.00642 6.43541 8.86001 6.7786 8.7136L8.8327 7.8335C10.2021 7.24788 11.5732 6.66058 12.9426 6.07496C14.312 5.48935 15.6831 4.90204 17.0525 4.31643C18.4219 3.73081 19.793 3.14352 21.1624 2.5579C22.5318 1.97228 23.9029 1.38498 25.2723 0.799366C25.5768 0.668107 25.9065 0.472896 26.2329 0.415681C26.5071 0.366879 26.7746 0.272647 27.0505 0.22048C27.5737 0.121194 28.1507 0.0808103 28.652 0.297893C28.8253 0.373619 28.9851 0.479635 29.118 0.612577C29.7539 1.24195 29.6648 2.27518 29.5302 3.16034C28.5931 9.32951 27.6561 15.5004 26.7174 21.6695C26.5895 22.516 26.4145 23.4449 25.7467 23.98C25.1814 24.4327 24.3773 24.4832 23.6791 24.2914C22.9809 24.0978 22.3652 23.6923 21.7613 23.2935C19.2563 21.6342 16.7497 19.975 14.2447 18.3157C13.6492 17.9219 12.9864 17.407 12.9931 16.6918C12.9965 16.261 13.2538 15.8773 13.5163 15.5357C15.6932 12.6951 18.8341 10.7431 21.1708 8.03375C21.5005 7.65176 21.7596 6.96181 21.3071 6.74136C21.0379 6.6101 20.7283 6.78847 20.4827 6.95844C17.394 9.10402 14.307 11.2513 11.2182 13.3969C10.2105 14.0969 9.15405 14.8172 7.93942 14.9888C6.85264 15.1436 5.75915 14.8407 4.7077 14.5311C3.82617 14.2719 2.94629 14.006 2.06981 13.7317C1.60381 13.587 1.12266 13.4305 0.762648 13.1024C0.402634 12.7742 0.195737 12.2223 0.412755 11.7847C0.549023 11.5104 0.813151 11.3371 1.09073 11.1957L1.09406 11.1974Z" fill="#FEFFFC"/>
  </svg>
  </a>
                  </div>
                </div>
              </li>
           `;
          } else {
            thirdTemplate += `
              <li class="reviews__item">
                <div class="subtitle reviews__item-title condensed ">${data.third[index].title}</div>
                <p class="standard-text-16 reviews__item-text">${data.third[index].text}</p>
                <div class="reviews__item-footer">
                  <div class="reviews__item-footer__name condensed">${data.third[index].name}</div>
                  <div class="reviews__item-footer__link">
                    <a class="reviews__item-link-container" href="${data.third[index].link}"><svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.09406 11.1974C1.16135 11.1638 1.22868 11.1318 1.29429 11.1015C2.43489 10.5731 3.59064 10.0784 4.74471 9.58362C4.80695 9.58362 4.91123 9.51126 4.97011 9.4877C5.05928 9.449 5.14845 9.41198 5.23762 9.37327C5.40921 9.29923 5.58082 9.22687 5.75073 9.15283C6.09392 9.00642 6.43541 8.86001 6.7786 8.7136L8.8327 7.8335C10.2021 7.24788 11.5732 6.66058 12.9426 6.07496C14.312 5.48935 15.6831 4.90204 17.0525 4.31643C18.4219 3.73081 19.793 3.14352 21.1624 2.5579C22.5318 1.97228 23.9029 1.38498 25.2723 0.799366C25.5768 0.668107 25.9065 0.472896 26.2329 0.415681C26.5071 0.366879 26.7746 0.272647 27.0505 0.22048C27.5737 0.121194 28.1507 0.0808103 28.652 0.297893C28.8253 0.373619 28.9851 0.479635 29.118 0.612577C29.7539 1.24195 29.6648 2.27518 29.5302 3.16034C28.5931 9.32951 27.6561 15.5004 26.7174 21.6695C26.5895 22.516 26.4145 23.4449 25.7467 23.98C25.1814 24.4327 24.3773 24.4832 23.6791 24.2914C22.9809 24.0978 22.3652 23.6923 21.7613 23.2935C19.2563 21.6342 16.7497 19.975 14.2447 18.3157C13.6492 17.9219 12.9864 17.407 12.9931 16.6918C12.9965 16.261 13.2538 15.8773 13.5163 15.5357C15.6932 12.6951 18.8341 10.7431 21.1708 8.03375C21.5005 7.65176 21.7596 6.96181 21.3071 6.74136C21.0379 6.6101 20.7283 6.78847 20.4827 6.95844C17.394 9.10402 14.307 11.2513 11.2182 13.3969C10.2105 14.0969 9.15405 14.8172 7.93942 14.9888C6.85264 15.1436 5.75915 14.8407 4.7077 14.5311C3.82617 14.2719 2.94629 14.006 2.06981 13.7317C1.60381 13.587 1.12266 13.4305 0.762648 13.1024C0.402634 12.7742 0.195737 12.2223 0.412755 11.7847C0.549023 11.5104 0.813151 11.3371 1.09073 11.1957L1.09406 11.1974Z" fill="#FEFFFC"/>
  </svg>
  </a>
                  </div>
                </div>
            
              </li>
           `;
          }
        }
        document.getElementById("reviews__list-left").innerHTML = firstTemplate;
        document.getElementById("reviews__list-middle").innerHTML =
          secondTemplate;
        document.getElementById("reviews__list-right").innerHTML =
          thirdTemplate;
      }

      mapReviews();

      // Youtube player buttons

      document.querySelectorAll(".play-btn").forEach((elem) => {
        elem.addEventListener("click", handleYoutubeClick);
      });

      document.querySelectorAll(".modal__close").forEach((elem) => {
        elem.addEventListener("click", handleCloseModal);
      });
    });

    // Кейсы

    $.getJSON("./json/cases.json", function (data) {
      function mapCases() {
        let template = "";

        for (let index = 0; index < data.students.length; index++) {
          template += `
                     <li class="cases__item">
                        <div class="cases__item-left">
                          <div class="cases__item-photo">
                            <img src="${data.students[index].photo}" />
                          </div>
                          <div class="cases__item-name">${data.students[index].name}</div>
                          <div class="cases__item-desc standard-text-16">${data.students[index].shortDesc}</div>
                        </div>
                        <div class="cases__item-middle">
                          <div class="cases__item-header">
                            <span>Точка А</span>
                            <img src="./images/cases/arrow-icon-1.svg" />
                          </div>
                          <div class="cases__item-description standard-text-16">
                            ${data.students[index].pointATxt}
                          </div>
                        </div>
                        <div class="cases__item-right">
                          <div class="cases__item-header">
                            <span>Точка Б</span>
                            <img src="./images/cases/arrow-icon-2.svg" />
                          </div>
                          <div class="cases__item-description standard-text-16">
                            ${data.students[index].pointBTxt}
                          </div>
                        </div>
                      </li>  
           `;
        }
        document.querySelector(".cases__list").innerHTML = template;
      }

      mapCases();

      var owl = $(".cases__list");
      owl.owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        touchDrag: true,
        // autoplay: 0.5,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
        },
      });
      $(".cases__header-btn-right").click(function () {
        owl.trigger("next.owl.carousel");
      });

      $(".cases__header-btn-left").click(function () {
        owl.trigger("prev.owl.carousel");
      });
    });

    // Преподаватели

    $.getJSON("./json/teachers.json", function (data) {
      function mapTeachers() {
        let template = "";

        for (let index = 0; index < data.teachers.length; index++) {
          template += `
                   <li class="teachers__item">
  <div class="teachers__item-no-hover" style="background: center / cover no-repeat url('${
    data.teachers[index].photo
  }');">
   
                         <div class="teachers__socials">
                          <a class="icons__socials-link" target="_blank" href="${
                            data.teachers[index].link.insta
                          }"
                            ><svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.3024 0H7.44423C3.33939 0 0 3.34037 0 7.44642V21.0435C0 25.1496 3.33939 28.4899 7.44423 28.4899H22.3024C26.4073 28.4899 29.7466 25.1496 29.7466 21.0435V7.44642C29.7466 3.34037 26.4073 0 22.3024 0ZM2.62609 7.44642C2.62609 4.78927 4.78786 2.62686 7.44423 2.62686H22.3024C24.9588 2.62686 27.1206 4.78927 27.1206 7.44642V21.0435C27.1206 23.7007 24.9588 25.8631 22.3024 25.8631H7.44423C4.78786 25.8631 2.62609 23.7007 2.62609 21.0435V7.44642Z" fill="white"/>
  <path d="M14.8736 21.1698C18.6908 21.1698 21.798 18.0633 21.798 14.2433C21.798 10.4234 18.6925 7.31689 14.8736 7.31689C11.0548 7.31689 7.94922 10.4234 7.94922 14.2433C7.94922 18.0633 11.0548 21.1698 14.8736 21.1698ZM14.8736 9.94544C17.244 9.94544 19.1719 11.8739 19.1719 14.245C19.1719 16.6161 17.244 18.5446 14.8736 18.5446C12.5032 18.5446 10.5753 16.6161 10.5753 14.245C10.5753 11.8739 12.5032 9.94544 14.8736 9.94544Z" fill="white"/>
  <path d="M22.4389 8.43609C23.4668 8.43609 24.3046 7.59973 24.3046 6.56985C24.3046 5.53997 23.4685 4.70361 22.4389 4.70361C21.4093 4.70361 20.5732 5.53997 20.5732 6.56985C20.5732 7.59973 21.4093 8.43609 22.4389 8.43609Z" fill="white"/>
  </svg>
  </a>
                          <div class="play-btn icons__socials-link ${
                            data.teachers[index].link.youtube
                              ? ""
                              : "display-none"
                          }"  data-link="${data.teachers[index].link.youtube}"
                            ><svg
                              width="31"
                              height="22"
                              viewBox="0 0 31 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M30.4134 5.73507C30.225 3.91595 29.8196 1.905 28.3274 0.848198C27.1716 0.0286711 25.6525 -0.00162611 24.2343 5.6695e-05C21.2364 5.6695e-05 18.2368 0.00511169 15.239 0.0067945C12.3555 0.0101601 9.47199 0.0118409 6.58851 0.0152065C5.38398 0.0152065 4.21308 -0.07735 3.09435 0.44432C2.13375 0.891947 1.38175 1.74345 0.929211 2.69087C0.301708 4.00851 0.170494 5.50116 0.0947903 6.95847C-0.0448416 9.61226 -0.0297008 12.2728 0.136848 14.9249C0.259657 16.8601 0.57088 18.999 2.06646 20.2325C3.39212 21.3246 5.26284 21.3785 6.98217 21.3801C12.4396 21.3852 17.8987 21.3902 23.3578 21.3936C24.0576 21.3953 24.7878 21.3818 25.5011 21.3044C26.9041 21.153 28.2415 20.7508 29.1433 19.7108C30.0534 18.6624 30.2873 17.2034 30.4252 15.8218C30.7617 12.4697 30.7583 9.08554 30.4134 5.73507ZM12.0829 15.3961V5.99758L20.2186 10.696L12.0829 15.3961Z"
                                fill="white"
                              />
                            </svg></div>
                        </div>
                        <div class="teachers__item-info"><div class="teachers__item-name condensed">${
                          data.teachers[index].name
                        }</div>
                        <div class="teachers__item-info-btn condensed"><button data-key=${
                          data.teachers[index].id
                        } class="fullInfo"></button></div>
                        <div class="teachers__item-desc condensed">${
                          data.teachers[index].shortDesc
                        }</div></div>
                        
                      </div>
  
                      </div>
                      <div class="teachers__item-hover">
                       <div class="teachers__socials">
                          <a class="icons__socials-link" target="_blank" href="${
                            data.teachers[index].link.insta
                          }"
                            ><svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.3024 0H7.44423C3.33939 0 0 3.34037 0 7.44642V21.0435C0 25.1496 3.33939 28.4899 7.44423 28.4899H22.3024C26.4073 28.4899 29.7466 25.1496 29.7466 21.0435V7.44642C29.7466 3.34037 26.4073 0 22.3024 0ZM2.62609 7.44642C2.62609 4.78927 4.78786 2.62686 7.44423 2.62686H22.3024C24.9588 2.62686 27.1206 4.78927 27.1206 7.44642V21.0435C27.1206 23.7007 24.9588 25.8631 22.3024 25.8631H7.44423C4.78786 25.8631 2.62609 23.7007 2.62609 21.0435V7.44642Z" fill="white"/>
  <path d="M14.8736 21.1698C18.6908 21.1698 21.798 18.0633 21.798 14.2433C21.798 10.4234 18.6925 7.31689 14.8736 7.31689C11.0548 7.31689 7.94922 10.4234 7.94922 14.2433C7.94922 18.0633 11.0548 21.1698 14.8736 21.1698ZM14.8736 9.94544C17.244 9.94544 19.1719 11.8739 19.1719 14.245C19.1719 16.6161 17.244 18.5446 14.8736 18.5446C12.5032 18.5446 10.5753 16.6161 10.5753 14.245C10.5753 11.8739 12.5032 9.94544 14.8736 9.94544Z" fill="white"/>
  <path d="M22.4389 8.43609C23.4668 8.43609 24.3046 7.59973 24.3046 6.56985C24.3046 5.53997 23.4685 4.70361 22.4389 4.70361C21.4093 4.70361 20.5732 5.53997 20.5732 6.56985C20.5732 7.59973 21.4093 8.43609 22.4389 8.43609Z" fill="white"/>
  </svg>
  </a>
                          <div class="play-btn icons__socials-link ${
                            data.teachers[index].link.youtube
                              ? ""
                              : "display-none"
                          }"  data-link="${data.teachers[index].link.youtube}"
                            ><svg
                              width="31"
                              height="22"
                              viewBox="0 0 31 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M30.4134 5.73507C30.225 3.91595 29.8196 1.905 28.3274 0.848198C27.1716 0.0286711 25.6525 -0.00162611 24.2343 5.6695e-05C21.2364 5.6695e-05 18.2368 0.00511169 15.239 0.0067945C12.3555 0.0101601 9.47199 0.0118409 6.58851 0.0152065C5.38398 0.0152065 4.21308 -0.07735 3.09435 0.44432C2.13375 0.891947 1.38175 1.74345 0.929211 2.69087C0.301708 4.00851 0.170494 5.50116 0.0947903 6.95847C-0.0448416 9.61226 -0.0297008 12.2728 0.136848 14.9249C0.259657 16.8601 0.57088 18.999 2.06646 20.2325C3.39212 21.3246 5.26284 21.3785 6.98217 21.3801C12.4396 21.3852 17.8987 21.3902 23.3578 21.3936C24.0576 21.3953 24.7878 21.3818 25.5011 21.3044C26.9041 21.153 28.2415 20.7508 29.1433 19.7108C30.0534 18.6624 30.2873 17.2034 30.4252 15.8218C30.7617 12.4697 30.7583 9.08554 30.4134 5.73507ZM12.0829 15.3961V5.99758L20.2186 10.696L12.0829 15.3961Z"
                                fill="white"
                              />
                            </svg></div>
                        </div>
                      <div class="teachers__item-hover__name">${
                        data.teachers[index].name
                      }</div>
                      <div class="teachers__item-hover__fulldesc">${
                        data.teachers[index].fullDesc
                      }</div>
                      </div>
                    </li>  
         `;
        }
        document.querySelector(".teachers__list").innerHTML = template;
      }

      mapTeachers();

      // Открытие модалки слайдера

      const modalInfoButton = document
        .querySelectorAll(".fullInfo")
        .forEach((elem) => {
          elem.addEventListener("click", function () {
            console.log("click modal");
            let template;
            const teacherIndex = elem.dataset.key - 1;

            template = `<div>
          <div class="teachers__item-info__name">${data.teachers[teacherIndex].name}</div>
          <div class="teachers__item-info__fulldesc">${data.teachers[teacherIndex].fullDesc}</div>
          </div>`;

            const modalOverlay = document.querySelector(
              ".modal-component-info"
            );
            modalOverlay.setAttribute("style", "display:block;");
            document.querySelector(".modal__fullInfo-block").innerHTML =
              template;
          });

          const modalCloseInfoButton =
            document.querySelector(".modal__close-info");
          modalCloseInfoButton.addEventListener("click", function () {
            const modalOverlay = document.querySelector(
              ".modal-component-info"
            );
            modalOverlay.setAttribute("style", "display:none;");
          });
        });

      var owl = $(".teachers__list");
      owl.owlCarousel({
        margin: 15,
        dots: false,
        touchDrag: true,
        // autoplay: 0.5,
        autoplayHoverPause: true,
        autoWidth: true,
        responsive: {
          0: {
            items: 2,
          },
          640: {
            items: 3,
          },
          1440: {
            items: 4,
            margin: 25,
          },
          1920: {
            items: 5,
            margin: 20,
          },
        },
      });
      $(".teachers__header-btn-right").click(function () {
        owl.trigger("next.owl.carousel");
      });

      $(".teachers__header-btn-left").click(function () {
        owl.trigger("prev.owl.carousel");
      });

      document.querySelectorAll(".play-btn").forEach((elem) => {
        elem.addEventListener("click", handleYoutubeClick);
      });

      document.querySelectorAll(".modal__close").forEach((elem) => {
        elem.addEventListener("click", handleCloseModal);
      });
    });

    // Программа инфо слева

    $.getJSON("./json/programme.json", function (data) {
      function mapProgrammeInfo() {
        let template = "";
        template += `
                    <div class="programme-info__container">
                     <div class="programme-info__time">
                     <div class="programme-info__label condensed">Время занятий:</div>
                     <div class="programme-info__data condensed standard-text-16">${data.info.time}</div></div>
                     <div class="programme-info__days"><div class="programme-info__label condensed">Дни занятий: </div>
                     <div class="programme-info__data condensed standard-text-16">${data.info.days}</div></div></div>
                     <div class="programme-info__extra condensed standard-text-16">${data.info.extra}</div>
                     <div class="programme-info__pic"><img src="./images/programme/programme-pic.png" /></div>
           `;

        document.querySelector(".programme-info").innerHTML = template;
      }

      mapProgrammeInfo();
    });

    // Программа аккордеон

    $.getJSON("./json/programme.json", function (data) {
      function mapProgrammeAccordion() {
        let template = "";

        for (let index = 0; index < data.accordion.length; index++) {
          template += `
                       <li
    class="programme__accordion-item accordion__item"
  
  >
    <div class="accordion__header">
      <div class="accordion__header-left">
        <div class="accordion__index">${index + 1}</div>
        <div
          class="accordion__title subtitle accordion-label"
        >
         ${data.accordion[index].title}
        </div>
      </div>
      <div class="accordion__header-right">
        <button class="accordion__button">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 7L7 1L1 7"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="accordion__answer-container">
      <div
        class="accordion__answer accordion-content"
        style="height: 0px"
      >
        <ul class="accordion__answer-list">
        ${data.accordion[index].list
          .map((x) => `<li class="accordion__answer-item">${x}</li>`)
          .join("")}
        </ul>
      </div>
    </div>
  </li>
           `;
          document.querySelector(".programme__accordion").innerHTML = template;
        }
      }

      mapProgrammeAccordion();
      try {
        const accordion = document
          .querySelector(".programme")
          .getElementsByClassName("accordion__item");

        for (i = 0; i < accordion.length; i++) {
          accordion[i].addEventListener("click", function () {
            this.classList.toggle("active");
            const elBlock = this.querySelector(".accordion-content");
            const elBlocks =
              document.getElementsByClassName("accordion-content");
            function closeAll(e) {
              if (
                !this.contains(e.target) &&
                this.classList.contains("active")
              ) {
                this.classList.toggle("active");

                for (var i = 0; i < elBlocks.length; i++) {
                  elBlocks[i].style.height = `${elBlocks[i].scrollHeight}px`;
                  window
                    .getComputedStyle(elBlocks[i], null)
                    .getPropertyValue("height");
                  elBlocks[i].style.height = "0";
                }
                elBlock.addEventListener("transitionend", () => {
                  if (elBlock.style.height !== "0px") {
                    elBlock.style.height = "auto";
                  }
                });
              }
            }
            window.addEventListener("mouseup", closeAll.bind(this));

            if (elBlock.style.height === "0px") {
              for (var i = 0; i < elBlocks.length; i++) {
                elBlocks[i].style.height = `${elBlocks[i].scrollHeight}px`;
                window
                  .getComputedStyle(elBlocks[i], null)
                  .getPropertyValue("height");
                elBlocks[i].style.height = "0";
              }

              // открытие
              elBlock.style.height = `${elBlock.scrollHeight}px`;
            } else {
              // закрытие

              elBlock.style.height = `${elBlock.scrollHeight}px`;
              window.getComputedStyle(elBlock, null).getPropertyValue("height");
              elBlock.style.height = "0";
            }
            elBlock.addEventListener("transitionend", () => {
              if (elBlock.style.height !== "0px") {
                elBlock.style.height = "auto";
              }
            });
          });
        }
      } catch (e) {
        console.log(e);
      }
    });

    // Вопросы

    $.getJSON("./json/questions.json", function (data) {
      function mapQuestionsAccordion() {
        let template = "";

        for (let index = 0; index < data.accordion.length; index++) {
          template += `
                          <li class="questions__accordion-item accordion__item">
                        <div class="accordion__header">
                          <div class="accordion__header-left">
                            <div
                              class="accordion__title subtitle accordion-label"
                            >
                               ${data.accordion[index].title} 
                             
                            </div>
                          </div>
                          <div class="accordion__header-right">
                            <button class="accordion__button">
                              <svg
                                width="14"
                                height="8"
                                viewBox="0 0 14 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13 7L7 1L1 7"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="accordion__answer-container">
                          <div
                            class="accordion__answer accordion-content"
                            style="height: 0px"
                          >
                              <div class="accordion__answer__block standard-text-16">
                              ${data.accordion[index].answer} 
                            </div>
                          </div>
                        </div>
                      </li>
         `;
          document.querySelector(".questions__list").innerHTML = template;
        }
      }

      mapQuestionsAccordion();
      try {
        const accordion = document
          .querySelector(".questions")
          .getElementsByClassName("accordion__item");

        for (i = 0; i < accordion.length; i++) {
          accordion[i].addEventListener("click", function () {
            this.classList.toggle("active");
            const elBlock = this.querySelector(".accordion-content");
            const elBlocks =
              document.getElementsByClassName("accordion-content");
            function closeAll(e) {
              if (
                !this.contains(e.target) &&
                this.classList.contains("active")
              ) {
                this.classList.toggle("active");

                for (var i = 0; i < elBlocks.length; i++) {
                  elBlocks[i].style.height = `${elBlocks[i].scrollHeight}px`;
                  window
                    .getComputedStyle(elBlocks[i], null)
                    .getPropertyValue("height");
                  elBlocks[i].style.height = "0";
                }
                elBlock.addEventListener("transitionend", () => {
                  if (elBlock.style.height !== "0px") {
                    elBlock.style.height = "auto";
                  }
                });
              }
            }
            window.addEventListener("mouseup", closeAll.bind(this));

            if (elBlock.style.height === "0px") {
              for (var i = 0; i < elBlocks.length; i++) {
                elBlocks[i].style.height = `${elBlocks[i].scrollHeight}px`;
                window
                  .getComputedStyle(elBlocks[i], null)
                  .getPropertyValue("height");
                elBlocks[i].style.height = "0";
              }

              // открытие
              elBlock.style.height = `${elBlock.scrollHeight}px`;
            } else {
              // закрытие

              elBlock.style.height = `${elBlock.scrollHeight}px`;
              window.getComputedStyle(elBlock, null).getPropertyValue("height");
              elBlock.style.height = "0";
            }
            elBlock.addEventListener("transitionend", () => {
              if (elBlock.style.height !== "0px") {
                elBlock.style.height = "auto";
              }
            });
          });
        }
      } catch (e) {
        console.log(e);
      }
    });
  });
} catch (e) {
  console.log(e);
}
