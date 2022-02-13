function toggleText() {
  const button = document.querySelector("button");
  const text = document.getElementById("text");

  button.addEventListener("click", () => {
    text.hasAttribute('hidden') ? text.hidden = false : text.hidden = true;
  })
}
