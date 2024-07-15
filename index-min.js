const enrollBtn=document.querySelector(".enroll-btn");enrollBtn.addEventListener("click",function(){window.open("https://forms.gle/B6aA4GJ9jTXDMhjk9 ","_blank")});var player,tag=document.createElement("script");tag.async=!0,tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];function onYouTubeIframeAPIReady(){player=new YT.Player("player",{height:"100%",width:"100%",videoId:"eqvA79jRSCU"})}function stopVideo(){player.stopVideo()}function loadVideo(_){player?.loadVideoByUrl?.(_),player?.playVideo?.()}function handleYoutubeClick(_){console.log("click");let e=_.currentTarget.dataset.link;loadVideo(e);let t=document.querySelector(".modal-component-video");t.setAttribute("style","display:block;")}function handleCloseModal(_){stopVideo();let e=document.querySelector(".modal-component-video");e.setAttribute("style","display:none;")}firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);const menu=document.querySelector(".menu"),menuItems=document.querySelectorAll(".menuItem"),hamburger=document.querySelector(".hamburger"),closeIcon=document.querySelector(".closeIcon"),menuIcon=document.querySelector(".menuIcon");function toggleMenu(){menu.classList.contains("showMenu")?(menu.classList.remove("showMenu"),closeIcon.style.display="none",menuIcon.style.display="flex"):(menu.classList.add("showMenu"),closeIcon.style.display="flex",menuIcon.style.display="none")}hamburger.addEventListener("click",toggleMenu),menuItems.forEach(function(_){_.addEventListener("click",toggleMenu)}),$(document).ready(function(){$.getJSON("./json/reviews.json",function(_){(function e(){let t="",s="",n="";for(let l=0;l<_.first.length;l++)_.first[l].img?t+=`
    <li class="reviews__item with-img" style="background: center / cover no-repeat url('${_.first[l].img}');">
      <div class="reviews__button-container">
        <button class="reviews__button round__btn play-btn" data-link="${_.first[l].video}"><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7.66025C16.3333 8.43005 16.3333 10.3546 15 11.1244L3 18.0526C1.66667 18.8224 8.41226e-08 17.8601 1.51421e-07 16.3205L7.57103e-07 2.4641C8.24401e-07 0.924501 1.66667 -0.0377495 3 0.732051L15 7.66025Z" fill="#22221F"/>
</svg>
</button>
      </div>
      <div class="reviews__item-footer">
        <div class="reviews__item-footer__name condensed">${_.first[l].name}</div>
        <div class="reviews__item-footer__link">
          <a class="reviews__item-link-container dark" href="${_.first[l].link}"><svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.09406 11.1974C1.16135 11.1638 1.22868 11.1318 1.29429 11.1015C2.43489 10.5731 3.59064 10.0784 4.74471 9.58362C4.80695 9.58362 4.91123 9.51126 4.97011 9.4877C5.05928 9.449 5.14845 9.41198 5.23762 9.37327C5.40921 9.29923 5.58082 9.22687 5.75073 9.15283C6.09392 9.00642 6.43541 8.86001 6.7786 8.7136L8.8327 7.8335C10.2021 7.24788 11.5732 6.66058 12.9426 6.07496C14.312 5.48935 15.6831 4.90204 17.0525 4.31643C18.4219 3.73081 19.793 3.14352 21.1624 2.5579C22.5318 1.97228 23.9029 1.38498 25.2723 0.799366C25.5768 0.668107 25.9065 0.472896 26.2329 0.415681C26.5071 0.366879 26.7746 0.272647 27.0505 0.22048C27.5737 0.121194 28.1507 0.0808103 28.652 0.297893C28.8253 0.373619 28.9851 0.479635 29.118 0.612577C29.7539 1.24195 29.6648 2.27518 29.5302 3.16034C28.5931 9.32951 27.6561 15.5004 26.7174 21.6695C26.5895 22.516 26.4145 23.4449 25.7467 23.98C25.1814 24.4327 24.3773 24.4832 23.6791 24.2914C22.9809 24.0978 22.3652 23.6923 21.7613 23.2935C19.2563 21.6342 16.7497 19.975 14.2447 18.3157C13.6492 17.9219 12.9864 17.407 12.9931 16.6918C12.9965 16.261 13.2538 15.8773 13.5163 15.5357C15.6932 12.6951 18.8341 10.7431 21.1708 8.03375C21.5005 7.65176 21.7596 6.96181 21.3071 6.74136C21.0379 6.6101 20.7283 6.78847 20.4827 6.95844C17.394 9.10402 14.307 11.2513 11.2182 13.3969C10.2105 14.0969 9.15405 14.8172 7.93942 14.9888C6.85264 15.1436 5.75915 14.8407 4.7077 14.5311C3.82617 14.2719 2.94629 14.006 2.06981 13.7317C1.60381 13.587 1.12266 13.4305 0.762648 13.1024C0.402634 12.7742 0.195737 12.2223 0.412755 11.7847C0.549023 11.5104 0.813151 11.3371 1.09073 11.1957L1.09406 11.1974Z" fill="#FEFFFC"/>
</svg>
</a>
        </div>
      </div>
    </li>
 `:t+=`
    <li class="reviews__item">
      <div class="subtitle reviews__item-title condensed ">${_.first[l].title}</div>
      <p class="standard-text-16 reviews__item-text">${_.first[l].text}</p>
      <div class="reviews__item-footer">
        <div class="reviews__item-footer__name condensed">${_.first[l].name}</div>
        <div class="reviews__item-footer__link">
          <a class="reviews__item-link-container" href="${_.first[l].link}"><svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.09406 11.1974C1.16135 11.1638 1.22868 11.1318 1.29429 11.1015C2.43489 10.5731 3.59064 10.0784 4.74471 9.58362C4.80695 9.58362 4.91123 9.51126 4.97011 9.4877C5.05928 9.449 5.14845 9.41198 5.23762 9.37327C5.40921 9.29923 5.58082 9.22687 5.75073 9.15283C6.09392 9.00642 6.43541 8.86001 6.7786 8.7136L8.8327 7.8335C10.2021 7.24788 11.5732 6.66058 12.9426 6.07496C14.312 5.48935 15.6831 4.90204 17.0525 4.31643C18.4219 3.73081 19.793 3.14352 21.1624 2.5579C22.5318 1.97228 23.9029 1.38498 25.2723 0.799366C25.5768 0.668107 25.9065 0.472896 26.2329 0.415681C26.5071 0.366879 26.7746 0.272647 27.0505 0.22048C27.5737 0.121194 28.1507 0.0808103 28.652 0.297893C28.8253 0.373619 28.9851 0.479635 29.118 0.612577C29.7539 1.24195 29.6648 2.27518 29.5302 3.16034C28.5931 9.32951 27.6561 15.5004 26.7174 21.6695C26.5895 22.516 26.4145 23.4449 25.7467 23.98C25.1814 24.4327 24.3773 24.4832 23.6791 24.2914C22.9809 24.0978 22.3652 23.6923 21.7613 23.2935C19.2563 21.6342 16.7497 19.975 14.2447 18.3157C13.6492 17.9219 12.9864 17.407 12.9931 16.6918C12.9965 16.261 13.2538 15.8773 13.5163 15.5357C15.6932 12.6951 18.8341 10.7431 21.1708 8.03375C21.5005 7.65176 21.7596 6.96181 21.3071 6.74136C21.0379 6.6101 20.7283 6.78847 20.4827 6.95844C17.394 9.10402 14.307 11.2513 11.2182 13.3969C10.2105 14.0969 9.15405 14.8172 7.93942 14.9888C6.85264 15.1436 5.75915 14.8407 4.7077 14.5311C3.82617 14.2719 2.94629 14.006 2.06981 13.7317C1.60381 13.587 1.12266 13.4305 0.762648 13.1024C0.402634 12.7742 0.195737 12.2223 0.412755 11.7847C0.549023 11.5104 0.813151 11.3371 1.09073 11.1957L1.09406 11.1974Z" fill="#FEFFFC"/>
</svg>
</a>
        </div>
      </div>
    </li>
 `;for(let o=0;o<_.second.length;o++)s+=`
    <li class="reviews__item">
      <div class="subtitle reviews__item-title condensed ">${_.second[o].title}</div>
      <p class="standard-text-16 reviews__item-text">${_.second[o].text}</p>
      <div class="reviews__item-footer">
        <div class="reviews__item-footer__name condensed">${_.second[o].name}</div>
        <div class="reviews__item-footer__link">
          <a class="reviews__item-link-container" href="${_.second[o].link}"><svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.09406 11.1974C1.16135 11.1638 1.22868 11.1318 1.29429 11.1015C2.43489 10.5731 3.59064 10.0784 4.74471 9.58362C4.80695 9.58362 4.91123 9.51126 4.97011 9.4877C5.05928 9.449 5.14845 9.41198 5.23762 9.37327C5.40921 9.29923 5.58082 9.22687 5.75073 9.15283C6.09392 9.00642 6.43541 8.86001 6.7786 8.7136L8.8327 7.8335C10.2021 7.24788 11.5732 6.66058 12.9426 6.07496C14.312 5.48935 15.6831 4.90204 17.0525 4.31643C18.4219 3.73081 19.793 3.14352 21.1624 2.5579C22.5318 1.97228 23.9029 1.38498 25.2723 0.799366C25.5768 0.668107 25.9065 0.472896 26.2329 0.415681C26.5071 0.366879 26.7746 0.272647 27.0505 0.22048C27.5737 0.121194 28.1507 0.0808103 28.652 0.297893C28.8253 0.373619 28.9851 0.479635 29.118 0.612577C29.7539 1.24195 29.6648 2.27518 29.5302 3.16034C28.5931 9.32951 27.6561 15.5004 26.7174 21.6695C26.5895 22.516 26.4145 23.4449 25.7467 23.98C25.1814 24.4327 24.3773 24.4832 23.6791 24.2914C22.9809 24.0978 22.3652 23.6923 21.7613 23.2935C19.2563 21.6342 16.7497 19.975 14.2447 18.3157C13.6492 17.9219 12.9864 17.407 12.9931 16.6918C12.9965 16.261 13.2538 15.8773 13.5163 15.5357C15.6932 12.6951 18.8341 10.7431 21.1708 8.03375C21.5005 7.65176 21.7596 6.96181 21.3071 6.74136C21.0379 6.6101 20.7283 6.78847 20.4827 6.95844C17.394 9.10402 14.307 11.2513 11.2182 13.3969C10.2105 14.0969 9.15405 14.8172 7.93942 14.9888C6.85264 15.1436 5.75915 14.8407 4.7077 14.5311C3.82617 14.2719 2.94629 14.006 2.06981 13.7317C1.60381 13.587 1.12266 13.4305 0.762648 13.1024C0.402634 12.7742 0.195737 12.2223 0.412755 11.7847C0.549023 11.5104 0.813151 11.3371 1.09073 11.1957L1.09406 11.1974Z" fill="#FEFFFC"/>
</svg>
</a>
        </div>
      </div>
    </li>
 `;for(let a=0;a<_.third.length;a++)_.third[a].img?n+=`
    <li class="reviews__item with-img" style="background: center / cover no-repeat url('${_.third[a].img}');">
      <div class="reviews__button-container">
        <button class="reviews__button round__btn play-btn" data-link="${_.third[a].video}"><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7.66025C16.3333 8.43005 16.3333 10.3546 15 11.1244L3 18.0526C1.66667 18.8224 8.41226e-08 17.8601 1.51421e-07 16.3205L7.57103e-07 2.4641C8.24401e-07 0.924501 1.66667 -0.0377495 3 0.732051L15 7.66025Z" fill="#22221F"/>
</svg>
</button>
      </div>
      <div class="reviews__item-footer">
        <div class="reviews__item-footer__name condensed">${_.third[a].name}</div>
        <div class="reviews__item-footer__link">
          <a class="reviews__item-link-container dark" href="${_.third[a].link}"><svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.09406 11.1974C1.16135 11.1638 1.22868 11.1318 1.29429 11.1015C2.43489 10.5731 3.59064 10.0784 4.74471 9.58362C4.80695 9.58362 4.91123 9.51126 4.97011 9.4877C5.05928 9.449 5.14845 9.41198 5.23762 9.37327C5.40921 9.29923 5.58082 9.22687 5.75073 9.15283C6.09392 9.00642 6.43541 8.86001 6.7786 8.7136L8.8327 7.8335C10.2021 7.24788 11.5732 6.66058 12.9426 6.07496C14.312 5.48935 15.6831 4.90204 17.0525 4.31643C18.4219 3.73081 19.793 3.14352 21.1624 2.5579C22.5318 1.97228 23.9029 1.38498 25.2723 0.799366C25.5768 0.668107 25.9065 0.472896 26.2329 0.415681C26.5071 0.366879 26.7746 0.272647 27.0505 0.22048C27.5737 0.121194 28.1507 0.0808103 28.652 0.297893C28.8253 0.373619 28.9851 0.479635 29.118 0.612577C29.7539 1.24195 29.6648 2.27518 29.5302 3.16034C28.5931 9.32951 27.6561 15.5004 26.7174 21.6695C26.5895 22.516 26.4145 23.4449 25.7467 23.98C25.1814 24.4327 24.3773 24.4832 23.6791 24.2914C22.9809 24.0978 22.3652 23.6923 21.7613 23.2935C19.2563 21.6342 16.7497 19.975 14.2447 18.3157C13.6492 17.9219 12.9864 17.407 12.9931 16.6918C12.9965 16.261 13.2538 15.8773 13.5163 15.5357C15.6932 12.6951 18.8341 10.7431 21.1708 8.03375C21.5005 7.65176 21.7596 6.96181 21.3071 6.74136C21.0379 6.6101 20.7283 6.78847 20.4827 6.95844C17.394 9.10402 14.307 11.2513 11.2182 13.3969C10.2105 14.0969 9.15405 14.8172 7.93942 14.9888C6.85264 15.1436 5.75915 14.8407 4.7077 14.5311C3.82617 14.2719 2.94629 14.006 2.06981 13.7317C1.60381 13.587 1.12266 13.4305 0.762648 13.1024C0.402634 12.7742 0.195737 12.2223 0.412755 11.7847C0.549023 11.5104 0.813151 11.3371 1.09073 11.1957L1.09406 11.1974Z" fill="#FEFFFC"/>
</svg>
</a>
        </div>
      </div>
    </li>
 `:n+=`
    <li class="reviews__item">
      <div class="subtitle reviews__item-title condensed ">${_.third[a].title}</div>
      <p class="standard-text-16 reviews__item-text">${_.third[a].text}</p>
      <div class="reviews__item-footer">
        <div class="reviews__item-footer__name condensed">${_.third[a].name}</div>
        <div class="reviews__item-footer__link">
          <a class="reviews__item-link-container" href="${_.third[a].link}"><svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.09406 11.1974C1.16135 11.1638 1.22868 11.1318 1.29429 11.1015C2.43489 10.5731 3.59064 10.0784 4.74471 9.58362C4.80695 9.58362 4.91123 9.51126 4.97011 9.4877C5.05928 9.449 5.14845 9.41198 5.23762 9.37327C5.40921 9.29923 5.58082 9.22687 5.75073 9.15283C6.09392 9.00642 6.43541 8.86001 6.7786 8.7136L8.8327 7.8335C10.2021 7.24788 11.5732 6.66058 12.9426 6.07496C14.312 5.48935 15.6831 4.90204 17.0525 4.31643C18.4219 3.73081 19.793 3.14352 21.1624 2.5579C22.5318 1.97228 23.9029 1.38498 25.2723 0.799366C25.5768 0.668107 25.9065 0.472896 26.2329 0.415681C26.5071 0.366879 26.7746 0.272647 27.0505 0.22048C27.5737 0.121194 28.1507 0.0808103 28.652 0.297893C28.8253 0.373619 28.9851 0.479635 29.118 0.612577C29.7539 1.24195 29.6648 2.27518 29.5302 3.16034C28.5931 9.32951 27.6561 15.5004 26.7174 21.6695C26.5895 22.516 26.4145 23.4449 25.7467 23.98C25.1814 24.4327 24.3773 24.4832 23.6791 24.2914C22.9809 24.0978 22.3652 23.6923 21.7613 23.2935C19.2563 21.6342 16.7497 19.975 14.2447 18.3157C13.6492 17.9219 12.9864 17.407 12.9931 16.6918C12.9965 16.261 13.2538 15.8773 13.5163 15.5357C15.6932 12.6951 18.8341 10.7431 21.1708 8.03375C21.5005 7.65176 21.7596 6.96181 21.3071 6.74136C21.0379 6.6101 20.7283 6.78847 20.4827 6.95844C17.394 9.10402 14.307 11.2513 11.2182 13.3969C10.2105 14.0969 9.15405 14.8172 7.93942 14.9888C6.85264 15.1436 5.75915 14.8407 4.7077 14.5311C3.82617 14.2719 2.94629 14.006 2.06981 13.7317C1.60381 13.587 1.12266 13.4305 0.762648 13.1024C0.402634 12.7742 0.195737 12.2223 0.412755 11.7847C0.549023 11.5104 0.813151 11.3371 1.09073 11.1957L1.09406 11.1974Z" fill="#FEFFFC"/>
</svg>
</a>
        </div>
      </div>
  
    </li>
 `;document.getElementById("reviews__list-left").innerHTML=t,document.getElementById("reviews__list-middle").innerHTML=s,document.getElementById("reviews__list-right").innerHTML=n})(),document.querySelectorAll(".play-btn").forEach(_=>{_.addEventListener("click",handleYoutubeClick)}),document.querySelectorAll(".modal__close").forEach(_=>{_.addEventListener("click",handleCloseModal)})}),$.getJSON("./json/cases.json",function(_){!function e(){let t="";for(let s=0;s<_.students.length;s++)t+=`
           <li class="cases__item">
              <div class="cases__item-left">
                <div class="cases__item-photo">
                  <img src="${_.students[s].photo}" />
                </div>
                <div class="cases__item-name">${_.students[s].name}</div>
                <div class="cases__item-desc standard-text-16">${_.students[s].shortDesc}</div>
              </div>
              <div class="cases__item-middle">
                <div class="cases__item-header">
                  <span>Точка А</span>
                  <img src="./images/cases/arrow-icon-1.svg" />
                </div>
                <div class="cases__item-description standard-text-16">
                  ${_.students[s].pointATxt}
                </div>
              </div>
              <div class="cases__item-right">
                <div class="cases__item-header">
                  <span>Точка Б</span>
                  <img src="./images/cases/arrow-icon-2.svg" />
                </div>
                <div class="cases__item-description standard-text-16">
                  ${_.students[s].pointBTxt}
                </div>
              </div>
            </li>  
 `;document.querySelector(".cases__list").innerHTML=t}();var e=$(".cases__list");e.owlCarousel({loop:!0,margin:0,dots:!1,touchDrag:!0,autoplayHoverPause:!0,responsive:{0:{items:1}}}),$(".cases__header-btn-right").click(function(){e.trigger("next.owl.carousel")}),$(".cases__header-btn-left").click(function(){e.trigger("prev.owl.carousel")})}),$.getJSON("./json/teachers.json",function(_){(function e(){let t="";for(let s=0;s<_.teachers.length;s++)t+=`
         <li class="teachers__item">
<div class="teachers__item-no-hover" style="background: center / cover no-repeat url('${_.teachers[s].photo}');">

               <div class="teachers__socials">
                <a class="icons__socials-link" href="#"
                  ><svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.3024 0H7.44423C3.33939 0 0 3.34037 0 7.44642V21.0435C0 25.1496 3.33939 28.4899 7.44423 28.4899H22.3024C26.4073 28.4899 29.7466 25.1496 29.7466 21.0435V7.44642C29.7466 3.34037 26.4073 0 22.3024 0ZM2.62609 7.44642C2.62609 4.78927 4.78786 2.62686 7.44423 2.62686H22.3024C24.9588 2.62686 27.1206 4.78927 27.1206 7.44642V21.0435C27.1206 23.7007 24.9588 25.8631 22.3024 25.8631H7.44423C4.78786 25.8631 2.62609 23.7007 2.62609 21.0435V7.44642Z" fill="white"/>
<path d="M14.8736 21.1698C18.6908 21.1698 21.798 18.0633 21.798 14.2433C21.798 10.4234 18.6925 7.31689 14.8736 7.31689C11.0548 7.31689 7.94922 10.4234 7.94922 14.2433C7.94922 18.0633 11.0548 21.1698 14.8736 21.1698ZM14.8736 9.94544C17.244 9.94544 19.1719 11.8739 19.1719 14.245C19.1719 16.6161 17.244 18.5446 14.8736 18.5446C12.5032 18.5446 10.5753 16.6161 10.5753 14.245C10.5753 11.8739 12.5032 9.94544 14.8736 9.94544Z" fill="white"/>
<path d="M22.4389 8.43609C23.4668 8.43609 24.3046 7.59973 24.3046 6.56985C24.3046 5.53997 23.4685 4.70361 22.4389 4.70361C21.4093 4.70361 20.5732 5.53997 20.5732 6.56985C20.5732 7.59973 21.4093 8.43609 22.4389 8.43609Z" fill="white"/>
</svg>
</a>
                <a class="icons__socials-link" href="#"
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
                  </svg></a>
              </div>
              <div class="teachers__item-info"><div class="teachers__item-name condensed">${_.teachers[s].name}</div>
              <div class="teachers__item-info-btn condensed"><button data-key=${_.teachers[s].id} class="fullInfo"></button></div>
              <div class="teachers__item-desc condensed">${_.teachers[s].shortDesc}</div></div>
              
            </div>

            </div>
            <div class="teachers__item-hover">
            <div class="teachers__item-hover__name">${_.teachers[s].name}</div>
            <div class="teachers__item-hover__fulldesc">${_.teachers[s].fullDesc}</div>
            </div>
          </li>  
`;document.querySelector(".teachers__list").innerHTML=t})(),document.querySelectorAll(".fullInfo").forEach(e=>{e.addEventListener("click",function(){console.log("click modal");let t,s=e.dataset.key-1;t=`<div>
<div class="teachers__item-info__name">${_.teachers[s].name}</div>
<div class="teachers__item-info__fulldesc">${_.teachers[s].fullDesc}</div>
</div>`;let n=document.querySelector(".modal-component-info");n.setAttribute("style","display:block;"),document.querySelector(".modal__fullInfo-block").innerHTML=t});let t=document.querySelector(".modal__close-info");t.addEventListener("click",function(){let _=document.querySelector(".modal-component-info");_.setAttribute("style","display:none;")})});var e=$(".teachers__list");e.owlCarousel({loop:!0,margin:15,dots:!1,touchDrag:!0,autoplayHoverPause:!0,autoWidth:!0,responsive:{0:{items:2},640:{items:3},1440:{items:4,margin:25},1920:{items:5}}}),$(".teachers__header-btn-right").click(function(){e.trigger("next.owl.carousel")}),$(".teachers__header-btn-left").click(function(){e.trigger("prev.owl.carousel")})}),$.getJSON("./json/programme.json",function(_){let e;e="",e+=`
          <div class="programme-info__container">
           <div class="programme-info__time">
           <div class="programme-info__label subtitle-wh-bg condensed">Время занятий:</div>
           <div class="programme-info__data condensed standard-text-16">${_.info.time}</div></div>
           <div class="programme-info__days"><div class="programme-info__label subtitle-wh-bg condensed">Дни занятий: </div>
           <div class="programme-info__data condensed standard-text-16">${_.info.days}</div></div></div>
           <div class="programme-info__extra condensed standard-text-16">${_.info.extra}</div>
           <div class="programme-info__pic"><img src="./images/programme/programme-pic.png" /></div>
 `,document.querySelector(".programme-info").innerHTML=e}),$.getJSON("./json/programme.json",function(_){!function e(){let t="";for(let s=0;s<_.accordion.length;s++)t+=`
             <li
class="programme__accordion-item accordion__item"

>
<div class="accordion__header">
<div class="accordion__header-left">
<div class="accordion__index">${s+1}</div>
<div
class="accordion__title subtitle accordion-label"
>
${_.accordion[s].title}
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
${_.accordion[s].list.map(_=>`<li class="accordion__answer-item">${_}</li>`).join("")}
</ul>
</div>
</div>
</li>
 `,document.querySelector(".programme__accordion").innerHTML=t}();try{let e=document.querySelector(".programme").getElementsByClassName("accordion__item");for(i=0;i<e.length;i++)e[i].addEventListener("click",function(){this.classList.toggle("active");let _=this.querySelector(".accordion-content"),e=document.getElementsByClassName("accordion-content");function t(t){if(!this.contains(t.target)&&this.classList.contains("active")){this.classList.toggle("active");for(var s=0;s<e.length;s++)e[s].style.height=`${e[s].scrollHeight}px`,window.getComputedStyle(e[s],null).getPropertyValue("height"),e[s].style.height="0";_.addEventListener("transitionend",()=>{"0px"!==_.style.height&&(_.style.height="auto")})}}if(window.addEventListener("mouseup",t.bind(this)),"0px"===_.style.height){for(var s=0;s<e.length;s++)e[s].style.height=`${e[s].scrollHeight}px`,window.getComputedStyle(e[s],null).getPropertyValue("height"),e[s].style.height="0";_.style.height=`${_.scrollHeight}px`}else _.style.height=`${_.scrollHeight}px`,window.getComputedStyle(_,null).getPropertyValue("height"),_.style.height="0";_.addEventListener("transitionend",()=>{"0px"!==_.style.height&&(_.style.height="auto")})})}catch(t){console.log(t)}}),$.getJSON("./json/questions.json",function(_){!function e(){let t="";for(let s=0;s<_.accordion.length;s++)t+=`
                <li class="questions__accordion-item accordion__item">
              <div class="accordion__header">
                <div class="accordion__header-left">
                  <div
                    class="accordion__title subtitle accordion-label"
                  >
                     ${_.accordion[s].title} 
                   
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
                    ${_.accordion[s].answer} 
                  </div>
                </div>
              </div>
            </li>
`,document.querySelector(".questions__list").innerHTML=t}();try{let e=document.querySelector(".questions").getElementsByClassName("accordion__item");for(i=0;i<e.length;i++)e[i].addEventListener("click",function(){this.classList.toggle("active");let _=this.querySelector(".accordion-content"),e=document.getElementsByClassName("accordion-content");function t(t){if(!this.contains(t.target)&&this.classList.contains("active")){this.classList.toggle("active");for(var s=0;s<e.length;s++)e[s].style.height=`${e[s].scrollHeight}px`,window.getComputedStyle(e[s],null).getPropertyValue("height"),e[s].style.height="0";_.addEventListener("transitionend",()=>{"0px"!==_.style.height&&(_.style.height="auto")})}}if(window.addEventListener("mouseup",t.bind(this)),"0px"===_.style.height){for(var s=0;s<e.length;s++)e[s].style.height=`${e[s].scrollHeight}px`,window.getComputedStyle(e[s],null).getPropertyValue("height"),e[s].style.height="0";_.style.height=`${_.scrollHeight}px`}else _.style.height=`${_.scrollHeight}px`,window.getComputedStyle(_,null).getPropertyValue("height"),_.style.height="0";_.addEventListener("transitionend",()=>{"0px"!==_.style.height&&(_.style.height="auto")})})}catch(t){console.log(t)}})});