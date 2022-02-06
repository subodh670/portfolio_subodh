"use strict";
//Windows top navbar
const navHeight = document.querySelector("nav");
const linkItems = document.querySelector(".link-items");
window.addEventListener("scroll", function (e) {
  var scrollHeight = window.pageYOffset;
  var navCoord = navHeight.getBoundingClientRect().height;
  if (scrollHeight > navCoord) {
    navHeight.classList.add("fixed-nav");
  } else {
    navHeight.classList.remove("fixed-nav");
  }
});

//Dynamically put items in menu
const menu = [
  {
    category: "C++",
    title: "supermarket Billing system",
    image: "./image1.jpg",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    learnMore:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.hello",
  },
  {
    category: "python",
    title: "Machine learning Algorithms",
    image: "./image2.jpg",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    learnMore:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const menuBtn = document.querySelector(".menu-btn");
const projectItems = document.querySelector(".projects-item");
const btns = document.querySelector(".buttons");

function specificItem() {
  const totalBtns = menu.map(function (item) {
    return item.category;
  });
  const uniqueBtn = totalBtns.reduce(
    function (accu, curr) {
      if (!accu.includes(curr)) {
        accu.push(curr);
      }
      return accu;
    },
    ["all"]
  );
  const putBtn = uniqueBtn
    .map(function (e) {
      return `<button class="cplusplus menu-btn">${e}</button>`;
    })
    .join("");
  btns.innerHTML = putBtn;
  const allBtns = document.querySelectorAll(".menu-btn");
  allBtns.forEach(function (item) {
    item.addEventListener("click", function (e) {
      const targetId = e.currentTarget.textContent.trim();
      const filterBtn = menu.filter(function (fbtn) {
        return fbtn.category === targetId;
      });
      if (targetId === "all") {
        menuAll(menu);
      } else {
        menuAll(filterBtn);
      }
    });
  });
  const projectItem = document.querySelectorAll(".project-item");
  projectItem.forEach(function (item, i) {
    if (i % 2 == 1) {
      item.style.flexDirection = "row-reverse";
    }
  });
}

//Dynamically load menu in all categories

window.addEventListener("DOMContentLoaded", function () {
  menuAll(menu);
  specificItem();
  reverseFlex();
});

function menuAll(m) {
  const menuDynamic = m
    .map(function (e) {
      return `<div class="project-item">
    <div class="photo">
      <img src="${e.image}" alt="image1" />
    </div>
    <div class="desc">
      <p class="category">${e.category}</p>
      <div>
        <h1>${e.title}</h1>
        <p class="description">
          ${e.desc}
        </p>
      </div>
      <button class="buttons-learn">Learn more</button>
      <div class="modal-window">
              <div class="modal_info">
              <div class="cut-window">&times;</div>
                <p class="info-more">
                 ${e.learnMore}
                </p>
                
              </div>
              
            </div>
            <div class="modal-out"></div>
    </div>
    
  </div>`;
    })
    .join("");
  projectItems.innerHTML = menuDynamic;
  const projectItem = document.querySelectorAll(".project-item");
  projectItem.forEach(function (item, i) {
    if (i % 2 == 1) {
      item.style.flexDirection = "row-reverse";
    }
  });
  modalfunc();
}
function reverseFlex() {
  const projectItem = document.querySelectorAll(".project-item");
  projectItem.forEach(function (item, i) {
    if (i % 2 == 1) {
      item.style.flexDirection = "row-reverse";
    }
  });
}
//Mobile navbar
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const crossDisplay = document.querySelector(".cross");
hamburger.addEventListener("click", function (e) {
  if (navList.classList.contains("toggle-nav")) {
    navList.classList.remove("toggle-nav");
    hamburger.classList.add("toggle-icon");
    crossDisplay.style.display = "block";
  }
});
crossDisplay.addEventListener("click", function (e) {
  navList.classList.add("toggle-nav");
  hamburger.classList.remove("toggle-icon");
  crossDisplay.style.display = "none";
});

//Modal window

const modalfunc = function () {
  const buttons = document.querySelectorAll(".buttons-learn");
  const backgrounds = document.querySelectorAll(".modal-out");
  const projectItem = document.querySelectorAll(".project-item");
  const cutWindow = document.querySelectorAll(".cut-window");
  buttons.forEach(function (item, i) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const target = e.currentTarget.parentElement.parentElement;
      target.classList.toggle("modal-switch");
      backgrounds[i].classList.toggle("background-toggle");
      backgrounds[i].addEventListener("click", function (bck) {
        backgrounds[i].classList.remove("background-toggle");
        target.classList.remove("modal-switch");
      });
      projectItem.forEach(function (pi) {
        if (target !== pi) {
          pi.classList.remove("modal-switch");
        }
      });
      if (target.classList.contains("modal-switch")) {
        cutWindow[i].addEventListener("click", function (e) {
          target.classList.remove("modal-switch");
        });
      }
    });
  });
};

//scroll-window
const navLinkScroll = document.querySelectorAll(".link-item");
// const navList = document.querySelector(".nav-list");
navLinkScroll.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const rectCoords = navList.getBoundingClientRect().height;
    const offsetElement = element.offsetTop - rectCoords;
    window.scrollTo({ top: offsetElement, left: 0 });
  });
});
