define(function() {
  var routes = [{hash: '#list', controller: 'listcontroller'}, 
                {hash: '#add', controller: 'addcontroller'}];
  var defaultRoute = '#list';
  var currentHash = '';

  function startRouting() {
    window.location.hash = window.location.hash || defaultRoute;
    setInterval(hashCheck, 100);
  }

  function hashCheck() {
    if (window.location.hash != currentHash) {
      for (var i = 0, currentRoute; currentRoute = routes[i++];) {
        if (window.location.hash == currentRoute.hash) {
          loadController(currentRoute.controller);
        }        
      }

      currentHash = window.location.hash;
    }
  }

  function loadController(controllerName) {
    require(['controllers/' + controllerName], function(controller) {
      controller.start();
    });
  }

  return {
    startRouting: startRouting
  };
});