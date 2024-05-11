let table = document.body.firstElementChild;
console.log(table);
console.log(table.rows);
let element = table.rows.length;
console.log(element);

for (let i = 0; i < element; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
}
