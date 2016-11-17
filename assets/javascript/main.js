function pnpUser(userName) {
	this.name = "";
	this.email = "";
	this.address = "";
	this.contacts = [{name: "John Doe", email: "jdoe@gmail.com", address: "666 Boring Dr. Small Town, IA 88899"},
					{name: "Jane Doe", email: "janed@gmail.com", address: "333 Waiting St. Factory Town, MI 77766"},
					{name: "Delilah Goodbody", email: "delgb@gmail.com", address: "23 Madison Ave New York, NY 22244"}];

	function init() {
		self.name = "Dudley Doright";
		self.email = "dudley_doright@gmail.com";
		self.address = "Somewhere St. Manitoba, Canada 99999"
		console.log(self.name + ";" + self.email + ";" + self.address);
	}

	var self = this;

	init();

}