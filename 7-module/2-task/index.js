import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.render();
  }

  render() {
    this.modal = createElement(
      `
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>
      `
    );
  }

  open() {
    this.modal.addEventListener("click", (event) => {
      if (event.target.closest(".modal__close")) {
        this.close();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        this.close();
      }
    });

    document.body.classList.add("is-modal-open");
    document.body.append(this.modal);
  }

  setTitle(title) {
    this.modal.querySelector(".modal__title").textContent = title;
  }

  setBody(bodyHTML) {
    this.modal.querySelector(".modal__body").append(bodyHTML);
  }

  close() {
    document.removeEventListener("keydown", this.onEscape);
    document.body.classList.remove("is-modal-open");
    this.modal.remove();
  }
}
