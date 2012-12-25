define(['jquery', 'libs/jquery.tmpl', 'libs/jquery.tmplPlus'], function($) {
  function render(parameters) {
    var $appDiv = $('#app');
    var users = parameters.users;
    var data = [];

    for (var i = 0, len = users.length; i < len; i++) {
      data.push({name: users[i].name});
    }

    var $html = $('<ul></ul>');
    $html.append('<li>${name}</li>', data);
    $appDiv.html($html);
  }

  return {
    render: render
  };
});