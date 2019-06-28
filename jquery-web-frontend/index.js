$(function() {
  const addTodo = ({ action, done = false }) => {
    let html = `<tr class=${done ? 'text-success' : ''}>`;
    html += `<td><input type='checkbox' ${done ? 'checked' : ''}/></td>`;
    html += `<td>${action}</td>`;
    html += `<td><button class="btn btn-danger">删除</button></td>`;
    html += '</tr>';
    $('tbody').append(html);
  };

  const reload_data = _ => {
    $('tbody tr').remove();
    $.get('http://localhost:8080/api/todo').done(todos => {
      todos.forEach(todo => addTodo(todo));
    });
  };

  reload_data();

  $('form button').click(event => {
    event.preventDefault();

    const action = $('input').val();

    $.post('http://localhost:8080/api/todo', { action }).done(_ => {
      $('input').val('');
      addTodo({ action });
    });
  });

  $('table').on('click', ':checkbox', function() {
    const checked = $(this).prop('checked');
    const tr = $(this).parents('tr');
    const index = tr.index();

    $.post(`http://localhost:8080/api/todo/toggle/${index}`).done(_ => {
      tr.addClass(checked ? 'text-success' : '');
    });
  });

  $('table').on('click', 'button', function() {
    const tr = $(this).parents('tr');
    const index = tr.index();
    console.log(index);
    $.ajax({
      url: `http://localhost:8080/api/todo/${index + 1}`,
      type: 'DELETE'
    }).done(_ => tr.remove());
  });
});
