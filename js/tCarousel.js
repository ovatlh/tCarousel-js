const tCarousel = {
  automatic(id, time, direction) {
    if (!id || !time || !direction) {
      return;
    }

    // setTimeout(function () {
    //   console.log("ID: ", id, "| Time seg: ", (time / 1000), "| Dir: ", direction);
    //   tCarousel.automatic(id, time, direction);
    // }, time);
  },
  btnLeft(parentID) {
    console.log(`left: ${parentID}`);
  },
  btnRight(parentID) {
    console.log(`right: ${parentID}`);
  },
  btnUp(parentID) {
    console.log(`up: ${parentID}`);
  },
  btnDown(parentID) {
    console.log(`down: ${parentID}`);
  },
  btnEvents() {
    const btnsLeft = document.querySelectorAll(".t-left");
    const btnsRight = document.querySelectorAll(".t-right");
    const btnsUp = document.querySelectorAll(".t-up");
    const btnsDown = document.querySelectorAll(".t-down");

    btnsLeft.forEach(function (button, index, array) {
      button.addEventListener("click", function () {
        tCarousel.btnLeft(this.parentNode.id);
      });
    });
    btnsRight.forEach(function (button, index, array) {
      button.addEventListener("click", function () {
        tCarousel.btnRight(this.parentNode.id);
      });
    });
    btnsUp.forEach(function (button, index, array) {
      button.addEventListener("click", function () {
        tCarousel.btnUp(this.parentNode.id);
      });
    });
    btnsDown.forEach(function (button, index, array) {
      button.addEventListener("click", function () {
        tCarousel.btnDown(this.parentNode.id);
      });
    });
  },
  init() {
    var tCarouselContainers = document.querySelectorAll(".t-carousel");
    
    tCarouselContainers.forEach(function (value, index, array) {
      if (value?.id) {
        const tItemsContainer = document.querySelector(`#${value.id} .t-items`);

        const itemActive = document.querySelector(
          `#${value.id} .t-items .t-active`
        );
        if (!itemActive && tItemsContainer.childElementCount > 0) {
          tItemsContainer.children[0].classList.add("t-active");
        }

        tCarousel.automatic(
          value.id,
          value.dataset.tcTimeSeg * 1000,
          value.dataset.tcDirection
        );
      } else {
        console.log("t-carousel without ID");
      }
    });

    tCarousel.btnEvents();
  },
};

tCarousel.init();
