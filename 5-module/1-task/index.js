function hideSelf() {
  let button = document.querySelector('button');

  button.addEventListener('click', () => {
    button.hidden = true;
  })
}
