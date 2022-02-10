function highlight(table) {
  let row = Array.from(table.getElementsByTagName('tr'));

  row.forEach(tr => {
    let status = tr.lastElementChild.getAttribute("data-available");

    if (status) {
      status === "true" ? tr.classList.add("available") : tr.classList.add("unavailable");
    } else {
      tr.hidden = true;
    }

    if (!(tr.cells[2] === "Gender")) {
      tr.cells[2].innerHTML === "m" ? tr.classList.add("male") : tr.classList.add("female");
    }

    if (tr.cells[1].innerHTML < 18) {
      tr.style.textDecoration = "line-through";
    }
  });
}
