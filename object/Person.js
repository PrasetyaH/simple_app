module.exports = function(){
	this.name = 'Default name';
	this.address = 'Default Address';
	this.setName = function (name) {
		this.name = name;
	}
	this.getName = function() {
		return this.name;
	}
}