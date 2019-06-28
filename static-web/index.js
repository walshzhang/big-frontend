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

function add(event) {
  event.preventDefault(); // 禁止表单提交的默认行为

  var input = document.getElementsByTagName('input')[0];
  var tbody = document.getElementsByTagName('tbody')[0];

  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('onclick', 'toggle(this)');
  td1.appendChild(checkbox);

  var text = document.createTextNode(input.value);
  td2.appendChild(text);

  var button = document.createElement('button');
  var text2 = document.createTextNode('删除');
  button.appendChild(text2);
  button.setAttribute('onclick', 'remove(this)');
  button.className = 'btn btn-danger';
  td3.appendChild(button);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  tbody.appendChild(tr);

  input.value = '';
}
