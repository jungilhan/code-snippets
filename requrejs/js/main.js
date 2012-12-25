require(['models/user', 'router'], function(User, Router) {
	var users = [new User('Barney'),
	             new User('Cartman'),
	             new User('Sheldon')];

	for (var i = 0, len = users.length; i < len; i++) {
		console.log(users[i].name);
	}

	localStorage.users = JSON.stringify(users);

  Router.startRouting();
});