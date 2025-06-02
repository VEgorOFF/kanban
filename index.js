//выпадающее меню аватара

const divUserMenu = document.querySelector(".user-menu");
const divArrowImg = divUserMenu.querySelector(".arrow").querySelector("img");

divUserMenu.addEventListener("click", function () {
  if (document.querySelector(".user-menu__pop-up")) {
    document.querySelector(".user-menu__pop-up").remove();
    divArrowImg.style.transform = "rotate(0deg)";
  } else {
    divArrowImg.style.transform = "rotate(180deg)";
    const popUpUserMenu = document.createElement("div");
    popUpUserMenu.className = "user-menu__pop-up";
    const spanText1 = document.createElement("span");
    spanText1.textContent = "Profile";
    const spanText2 = document.createElement("span");
    spanText2.textContent = "Log Out";
    popUpUserMenu.appendChild(spanText1);
    popUpUserMenu.appendChild(spanText2);
    divUserMenu.appendChild(popUpUserMenu);
  }
});
