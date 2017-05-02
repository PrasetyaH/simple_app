var person = require ('./object/Person');
//person.setName('herwin');
//var nama = person.getName();
var herwin = new person();
herwin.setName('Herwin Prasetya');
var nama = herwin.getName();
var address =  herwin.address;
console.log('My Name is : '+nama);
console.log('My Address is : '+address);
