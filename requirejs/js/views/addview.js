define(['jquery'], function($) {
  function render(parameters) {
    var $appDiv = $('#app');
    $appDiv.html($('<input id="user-name" /><button id="add">Add this user</button>'));
  }

  return {
    render: render
  } 
});