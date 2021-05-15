const tCarousel = {
  // tCarousel
  class_tBTN: "t-btn",
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
  error_NoItems: "No items or Null",
  error_Min2Items: "Min 2 items",
  intervalsObj: {},
  tAutomatic(id, time, direction) {
    if (!tCarousel.intervalsObj[`${id}`]) {
      console.log("tCarousel - Automatic: ", id, time, direction);
      tCarousel.intervalsObj[`${id}`] = setInterval(() => {
        tCarousel.tBTN(id, direction);
      }, time);
    } else {
      console.log("tCarousel - Running: ", id, time, direction);
    }
  },
  tBTN(id, direction) {
    var items = document.querySelectorAll(
      `#${id} .${tCarousel.class_tItems} .${tCarousel.class_tItem}`
    );
    var item_active = document.querySelector(
      `#${id} .${tCarousel.class_tItems} .${tCarousel.class_tActive}`
    );
    var total_items = items.length;
    if (total_items <= 1) {
      console.log("---------------------------------------");
      console.log(document.getElementById(id));
      console.error(
        `tCarousel: #${id} - direction: ${direction}\n${tCarousel.error_NoItems}\n${tCarousel.error_Min2Items}`
      );
      console.log("---------------------------------------");
      return;
    }

    var active_index = 0;
    if (item_active) {
      active_index = Array.from(items).indexOf(item_active);
    }

    items.forEach((item) => {
      item.classList = "";
      item.classList.add(`${tCarousel.class_tItem}`);
    });

    var class_result_out = "";
    switch (direction) {
      case "left":
        class_result_out = `${tCarousel.class_t_H_OUT_Right}`;
        break;
      case "right":
        class_result_out = `${tCarousel.class_t_H_OUT_Left}`;
        break;
      case "up":
        class_result_out = `${tCarousel.class_t_V_OUT_Down}`;
        break;
      case "down":
        class_result_out = `${tCarousel.class_t_V_OUT_Up}`;
        break;
      default:
        class_result_out = `${tCarousel.class_t_H_OUT_Right}`;
        break;
    }
    items[active_index].classList.add(class_result_out);

    //Is Horizontal
    if (direction === "left" || direction === "right") {
      //Is left
      if (direction === "left") {
        var prev_index = total_items - 1;
        if (active_index > 0) {
          prev_index = active_index - 1;
        }

        items[prev_index].classList.add(
          `${tCarousel.class_tActive}`,
          `${tCarousel.class_t_H_IN_Left}`
        );
      }
      //Is Right
      else {
        var next_index = 0;
        if (active_index < total_items - 1) {
          next_index = active_index + 1;
        }

        items[next_index].classList.add(
          `${tCarousel.class_tActive}`,
          `${tCarousel.class_t_H_IN_Right}`
        );
      }
    }

    //Is Vertical
    else {
      //Is Up
      if (direction === "up") {
        var prev_index = total_items - 1;
        if (active_index > 0) {
          prev_index = active_index - 1;
        }

        items[prev_index].classList.add(
          `${tCarousel.class_tActive}`,
          `${tCarousel.class_t_V_IN_Up}`
        );
      }
      //Is Down
      else {
        var next_index = 0;
        if (active_index < total_items - 1) {
          next_index = active_index + 1;
        }

        items[next_index].classList.add(
          `${tCarousel.class_tActive}`,
          `${tCarousel.class_t_V_IN_Down}`
        );
      }
    }
  },
  tBTNExtra(event) {
    var res_tC = event.target.closest(`.${tCarousel.class_tCarousel}`);
    var btn = event.target.closest(`.${tCarousel.class_tBTN}`);
    
    if(btn.classList.contains(`${tCarousel.class_Btn_Left}`)) {
      tCarousel.tBTN(res_tC.id, "left");
    }
    if(btn.classList.contains(`${tCarousel.class_Btn_Right}`)) {
      tCarousel.tBTN(res_tC.id, "right");
    }
    if(btn.classList.contains(`${tCarousel.class_Btn_Up}`)) {
      tCarousel.tBTN(res_tC.id, "up");
    }
    if(btn.classList.contains(`${tCarousel.class_Btn_Down}`)) {
      tCarousel.tBTN(res_tC.id, "down");
    }
  },
  tBTN_ClickEvents() {
    const btns_Left = document.querySelectorAll(`.${tCarousel.class_Btn_Left}`);
    const btns_Right = document.querySelectorAll(`.${tCarousel.class_Btn_Right}`);
    const btns_Up = document.querySelectorAll(`.${tCarousel.class_Btn_Up}`);
    const btns_Down = document.querySelectorAll(`.${tCarousel.class_Btn_Down}`);
    
    btns_Left.forEach((button) => {
      button.removeEventListener("click", tCarousel.tBTNExtra);
    });
    btns_Left.forEach((button) => {
      button.addEventListener("click", tCarousel.tBTNExtra);
    });

    btns_Right.forEach((button) => {
      button.removeEventListener("click", tCarousel.tBTNExtra);
    });
    btns_Right.forEach((button) => {
      button.addEventListener("click", tCarousel.tBTNExtra);
    });
    
    btns_Up.forEach((button) => {
      button.removeEventListener("click", tCarousel.tBTNExtra);
    });
    btns_Up.forEach((button) => {
      button.addEventListener("click", tCarousel.tBTNExtra);
    });
    
    btns_Down.forEach((button) => {
      button.removeEventListener("click", tCarousel.tBTNExtra);
    });
    btns_Down.forEach((button) => {
      button.addEventListener("click", tCarousel.tBTNExtra);
    });
  },
  tSetup() {
    var tCarouselContainers = document.querySelectorAll(
      `.${tCarousel.class_tCarousel}`
    );
    tCarouselContainers.forEach(function (tC) {
      if (tC?.id) {
        const tItemsContainer = document.querySelector(
          `#${tC.id} .${tCarousel.class_tItems}`
        );
        const itemActive = document.querySelector(
          `#${tC.id} .${tCarousel.class_tItems} .${tCarousel.class_tActive}`
        );
        if (!itemActive && tItemsContainer?.childElementCount > 0) {
          tItemsContainer.children[0].classList.add(
            `${tCarousel.class_tActive}`
          );
        }
        if (tC?.id && tC.dataset?.tcTimeSeg && tC.dataset?.tcDirection) {
          tCarousel.tAutomatic(
            tC.id,
            tC.dataset.tcTimeSeg * 1000,
            tC.dataset.tcDirection
          );
        }
      } else {
        console.error(`${tCarousel.error_tCNoID}`);
      }
    });
  },
  tInit() {
    tCarousel.tSetup();
    tCarousel.tBTN_ClickEvents();
  },
};

tCarousel.tInit();
