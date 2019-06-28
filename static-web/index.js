function toggle(checkbox) {
  var className = checkbox.checked ? 'text-success' : null;
  var td = checkbox.parentNode;
  var tr = td.parentNode;
  tr.className = className;
}

function remove(button) {
  var td = button.parentNode;
  var tr = td.parentNode;

  var tbody = document.getElementsByTagName('tbody')[0];

  for (var i = 0; i < tbody.rows.length; i++) {
    if (tr === tbody.rows[i]) {
      tbody.deleteRow(i);
      break;
    }
  }
}
