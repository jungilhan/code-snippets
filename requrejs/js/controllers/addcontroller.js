define(['views/addview', 'models/user', 'jquery'], function(AddView, User, $) {
  function start() {
    AddView.render();
    bindEvents();
  }

  function bindEvents() {
    $('#add').click(function() {
      var users = JSON.parse(localStorage.users);
      var userName = $('#user-name').val();
      users.push(new User(userName));
      localStorage.users = JSON.stringify(users);
      window.location.hash = '#list';
    });
  }

  return {
    start: start
  };
});