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
    console.log(`left reverse: ${parentID}`);
    var items = document.querySelectorAll(`#${parentID} .t-items .t-item`);
    var itemActive = document.querySelector(`#${parentID} .t-items .t-active`);
    var totalItems = items.length;
    
    var activeIndex = 0;
    
    if(!itemActive){
      activeIndex = 0;
    } else {
      activeIndex = Array.from(items).indexOf(itemActive);
    }

    items.forEach(item => {
      item.classList = "";
      item.classList.add("t-item");
    });

    items[activeIndex].classList.add("t-out-prev-last-active");

    var prevIndex = totalItems - 1;
    if(activeIndex > 0){
      prevIndex = activeIndex - 1;
    }
    items[prevIndex].classList.add("t-active","t-in-prev-exact-active");

    // items[activeIndex].classList.add("t-out-prev");
    
    // var nextIndex = 0;
    // if(activeIndex < totalItems - 1){
    //   var nextIndex = activeIndex + 1;
    // }
    // items[nextIndex].classList.add("t-active","t-in-next");

    // console.log("Active: ", activeIndex, "| Next: ", nextIndex, "| Total: ", totalItems);
    console.log("Active: ", activeIndex, "| Total: ", totalItems);
  },
  btnRight(parentID) {
    console.log(`right normal: ${parentID}`);
    var items = document.querySelectorAll(`#${parentID} .t-items .t-item`);
    var itemActive = document.querySelector(`#${parentID} .t-items .t-active`);
    var totalItems = items.length;

    var activeIndex = 0;
    
    if(!itemActive){
      activeIndex = 0;
    } else {
      activeIndex = Array.from(items).indexOf(itemActive);
    }

    items.forEach(item => {
      item.classList = "";
      item.classList.add("t-item");
    });

    items[activeIndex].classList.add("t-out-next-last-active");
    
    var nextIndex = 0;
    if(activeIndex < totalItems - 1){
      var nextIndex = activeIndex + 1;
    }
    items[nextIndex].classList.add("t-active","t-in-next-exact-active");

    console.log("Active: ", activeIndex, "| Next: ", nextIndex, "| Total: ", totalItems);
  },
  btnUp(parentID) {
    console.log(`up reverse: ${parentID}`);
  },
  btnDown(parentID) {
    console.log(`down normal: ${parentID}`);
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
        if (!itemActive && tItemsContainer?.childElementCount > 0) {
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
