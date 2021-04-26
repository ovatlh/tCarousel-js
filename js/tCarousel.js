const tCarousel = {
  // tCarousel
  class_tCarousel: "t-carousel",
  class_tActive: "t-active",
  class_tItems: "t-items",
  class_tItem: "t-item",
  // Buttons
  class_Btn_Left: "t-left",
  class_Btn_Right: "t-right",
  class_Btn_Up: "t-up",
  class_Btn_Down: "t-down",
  // Animations
  // -- IN
  class_t_H_IN_Left: "t-h-in-left",
  class_t_H_IN_Right: "t-h-in-right",
  class_t_V_IN_Up: "t-v-in-up",
  class_t_V_IN_Down: "t-v-in-down",
  // -- OUT
  class_t_H_OUT_Left: "t-h-out-left",
  class_t_H_OUT_Right: "t-h-out-right",
  class_t_V_OUT_Up: "t-v-out-up",
  class_t_V_OUT_Down: "t-v-out-down",
  // Error Messages
  error_tCNoID: "t-carousel without ID",
  error_NoItems: "No items",
  error_Min2Items: "Min 2 items",
  // Automatic tCarousel
  tAutomatic(id, time, direction) {
    if (!id || !time || !direction) {
      return;
    }
    setTimeout(function () {
      switch (direction) {
        case "left":
          tCarousel.tBTN_Left(id);
          break;
        case "right":
          tCarousel.tBTN_Right(id);
          break;
        case "up":
          tCarousel.tBTN_Up(id);
          break;
        case "down":
          tCarousel.tBTN_Down(id);
          break;
        default:
          tCarousel.tBTN_Left(id);
          break;
      }
      tCarousel.tAutomatic(id, time, direction);
    }, time);
  },
  tBTN_Left(parent_id) {
    var items = document.querySelectorAll(`#${parent_id} .${tCarousel.class_tItems} .${tCarousel.class_tItem}`);
    var itemActive = document.querySelector(`#${parent_id} .${tCarousel.class_tItems} .${tCarousel.class_tActive}`);
    var totalItems = items.length;
    if (totalItems <= 1) {
      console.log(`L - ${tCarousel.error_NoItems}: ", ${parent_id}, "| ${tCarousel.error_Min2Items}`);
      return;
    }
    var activeIndex = 0;
    if (!itemActive) {
      activeIndex = 0;
    } else {
      activeIndex = Array.from(items).indexOf(itemActive);
    }
    items.forEach((item) => {
      item.classList = "";
      item.classList.add(`${tCarousel.class_tItem}`);
    });
    items[activeIndex].classList.add(`${tCarousel.class_t_H_OUT_Right}`);

    var prevIndex = totalItems - 1;
    if (activeIndex > 0) {
      prevIndex = activeIndex - 1;
    }

    items[prevIndex].classList.add(`${tCarousel.class_tActive}`, `${tCarousel.class_t_H_IN_Left}`);
  },
  tBTN_Right(parent_id) {
    var items = document.querySelectorAll(`#${parent_id} .${tCarousel.class_tItems} .${tCarousel.class_tItem}`);
    var itemActive = document.querySelector(`#${parent_id} .${tCarousel.class_tItems} .${tCarousel.class_tActive}`);
    var totalItems = items.length;
    if (totalItems <= 1) {
      console.log(`R - ${tCarousel.error_NoItems}: ", ${parent_id}, "| ${tCarousel.error_Min2Items}`);
      return;
    }
    var activeIndex = 0;
    if (!itemActive) {
      activeIndex = 0;
    } else {
      activeIndex = Array.from(items).indexOf(itemActive);
    }
    items.forEach((item) => {
      item.classList = "";
      item.classList.add(`${tCarousel.class_tItem}`);
    });
    items[activeIndex].classList.add(`${tCarousel.class_t_H_OUT_Left}`);

    var nextIndex = 0;
    if (activeIndex < totalItems - 1) {
      var nextIndex = activeIndex + 1;
    }

    items[nextIndex].classList.add(`${tCarousel.class_tActive}`, `${tCarousel.class_t_H_IN_Right}`);
  },
  tBTN_Up(parent_id) {
    var items = document.querySelectorAll(`#${parent_id} .${tCarousel.class_tItems} .${tCarousel.class_tItem}`);
    var itemActive = document.querySelector(`#${parent_id} .${tCarousel.class_tItems} .${tCarousel.class_tActive}`);
    var totalItems = items.length;
    if (totalItems <= 1) {
      console.log(`U - ${tCarousel.error_NoItems}: ", ${parent_id}, "| ${tCarousel.error_Min2Items}`);
      return;
    }
    var activeIndex = 0;
    if (!itemActive) {
      activeIndex = 0;
    } else {
      activeIndex = Array.from(items).indexOf(itemActive);
    }
    items.forEach((item) => {
      item.classList = "";
      item.classList.add(`${tCarousel.class_tItem}`);
    });
    items[activeIndex].classList.add(`${tCarousel.class_t_V_OUT_Down}`);

    var prevIndex = totalItems - 1;
    if (activeIndex > 0) {
      prevIndex = activeIndex - 1;
    }

    items[prevIndex].classList.add(`${tCarousel.class_tActive}`, `${tCarousel.class_t_V_IN_Up}`);
  },
  tBTN_Down(parent_id) {
    var items = document.querySelectorAll(`#${parent_id} .${tCarousel.class_tItems} .${tCarousel.class_tItem}`);
    var itemActive = document.querySelector(`#${parent_id} .${tCarousel.class_tItems} .${tCarousel.class_tActive}`);
    var totalItems = items.length;
    if (totalItems <= 1) {
      console.log(`D - ${tCarousel.error_NoItems}: ", ${parent_id}, "| ${tCarousel.error_Min2Items}`);
      return;
    }
    var activeIndex = 0;
    if (!itemActive) {
      activeIndex = 0;
    } else {
      activeIndex = Array.from(items).indexOf(itemActive);
    }
    items.forEach((item) => {
      item.classList = "";
      item.classList.add(`${tCarousel.class_tItem}`);
    });
    items[activeIndex].classList.add(`${tCarousel.class_t_V_OUT_Up}`);

    var nextIndex = 0;
    if (activeIndex < totalItems - 1) {
      var nextIndex = activeIndex + 1;
    }

    items[nextIndex].classList.add(`${tCarousel.class_tActive}`, `${tCarousel.class_t_V_IN_Down}`);
  },
  tBTN_ClickEvents() {
    const btns_Left = document.querySelectorAll(`.${tCarousel.class_Btn_Left}`);
    const btns_Right = document.querySelectorAll(`.${tCarousel.class_Btn_Right}`);
    const btns_Up = document.querySelectorAll(`.${tCarousel.class_Btn_Up}`);
    const btns_Down = document.querySelectorAll(`.${tCarousel.class_Btn_Down}`);
    btns_Left.forEach(function (button) {
      button.addEventListener("click", function() {
        tCarousel.tBTN_Left(this.parentNode.id);
      });
    });
    btns_Right.forEach(function (button) {
      button.addEventListener("click", function() {
        tCarousel.tBTN_Right(this.parentNode.id);
      });
    });
    btns_Up.forEach(function (button) {
      button.addEventListener("click", function() {
        tCarousel.tBTN_Up(this.parentNode.id);
      });
    });
    btns_Down.forEach(function (button) {
      button.addEventListener("click", function() {
        tCarousel.tBTN_Down(this.parentNode.id);
      });
    });
  },
  tSetup(){
    var tCarouselContainers = document.querySelectorAll(`.${tCarousel.class_tCarousel}`);
    tCarouselContainers.forEach(function (tC) {
      if (tC?.id) {
        const tItemsContainer = document.querySelector(`#${tC.id} .${tCarousel.class_tItems}`);
        const itemActive = document.querySelector(`#${tC.id} .${tCarousel.class_tItems} .${tCarousel.class_tActive}`);
        if (!itemActive && tItemsContainer?.childElementCount > 0) {
          tItemsContainer.children[0].classList.add(`${tCarousel.class_tActive}`);
        }
        tCarousel.tAutomatic(
          tC.id,
          tC.dataset.tcTimeSeg * 1000,
          tC.dataset.tcDirection
        );
      } else {
        console.log(`${tCarousel.error_tCNoID}`);
      }
    });
  },
  tInit() {
    tCarousel.tSetup();
    tCarousel.tBTN_ClickEvents();
  },
};

tCarousel.tInit();
