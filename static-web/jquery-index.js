$(function() {
  $('form button').click(event => {
    event.preventDefault();

    const action = $('input').val();
    let html = '<tr>';
    html += `<td><input type='checkbox'/></td>`;
    html += `<td>${action}</td>`;
    html += `<td><button class="btn btn-danger">删除</button></td>`;
    html += '</tr>';
    $('tr:last').after(html);

    $('input').val('');
  });

  $(':checkbox').click(function() {
    const checked = $(this).prop('checked');
    $(this)
      .parents('tr')
      .addClass(checked ? 'text-success' : '');
  });

  $('tr button').click(function() {
    $(this)
      .parents('tr')
      .remove();
  });
});
