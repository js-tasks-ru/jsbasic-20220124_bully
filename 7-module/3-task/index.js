import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({steps, value = 0}) {
    this.steps = steps;
    this.render();
    this.value = value;
  }

  render() {
    this.elem = createElement(`
    <div class="slider">
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">0</span>
    </div>
    <div class="slider__progress" style="width: 50%;"></div>
    <div class="slider__steps"></div>
  </div>
    `);

    let thumb = this.elem.querySelector(".slider__thumb");
    let progress = this.elem.querySelector(".slider__progress");

    let sliderSteps = this.elem.querySelector(".slider__steps");
    for (let i = 0; i < this.steps; i++) {
      let span = createElement(`<span>`);
      if (i === 0) {
        span.classList.add("slider__step-active");
      }
      sliderSteps.insertAdjacentElement("beforeend", span);
    }

    thumb.style.left = `0%`;
    progress.style.width = `0%`;


    this.elem.onclick = (event) => {
      if (event.target.closest(".slider")) {

        let rect = this.elem.getBoundingClientRect();
        let x = event.clientX - rect.left;
        this.value = Math.round((this.steps - 1) - ((this.elem.offsetWidth - x) / (this.elem.offsetWidth / (this.steps - 1))));
        thumb.querySelector(".slider__value").textContent = this.value;

        for (let elements = document.getElementsByClassName("slider__step-active"), i = 0, l = elements.length; l > i; i++) {
          elements[0].classList.remove("slider__step-active");
        }

        this.elem.querySelector(".slider__steps").children[this.value].classList.add("slider__step-active");

        let leftPercents = this.value / (this.steps - 1) * 100;
        thumb.style.left = `${leftPercents}%`;
        progress.style.width = `${leftPercents}%`;

        let sliderChangeEvent = new CustomEvent("slider-change", {
          detail: this.value,
          bubbles: true
        });

        event.target.closest(".slider").dispatchEvent(sliderChangeEvent);
      }
    };
  }

}
