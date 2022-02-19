/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
  }

  render() {
    let table = document.createElement("table");

    table.insertAdjacentHTML(
      "afterbegin",
      `<thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
    </thead>`
    );

    for (let row of this.rows) {
      table.insertAdjacentHTML(
        "beforeend",
        `<tr>
                 <td>${row.name}</td>
                 <td>${row.age}</td>
                 <td>${row.salary}</td>
                 <td>${row.city}</td>
                 <td>
                     <button>X</button>
                 </td>
             </tr>`
      );
    }
    table.addEventListener("click", this.deleteRow);

    return table;
  }

  deleteRow(event) {
    let btn = event.target.closest("button");

    if (btn) {
      let targetRow = btn.parentNode.parentNode;
      targetRow.parentNode.removeChild(targetRow);
    }
  }
}
