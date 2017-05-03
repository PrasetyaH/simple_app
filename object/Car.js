module.exports = function(){
	this.name = 'Honda HRV',
	this.brand = 'Honda',
	this.year  = '2010',
	this.price = '300',
	this.age = function(year){
		return year - this.year;
	}
}