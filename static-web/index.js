function toggle(checkbox) {
  var className = checkbox.checked ? 'text-success' : null;
  var td = checkbox.parentNode;
  var tr = td.parentNode;
  tr.className = className;
}
