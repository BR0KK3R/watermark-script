window.addEventListener('message', function (event) {
  let item = event.data;
  if(item.status === true) {
      id = item.id
      display(true);
  } else {
      display(false);
  }
});

function display(bool) {
  if(bool) {
      $('#id').html(`ID: ${id}`)
      $('.container').show();
  } else {
      $('.container').hide();
  };
};