import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }

  render() {
    let ribbon = createElement(
      `
    <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner">
    `
    );

    let ribbonInner = ribbon.querySelector(".ribbon__inner");

    for (let category of this.categories) {
      if (category.id === "") {
        ribbonInner.insertAdjacentHTML(
          "beforeend",
          `
        <a href="#" class="ribbon__item ribbon__item_active" data-id="${category.id}">${category.name}</a>
        `
        );
        continue;
      }
      ribbonInner.insertAdjacentHTML(
        "beforeend",
        `
      <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
      `
      );
    }

    ribbon.insertAdjacentHTML(
      "beforeend",
      `
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      `
    );

    ribbon.addEventListener("click", (event) => {
      let rightArrow = event.target.closest(".ribbon__arrow_right");
      let leftArrow = event.target.closest(".ribbon__arrow_left");
      let ribbonItem = event.target.closest(".ribbon__item");
      let oldRibbonItem = document.querySelector(".ribbon__item_active");
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      let move = (leftArrow && moveLeft()) || (rightArrow && moveRight());

      if (ribbonItem) {
        let ribbonId = ribbonItem.dataset;

        let chosenRibbonEvent = new CustomEvent("ribbon-select", {
          detail: ribbonId.id,
          bubbles: true,
        });

        event.target.closest(".ribbon").dispatchEvent(chosenRibbonEvent);

        event.preventDefault();
        oldRibbonItem.classList.remove("ribbon__item_active");
        ribbonItem.classList.add("ribbon__item_active");
      }

      function moveLeft() {
        ribbonInner.scrollBy(-350, 0);
        if (scrollLeft === 0) {
          leftArrow.classList.remove("ribbon__arrow_visible");
          let right = document.querySelector(".ribbon__arrow_right");
          right.classList.add("ribbon__arrow_visible");
        }
      }

      function moveRight() {
        ribbonInner.scrollBy(350, 0);
        if (scrollRight < 1) {
          rightArrow.classList.remove("ribbon__arrow_visible");
          let left = document.querySelector(".ribbon__arrow_left");
          left.classList.add("ribbon__arrow_visible");
        }
      }
    });

    return ribbon;
  }
}
